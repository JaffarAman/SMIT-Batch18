import express from "express"
const PORT = process.env.PORT || 5000
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { sendOTPTemplate, welcomeUserTemplate } from "./templates.js"
import mongoose from "mongoose"
import UserModel from "./models/User.js"
import bcrypt from "bcryptjs"
import { setServers } from "node:dns/promises"
import OtpModel from "./models/OTP.js"
import jwt from "jsonwebtoken"
import { authMiddleware } from "./middleware.js"
import e from "express"
import { generateOTP } from "./utils.js"
setServers(["8.8.8.8", "1.1.1.1"])
dotenv.config()


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const URI = process.env.MONGODB_URI
mongoose.connect(URI)
    .then(() => console.log(`mongoDB COnnected!`))
    .catch(err => console.log(`MongoDb error: ${err.message}`))

app.post("/api/signup", async (request, response) => {
    try {

        const body = request.body
        const { email, fullName, password } = body

        if (!email || !password || !fullName) {
            return response.json({
                message: "required values are missing",
                status: false
            })
        }

        // check user email 
        const user = await UserModel.findOne({ email })
        if (user) {
            return response.json({
                message: "email address already hai hamary pass",
                status: false
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const userObj = {
            email,
            fullName,
            password: hashPassword
        }

        const userCreated = await UserModel.create(userObj)

        const transporter = nodemailer.createTransport({
            service: process.env.SMTP_SERVICE,
            auth: {
                user: process.env.SMTP_USER_EMAIL,
                pass: process.env.SMTP_APP_PASS
            },
        })

        // const otp = Math.floor(100000 + Math.random() * 900000);
        const otp = generateOTP()
        const mailOptions = {
            from: process.env.SMTP_USER_EMAIL,
            to: userObj.email,
            subject: 'OTP VERIFICATION',
            html: sendOTPTemplate(userObj, otp)
        }

        transporter.sendMail(mailOptions, (error, success) => {
            if (error) {
                console.log(`email send error`, error.message)
            } else {
                console.log(`email send success`, success.response)
            }
        })

        // save otp in OTP collection
        // let OTPExpiretime = new Date()
        // OTPExpiretime.setMinutes(OTPExpiretime.getMinutes() +
        //     Number(process.env.OTP_EXPIRE_TIME))
        const otpObj = {
            otp: otp,
            email: userObj.email,
            // expireAt: OTPExpiretime
        }

        await OtpModel.create(otpObj)


        // generate jwt token
        const token = jwt.sign({
            _id: userCreated._id,
            email: userObj.email
        }, process.env.JWT_SECRET)


        response.json({
            message: "user signUp successfully",
            status: true,
            token
        })
    } catch (error) {
        response.json({
            message: error.message || "something went wrong",
            status: false
        })
    }
})

app.post("/api/login", async (request, response) => {
    try {

        const body = request.body
        const { email, password } = body

        if (!email || !password) {
            return response.json({
                message: "required values are missing",
                status: false
            })
        }

        // check user email 
        const user = await UserModel.findOne({ email })
        if (!user) {
            return response.json({
                message: "email address not found",
                status: false
            })
        }

        const comparePassword = await bcrypt.compare(password, user.password)


        if (!comparePassword) {
            return response.json({
                message: "email address or password not match nikal jao!",
                status: false
            })
        }

        if (!user.isVerified) {
            return response.json({
                message: "email address is not verified! Please verify your email address. check your Inbox jaaa bhai email verify krly",
                status: false
            })
        }

        response.json({
            message: "user login successfully",
            status: true,
            data: user
        })
    } catch (error) {
        response.json({
            message: error.message || "something went wrong",
            status: false
        })
    }
})


// OTP VERIFY
// step#1 check auth middleware

app.post("/api/otp-verify", authMiddleware, async (request, response) => {
    try {
        const { otp } = request.body
        const email = request.userEmail


        // 2. create filter obj for filteration
        const filter = {
            otp,
            email,
            isUsed: false
        }

        // 3. find OTP
        const findOTP = await OtpModel.findOne(filter).sort({ createAt: -1 })
        console.log("findOTP", findOTP)

        // 4. check otp exist or not according over condition
        if (!findOTP) {
            return response.json({
                message: "Invalid OTP",
                status: false
            })
        }

        //5. check OTP expire time
        const currentTime = Date.now()
        console.log("currentTime", currentTime < findOTP.expireAt)

        //    6. check current time or expire time
        if (currentTime < findOTP.expireAt) {
            console.log("VERIFY OTP")
            // 1. user collection update isVerified true
            await UserModel.findByIdAndUpdate(request.userId, { isVerified: true })

            // 2. otp collection isUsed  true
            findOTP.isUsed = true
            await findOTP.save()
            return response.json({
                message: "OTP Verify true",
                status: true
            })

        } else {
            return response.json({
                message: "OTP EXPIRED",
                status: false
            })
        }

    } catch (error) {
        response.json({
            message: error.message || "something went wrong",
            status: false
        })
    }
})



app.post("/api/reset-otp", authMiddleware, async (request, response) => {
    try {
        const email = request.userEmail
        const userId = request.userId


        //  1.  create OTP
        const otp = generateOTP()

        // 2. get request user
        const userObj = await UserModel.findById(userId)

        // create email transporter 
        const transporter = nodemailer.createTransport({
            service: process.env.SMTP_SERVICE,
            auth: {
                user: process.env.SMTP_USER_EMAIL,
                pass: process.env.SMTP_APP_PASS
            },
        })

        // create mail options
        const mailOptions = {
            from: process.env.SMTP_USER_EMAIL,
            to: email,
            subject: 'OTP VERIFICATION',
            html: sendOTPTemplate(userObj, otp)
        }
        // email send
        transporter.sendMail(mailOptions, async (error, success) => {
            // if error 
            if (error) {
                return response.json({
                    message: error.message,
                    status: false
                })
                console.log(`email send error`, error.message)
            }
            // successfully email sent
            else {
                const otpObj = {
                    otp: otp,
                    email: userObj.email,
                    // expireAt: OTPExpiretime
                }
                // save otp 
                await OtpModel.create(otpObj)
                return response.json({
                    message: "reset otp successfully!",
                    status: true
                })
            }
        })



    } catch (error) {
        response.json({
            message: error.message || "something went wrong",
            status: false
        })
    }
})








app.post("/api/send-email", (request, response) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.SMTP_SERVICE, //gmail
            auth: {
                user: process.env.SMTP_USER_EMAIL,
                pass: process.env.SMTP_APP_PASS //app password
            }
        });


        const mailOptions = {
            from: process.env.SMTP_USER_EMAIL,
            to: process.env.SMTP_USER_EMAIL,
            subject: 'Welcome User',
            html: welcomeUserTemplate()
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {

                return response.json({
                    messagae: `Error sending email: ${error.message}`,
                    status: false
                })
            }

            response.json({
                messagae: `Email sent:  ${info.response}`,
                status: true
            })

        });



    } catch (error) {
        response.json({
            status: false,
            message: error.message
        })
    }
})



app.listen(PORT, () => console.log(`http://localhost:${PORT}`))



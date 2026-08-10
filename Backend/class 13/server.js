import express from "express"
const PORT = process.env.PORT || 5000
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { sendOTPTemplate, welcomeUserTemplate } from "./templates.js"
import mongoose from "mongoose"
import UserModel from "./models/User.js"
import bcrypt from "bcryptjs"
import { setServers } from "node:dns/promises"
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

        await UserModel.create(userObj)

        const transporter = nodemailer.createTransport({
            service: process.env.SMTP_SERVICE,
            auth: {
                user: process.env.SMTP_USER_EMAIL,
                pass: process.env.SMTP_APP_PASS
            },
        })

        const otp = Math.floor(100000 + Math.random() * 900000);
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

        response.json({
            message: "user signUp successfully",
            status: true
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



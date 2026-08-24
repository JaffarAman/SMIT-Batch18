export const otpVerify = async (request, response) => {
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
}


export const resetOtp = async (request, response) => {
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
}
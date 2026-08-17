import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    otp: {
        type: String
    },
    email: {
        type: String
    },
    isUsed: {
        type: Boolean,
        default: false
    },
    expireAt: {
        type: Date,
        default: Date.now() + 10 * 60 * 1000
    }

}, { timestamps: true })

const OtpModel = mongoose.model("otp", otpSchema)

export default OtpModel

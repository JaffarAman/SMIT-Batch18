import express from "express"
import { otpVerify, resetOtp } from "../controllers/otp.js"
import { authMiddleware } from "../middleware/middleware.js"

const otpRouter = express.Router()



// /api/otp/verify
otpRouter.post("/verify", authMiddleware, otpVerify)
otpRouter.post("/reset", authMiddleware, resetOtp)



export default otpRouter
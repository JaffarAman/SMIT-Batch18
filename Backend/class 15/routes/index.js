import express from "express"
import authRouter from "./auth.js"
import otpRouter from "./otp.js"

const routes = express.Router()


routes.use("/auth", authRouter)
routes.use("/otp", otpRouter)


export default routes
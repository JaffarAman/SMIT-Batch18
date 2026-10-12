import express from "express"
import { login, signup } from "../controllers/auth.js"

const authRoute = express.Router()


// /api/auth/signup
authRoute.post("/signup", signup)
authRoute.post("/login", login)


export default authRoute
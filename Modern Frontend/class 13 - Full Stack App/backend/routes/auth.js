import express from "express"
import { getCurrentUser, login, signup } from "../controllers/auth.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const authRoute = express.Router()


// /api/auth/signup
authRoute.post("/signup", signup)
authRoute.post("/login", login)
authRoute.get("/me", authMiddleware ,getCurrentUser) //jo user login hoga oska data return karegi...


export default authRoute
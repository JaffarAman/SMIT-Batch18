import express from "express"
import { login, signup } from "../controllers/auth.js"

const authRouter = express.Router()


authRouter.post("/login", login)
authRouter.post("/signup", signup)



export default authRouter

// export {
//     router as AuthRoute
// } 
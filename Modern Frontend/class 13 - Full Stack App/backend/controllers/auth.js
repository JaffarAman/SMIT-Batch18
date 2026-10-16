import UserModel from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = async (request, response) => {
    try {

        const body = request.body
        const { email, fullName, password } = body

        if (!email || !password || !fullName) {
            return response.status(400).json({
                message: "required values are missing",
                status: false
            })
        }

        // check user email 
        const user = await UserModel.findOne({ email })
        if (user) {
            return response.status(400).json({
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

        // generate jwt token
        const token = jwt.sign({
            _id: userCreated._id,
            email: userObj.email
        }, process.env.JWT_SECRET)


        response.status(201).json({
            message: "user signUp successfully",
            status: true,
            token
        })
    } catch (error) {
        response.status(500).json({
            message: error.message || "something went wrong",
            status: false
        })
    }
}


export const login = async (request, response) => {
    try {

        const body = request.body
        const { email, password } = body

        if (!email || !password) {
            return response.status(400).json({
                message: "required values are missing",
                status: false
            })
        }

        // check user email 
        const user = await UserModel.findOne({ email })
        if (!user) {
            return response.status(400).json({
                message: "email address not found",
                status: false
            })
        }

        const comparePassword = await bcrypt.compare(password, user.password)


        if (!comparePassword) {
            return response.status(400).json({
                message: "email address or password not match nikal jao!",
                status: false
            })
        }

        if (!user.isVerified) {
            return response.status(403).json({
                message: "email address is not verified! Please verify your email address. check your Inbox jaaa bhai email verify krly",
                status: false
            })
        }



        // generate jwt token
        const token = jwt.sign({
            _id: user._id,
            email: user.email
        }, process.env.JWT_SECRET)


        response.status(200).json({
            message: "user login successfully",
            status: true,
            data: user,
            token
        })
    } catch (error) {
        response.status(500).json({
            message: error.message || "something went wrong",
            status: false
        })
    }
}
import express from "express"
import UserModel from "./models/user.js"
import mongoose from "mongoose"
const app = express()
const PORT = 5000
import { setServers } from 'node:dns/promises';
import cors from "cors"


// body parser
app.use(express.json())
app.use(cors())
setServers(['8.8.8.8', '1.1.1.1']);

const URI = "mongodb+srv://admin:admin@batch18.siup63b.mongodb.net/"

mongoose.connect(URI)
    .then(() => console.log("mongoDB Connected!"))
    .catch((err) => console.log("mongoDB ERROR!", err))





// create signup api
app.post("/signup", async (req, res) => {
    try {
        console.log("body", req.body)
        const { fullName, email, password } = req.body

        if (!fullName || !email || !password) {
            res.json({
                message: "Required fields are missing!",
                status: false
            })
            return
        }

        const userData = await UserModel.findOne({ email })
        console.log(userData, "data")

        if (userData) {
            res.json({
                message: "USer email  address already exist!",
                status: false
            })
            return
        }


        await UserModel.create(req.body)
        res.json({
            message: "USER SIGNUP SUCCESSFULLY!",
            status: true
        })
    } catch (error) {
        res.json({
            message: "Something went wrong",
            status: false
        })

    }

})



app.post("/login", async (req, res) => {
    try {
        console.log("body", req.body)
        const { email, password } = req.body

        if (!email || !password) {
            res.json({
                message: "Required fields are missing!",
                status: false
            })
            return
        }

        const userData = await UserModel.findOne({ email })
        console.log(userData, "data")

        if (!userData) {
            res.json({
                message: "user not found!",
                status: false
            })
            return
        }

        if (userData.password === password) {
            res.json({
                message: "USER LOGIN SUCCESSFULLY!",
                status: true,
                data : userData
            })
        } else {
            res.json({
                message: "user not found!",
                status: false
            })
            return
        }



    } catch (error) {
        res.json({
            message: "Something went wrong",
            status: false
        })

    }

})




app.get("/", (req, res) => {
    res.send("SERVER RUNNING.....")
})


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))

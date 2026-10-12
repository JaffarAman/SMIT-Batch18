import express from "express"
import authRoute from "./routes/auth.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
const app = express()


const PORT = process.env.PORT || 5000


// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({}))

//mongoDb connect
const URI = process.env.MONGODB_URI
mongoose.connect(URI)
    .then(res => console.log("MONGODB CONNECTED!"))
    .catch(err => console.log("MONGODB ERROR:!", err))




app.get("/health", (request, response) => {
    console.log("SERVER RUNNING....")
    response.json({
        message: "SERVER RUNNING...",
        status: true
    })

})

// /api/auth/signup

app.use("/api/auth", authRoute)


// app.post("/api/login", (request, response) => {
//     response.json({
//         message: "Login API"
//     })
// })


// app.post("/api/signup", (request, response) => {
//     response.json({
//         message: "Signup API"
//     })
// })


app.listen(PORT, () => console.log(`server runnng on http://localhost:${PORT}`))




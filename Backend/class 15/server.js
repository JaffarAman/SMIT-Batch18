import express from "express"
import dotenv from "dotenv"
import { setServers } from "node:dns/promises"
import { connectDB } from "./config/db.js"
import routes from "./routes/index.js"
const PORT = process.env.PORT || 5000
setServers(["8.8.8.8", "1.1.1.1"])
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect Database
connectDB()

// routes
app.use("/api", routes)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))



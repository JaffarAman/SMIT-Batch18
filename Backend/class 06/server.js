import express from "express"
import mongoose from "mongoose"
import fs, { read } from "fs"
const app = express()
const PORT = 5000

import { setServers } from 'node:dns/promises';
// Force Node to use Google and Cloudflare public DNS servers
setServers(['8.8.8.8', '1.1.1.1']);

const URI = "mongodb+srv://admin:admin@batch18.siup63b.mongodb.net/"

mongoose.connect(URI)
    .then(() => console.log("mongoDB Connected!"))
    .catch((err) => console.log("mongoDB ERROR!", err))


//body parser => express.json()
app.use(express.json())


app.post("/signup", (request, response) => {
    console.log("signup body ===>", request.body)
    // fs.writeFileSync("users.txt" , "HELLO WORLD")
    const userObj = request.body
    const isFileExists = fs.existsSync("users.txt")
    if (isFileExists) {
        // already user hai
        //  append user
        const userData = JSON.parse(fs.readFileSync("users.txt", "utf-8"))

        //check email address 
        const isUserExist = userData.find((obj) => {
            if (obj.email === userObj.email) {
                return true
            }
        })

        if (isUserExist) {
            return response.send("Email address already exist!")
        }

        userData.push(userObj)
        fs.writeFileSync("users.txt", JSON.stringify(userData))
        response.send("user created!")

    } else {
        // first user
        // 1. create file
        // 2. write user
        fs.writeFileSync("users.txt", JSON.stringify([userObj]))
        response.send("user created!")



    }
})

app.post("/login", (request, response) => {
    // console.log("body login", request.body)
    const body = request.body
    const readUsers = JSON.parse(fs.readFileSync("users.txt", "utf-8"))
    console.log("readUsers", readUsers)
    const isEmailExist = readUsers.find((obj) => {
        console.log("obj", obj.email)
        if (obj.email === body.email) {
            return true
        }
    })
    console.log("isEmailExist", isEmailExist)
    if (!isEmailExist) {
        return response.send("user not found")
    }

    if (isEmailExist.password === body.password) {
        response.send("User login!")
    } else {
        response.send("Invalid email or password")

    }



})


app.put("/edit-user", (request, response) => {
    // console.log(request.body)
    const body = request.body
    const users = JSON.parse(fs.readFileSync("users.txt", "utf-8"))
    const userExist = users.findIndex((obj) => {
        if (obj.email === body.email) {
            return true
        }
    })

    if (userExist === -1) {
        return response.send("user not found!")
    }

    const updateObj = {
        ...users[userExist], //old obj
        ...body ///new obj
    }
    console.log("updateObj", updateObj)
    users.splice(userExist, 1, updateObj)
    fs.writeFileSync("users.txt", JSON.stringify(users))
    response.send("user updated!")
})


app.get("/", (request, response) => {
    response.send("Batch 18 Nodejs Server....")
})



app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
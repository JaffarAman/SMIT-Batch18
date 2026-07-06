console.log("Jaffar Aman 100")

import http from "http"
import { jobData } from "./data.js"
import { startCpuProfile } from "v8"
import fs from "fs"
const PORT = 3000

const server = http.createServer((request, response) => {
    console.log("request", request.url)
    if (request.url === "/") {
        response.end("server running on http://localhost:3000 , Welcome to batch18 server...!")

    } else if (request.url === "/about") {
        response.end("About....")
    } else if (request.url === "/contact") {
        response.end("Contact....")
    }
    else if (request.url === "/create-user") {
        const userObj = {
            email : "suyfiyan@gmail.com",
            pass : 123456
        }
        fs.writeFileSync("users.txt" , JSON.stringify(userObj))
        
        response.end("hamara User created!")
    } else if (request.url === "/get-jobs") {
        // const job = JSON.stringify(jobData)
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(jobData))
    }

})

server.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
// startCpuProfileasd
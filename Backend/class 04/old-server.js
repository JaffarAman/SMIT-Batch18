import http from "http"

const PORT = 5000

const server = http.createServer((request, response) => {
    console.log(request.url)

    if (request.url === "/") {
        response.end("SERVER RUNNING")
    }else if(request.url === "/create-user"){
        response.end("user created!")

    }else{
        response.end("404 not found")
    }

})


server.listen(PORT, () => console.log(`server running on http:localhost:${PORT}`))
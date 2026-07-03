import http from "http"

const PORT = 3000

const server = http.createServer((request, response) => {
        response.end("haaan bhaii.")
})


server.listen(PORT, () => console.log("Server running on PORT:3000"))
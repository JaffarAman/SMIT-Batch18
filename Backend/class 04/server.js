// import express from "express"
// const PORT = 5000

// const app = express()

// const obj = {
//     "name" : "Jaffar",
//     "age" : 25
// }

// // app.get("url" ,  callback )
// app.get("/", (request, response) => {
//         // response.send(obj)
//         response.json(obj)
// })  


// app.get("/crea user" , (request , response)=>{
//         response.send("User created!")
// })





// app.listen(PORT, () => console.log("server running...."))


import express from "express"

const PORT = 5000
const app = express()



app.get("/" , (req , res)=>{
        res.send("Server running....")
}) 


app.post("/create-user" , (request  , response)=>{
        response.send("user created!")
})


app.put("/update-user" , (request  , response)=>{
        response.send("user updated!")
})



app.delete("/delete-user" , (request  , response)=>{
        response.send("user deleted!")
})



app.listen(PORT , ()=>console.log(`server running on localhost:${PORT}`))



// console.log("Hello world!")
// const num1 = 100
// const num2 = 200
// console.log("result==>" , num1 + num2)
// console.log(document)
// alert("Hello world")

// file system

import fs, { read } from "fs"

const createFile = () => {
    console.log("createFile")
    fs.writeFileSync("name.txt", "Jaffar Aman")
}

// createFile()

// IIFE (Immediately Invoked Function Expression)
// const readFile =( ()=>{
//         console.log("readFile IIFE")
// })()


const readFile = (() => {
    // console.log("readFile IIFE")

    const data = fs.readFileSync("./name.txt",
        "utf-8"
    )

    console.log(data)
})()



// console.log("Hello, World!");


import fs, { appendFile, unlink } from "fs"

// const createUser = (() => {
//     // fs.writeFile("file name", "content", "callBack(err , success)")

//     // create file
//     fs.writeFile("user.txt", "Jaffar Aman", (err, success) => {
//         if (err) {
//             console.log(err, "err")
//         } else {
//             console.log("file created!")
//         }
//     })
// })()


// const getUsers = () => {
//     fs.readFile("./user.txt", "utf-8", (error, fileText) => {
//         if (error) {
//             console.log("error", error)
//         } else {
//             console.log(fileText)
//         }
//     })
// }

// getUsers()

// const updateUser = () => {
//     // file update
//     fs.appendFile("./user.txt", "\nAli", (error, success) => {
//         if (error) {
//             console.log("error", error)
//         } else {
//             console.log("file updated")
//         }
//     })
// }
// updateUser()


// const delteUsers = () => {

//     fs.unlink("./user.txt", (err, success) => {
//         if (err) {
//             console.log("err", err)
//         } else {
//             console.log("success", "file deleted", success)
//         }
//     })

// }
// delteUsers()

// writeFile= create
// readFile = read
// appendFile = update
// unlink = delete


// const createFolder = (() => {
//     fs.mkdirSync("data/user/jaffar", { recursive: true })
// })()

console.log("Hello Class!")
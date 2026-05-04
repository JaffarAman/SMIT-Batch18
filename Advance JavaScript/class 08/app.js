// Async
// Promise
// Async/await
// CallBack



// const myPromise = new Promise((resolve, reject) => {

//     const isLogin = false //api calling

//     if (isLogin) {
//         resolve("Login successfully")
//     } else {
//         reject("invalid email or password!")
//     }

// })
//     .then((success) => {
//         console.log("success", success)
//     })
//     .catch((error) => {
//         console.log("error", error)
//     })


// console.log(myPromise)


// fetch("https://api.hiringmine.com/api/filterations/all")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("err", err)
//     })



// Async/await

// new Promise((resolve , reject)=>{})
// .then
// .catch()


// const apiCalling = async () => {

//     const fetchJobs = await fetch("https://api.hiringmine.com/api/filterations/all")
//         .then((res) => res.json())

//     console.log("api calling", fetchJobs)

// }

// apiCalling()


// async function apiCalling() {

//     const fetchJobs = await fetch("https://api.hiringmine.com/api/filterations/all")
//         // .then((res) => res.json())

//     console.log("api calling", fetchJobs)

// }

// apiCalling()


// const foo = () => {
//     try {
//         // console.log("hello")
//         // console.log("userName")
//         // console.log("world")





//     } catch (error) {
//         console.log("error", error)
//     }
// }

// foo()
// console.log("end")



// const loginHandler = () => {

//     try {

//         const isLogin = false
//         if (isLogin) {
//             alert("Login")
//         } else {
//             throw Error("invalid email or password")
//         }

//     } catch (error) {
//         console.log("error", error)
//     } finally {
//         console.log("hELLO WORLD")
//     }


// }
// loginHandler()




// New Promise()
// .then
// .catch


// Try catch

// const apiCalling = async () => {
//     try {

//         const fetchJobs = await fetch("https://api.hiringmine.com/api/filterations/all")
//             .then((res) => res.json())

//             console.log("api calling", fetchJobs)
//     } catch (error) {
//         console.log("error", error)
//     }
// }

// apiCalling()
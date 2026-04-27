// console.log("start")

// // blocking
// for(var i = 0;i<1000000000;i++){
//     // 
// }

// console.log("end")

console.log("start")

// non blocking 
setTimeout(() => {
    console.log("time completed")
}, 3000)


console.log("end")


// sync vs async


// console.log("start")
// ("api calling")
// console.log("end")


// Js Async
// 1. Promise
// 2. Async Await
// 3. Call Back

// fetch()

// Promise
// state
// 1.pending
// 2.success
// 3.rejected

const myPrmoise = new Promise((resolve, reject) => {
    const isCivic = false //api calling

    if (isCivic) {
        resolve("Bt pakki")
    } else {
        reject("gareeeeebooooo")
    }

})
.then((res)=>{
        console.log("res then" , res)
})
.catch((error)=>{
        console.log("error" , error)

})

// console.log("myPrmoise", myPrmoise)
// console.log(1)
// console.log(2)
// console.log(3)


// console.log("Start")


// function foo() {
//     for (var i = 1; i <= 10; i++) {
//         console.log("Loop Execution")
//     }
// }

// foo()

// console.log("End")


// setTimeout

// console.log("start")

// setTimeout(function () {
//     console.log("2 sec wait")
// }, 2000)

// console.log("end")


// setTimeout
// setInterval

// console.log("start")

// setTimeout(function(){
//     console.log("setTimeout Execution")
// } , 3000)


// console.log("end")


// Sync == code blocking
// ASync == code non-blocking


// var myInterval = setInterval(function () {
//     console.log("setInterval")
// }, 1000)


// setTimeout(function(){
//         clearInterval(myInterval)
// } , 5000)

// console.log("End")

// for(var i = 1 ; true ; i++){
//     console.log(i)
// }

console.log("start")

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json()
    })
    .then(function (success) {
        console.log("success", success)
    })
    .catch(function (error) {
        console.log(error, "error")
    })

console.log("ENd")




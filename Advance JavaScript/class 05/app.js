// // let userName      ; //undefined
// let userName = localStorage.getItem("user")      


// const saveData = ()=>{
//     userName = prompt("Enter your name")
//     console.log(userName)
//     // localStorage.setItem("key" ,value)
//     // save data on localstorage
//     localStorage.setItem("user" ,  userName)
// }

// console.log(userName)



// localStorage.setItem("name124" , "Jaffar")
// setItem(key  , value)
// getItem(key)
// removeItem(key)
// clear()

// localStorage.setItem("bool", true)

// const getNumber = localStorage.getItem("number")
// const boolValue = localStorage.getItem("bool")
// console.log(typeof boolValue) 


// const arr = ["karachi" , "lahore" , "multan"]
// const newArr =  JSON.stringify(arr)
// // console.log("newArr" , newArr)

// localStorage.setItem("cities" , newArr)
// const cities = localStorage.getItem("cities")
// console.log("cities" , JSON.parse(cities))


const obj1 = {
    name : "Jaffar"
}

// localStorage.setItem("userObj" , JSON.stringify( obj1))

const getObj =   JSON.parse( localStorage.getItem("userObj"))
console.log(getObj)
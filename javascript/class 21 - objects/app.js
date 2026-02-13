// var std = ["ali" , "pakistan" , 26 , 2025 , "smit" , 101];


// []
// {}

// name: "ali" ==> property
// 
// var stdObj = {
//     name: "ali"
// }

// console.log(fullName)

// var std = ["ali" , "pakistan" , 26 , 2025 , "smit" , 101];
// console.log("std",std[0])

// var stdObj = {
//     name: "ali",
//     country: "pakistan",
//     age: 26,
//     year: 2025,
//     campus: "smit",
//     rollNumber: 101
// }

// console.log("name" , stdObj.name)
// console.log("name" , stdObj.country)
// console.log("name" , stdObj.rollNumber) //dot notation

// // console.log("stdOBj" , stdObj["campus"]) //array notation

// // console.log("stdObj" , stdObj["age"])
// // console.log("country"  , stdObj["rollNumber"])





// var obj = {
//     id: 101,
//     firstName: "Jaffar",
//     lastName: "Aman",
//     emailAddress: null,
//     phoneNumber: undefined,
//     isActive: true,
// }


// check property in obj ===> using in keyword
// var isCheck = "firstName" in obj
// console.log(isCheck, "isCheck")

// delete obj.phoneNumber

// console.log(obj.phoneNumber)


// obj.firstName = "Jaffar"
// obj.lastName = "Aman"
// obj.emailAddress = "amanjaffar50@gmail.com"
// obj.courses = ["html" , "react" , "backend"]


// console.log(obj)
// console.log(obj.firstName)
// console.log(obj["lastName"])


// 1. primitive data types -- by value
// String
// Number
// Boolean
// null
// undefined

// 2. non primitive data types -- by reference
// Array
// Object




var stdObj = {
    id: 101,
    firstName: "Jaffar",
    lastName: "Aman",
    emailAddress: null,
    phoneNumber: undefined,
    isActive: true,
}

// console.log(stdObj."id")

// for()
// for in
// for of

// for in
// for (var key in stdObj) {
//     console.log( key ,":" ,stdObj[key])
// }

var std = ["ali" , "pakistan" , 26 , 2025 , "smit" , 101];
for(var val of std){
    console.log(val)
}


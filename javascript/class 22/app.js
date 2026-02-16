// []
// var stdObj = {
//     firstName: "Jaffar",
//     lastName : "Aman",
//     age : 25,
//     isActive  : true,
//     result : null,
//     email :undefined
// }

// console.log(stdObj["firstName"])
// // console.log(stdObj.lastName)


// var myTable = document.getElementById("myTable");

// var stdObj = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     courses: ["html", "css", "react", "js" , "nodejs"],
//     scores: {
//         html: 80,
//         css: 90,
//         js: 70,
//         react: 55,
//         nodejs : 65
//     }
// }

// var loopLength = stdObj.courses.length;

// var totalScore = 0;

// for (var i = 0; i < loopLength; i++) {
//     var courseName = stdObj.courses[i] //css
//     var courseScore = stdObj.scores[courseName]

//     // totalScore = totalScore + courseScore
//     totalScore += courseScore

//     var tableRow = `<tr>
//             <td> ${courseName.toUpperCase()} </td>
//             <td> ${courseScore} </td>
//         </tr>`
//     myTable.innerHTML += tableRow
// }

// console.log("totalScore", totalScore)

// var tableEndRow = `<tr>
//             <td> Total: </td>
//             <td> ${totalScore} </td>
//         </tr>`

// myTable.innerHTML += tableEndRow





// console.log(stdObj.courses)
// console.log(stdObj.scores.react)

// id
// name
// age
// email 
// skills :[]
// address : {}




// var userObj = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     getFullName: function (num1) { //method
//         // console.log(userObj.firstName)
//         // console.log(this.firstName)
//         // console.log(this.lastName)
//         var fullName = this.firstName + " " + this.lastName
//         return fullName


//     }

// }
// var val = userObj.getFullName()
// console.log(val, "val")

// var stdObj = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     courses: ["html", "css", "react", "js", "nodejs"],
//     scores: {
//         html: 50,
//         css: 90,
//         js: 70,
//         react: 55,
//         nodejs: 65
//     },
//     getTotalMarks: function () {

//         var totalScore = 0
//         for (var key in this.scores) {
//             totalScore += this.scores[key]
//         }

//         return totalScore


//     }
// }

// var result = stdObj.getTotalMarks()
// document.writeln(`Total Marks: ${result}`)



// var stdObj1 = {
//     name: "Jaffar",
//     age: 25,
//     email: "jaffar50@gmail.com",
//     skills: ["javascript", "react", "nodejs"],
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// }

// var stdObj2 = {
//     name: "Hammad",
//     age: 24,
//     email: "hammad@gmail.com",
//     skills: ["javascript", "react", "nodejs", "next"],
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// }


var stdArr = [
    {
        name: "Jaffar",
        age: 25,
        email: "jaffar50@gmail.com",
        skills: ["javascript", "react", "nodejs"],
        address: {
            city: "Karachi",
            country: "Pakistan"
        }
    },
    {
        name: "Hammad",
        age: 24,
        email: "hammad@gmail.com",
        skills: ["javascript", "react", "nodejs", "next"],
        address: {
            city: "Karachi",
            country: "Pakistan"
        }
    },
    {
        name: "Hammad",
        age: 24,
        email: "hammad@gmail.com",
        skills: ["javascript", "react", "nodejs", "next"],
        address: {
            city: "Karachi",
            country: "Pakistan"
        }
    },
    {
        name: "Hammad",
        age: 24,
        email: "hammad@gmail.com",
        skills: ["javascript", "react", "nodejs", "next"],
        address: {
            city: "Karachi",
            country: "Pakistan"
        }
    }

]
var parent = document.getElementById("parent")

for (var i = 0; i < stdArr.length; i++) {
    var obj = stdArr[i]
    console.log(obj)


    var userCard = `<div  style="border: 1px solid black;"    >
        <h1>Name: ${obj.name} </h1>
        <p>age: ${obj.age}</p>
        <p>email: ${obj.email}</p>
        <p>skills: ${obj.skills}</p>
        <p>address: ${obj.address.city},${obj.address.country}</p>
</div>`

    parent.innerHTML += userCard
}

console.log("stdArr", stdArr)




// array of object -- data format -- API
// var arr = [
//     {
//         name: "Jaffar"
//     },
//     {
//         name: "hammad"
//     }
// ]
// console.log(arr)
// var student = ['jaffar', 'hammd', "hamza", 'abdullah']

// document.writeln("student" + +student[0])

// for(var  i = 0 ; i < student.length; i++){
//     document.writeln("student " + i + " "+student[i] + "<br/>")
// }

// loop
// console.log("hello")

// while loop
// do while loop


// for loop


// for (var i = 1; i <= 100; i++) {
//     document.writeln("<h1>" + i + "</h1>")
// }


// reverse counting
// for (var i = 100; i >= 1; i--) {
//     document.writeln("<h1>" + i + "</h1>")
// }



// reverse counting
// for(var i = 100; i>=1 ; i--){
//     console.log(i)
// }




// for (var i = 1; i <= 20; i++) {

//     // if (i % 2 == 0) {
//     //     console.log("even number", i)
//     // }


//     if (i % 2 == 1) {
//         console.log("odd number", i)
//     }


// }




// for(var i = 1 ; = ; i++){
//     console.log("hello")
// }


// for (var i = 1; i <= 10; i++) {

//     if (i == 5) {
//         continue
//         console.log("hello world")
//     }

//     console.log(i)

// }




// for (var i = 1; i <= 20; i = i + 2) {
//     console.log(i);

// }


// for(var i = 0;  i<=20 ;  i +2    ){

// }
// 54
// 78


// var checkValue = prompt("Enter your name!")

// var users = ["jaffar", "sufiyan", "hammad", "bilal"  ,"aman", "ali"]

// for (var i = 0; i < users.length; i++) {
//     if (checkValue == users[i]) {
//         console.log("allow");
//         alert("Welcome 😊")
//         break
//     }
// }


// if (checkValue == users[0]) {
//     console.log("allow")
// } else if (checkValue == users[1]) {
//     console.log("allow")
// }else if (checkValue == users[2]) {
//     console.log("allow")
// }else if (checkValue == users[3]) {
//     console.log("allow")
// }






// for (var i = 0; i < users.length; i++) {
//     console.log(users[i])
// }


// console.log(users[0])
// console.log(users[1])
// console.log(users[2])
// console.log(users[3])






var checkValue = prompt("Enter your name!") //arsalan

var users = ["jaffar", "sufiyan", "hammad", "bilal", "aman", "ali"]


var isMatch = "nhi mili value"

for (var i = 0; i < users.length; i++) {
    if (checkValue == users[i]) {
        console.log("allow");
        isMatch = "value mil gayi!"
        alert("Welcome 😊")
        break
    }
}

console.log("isMatch", isMatch)

if (isMatch == "nhi mili value") {
    alert("user not exist")
}

// alert("Hello world!")

// Dates
// var now = String(new Date());
// console.log("now", typeof now);
// console.log("now" , now.slice(0 , 3))

// var now = new Date()
// console.log(now.toDateString())
// console.log(now.toLocaleDateString())

// console.log(now.toTimeString())
// console.log(now.toLocaleTimeString())
// console.log(now.slice(0 ,3));

// var now = new Date().getDay() //day of week
// var now = new Date().getMonth() //current month
// var now = new Date().getDate() //current month
// var now = new Date().getFullYear    () //current month
// var now = new Date().getMilliseconds    () //current month
// console.log(now)

// var now  = new Date().getTime()
// console.log(now)
// var now = new Date();
// var oldDate = new Date("19 Jan 2024");

// var oldDateMiliSec = oldDate.getTime();
// var currentMiliSec = now.getTime();
// console.log("oldDateMiliSec", oldDateMiliSec);
// console.log("currentMiliSec", currentMiliSec);

// var diffMili = currentMiliSec - oldDateMiliSec;
// console.log("diffMili", diffMili);
// var diff = diffMili / (1000 * 60 * 60 * 24 * 365) //sec
// console.log('====================================');
// console.log(Math.round( diff));
// console.log('====================================');
// console.log(now);

// DOB calculator

// var userDOB = prompt("Enter your DOB", "1 Jan 1992");
// var dobDate = new Date(userDOB);
// // console.log(dobDate)
// var now = new Date();

// var dobMiliSec = dobDate.getTime();
// var nowMiliSec = now.getTime();

// var diff = nowMiliSec - dobMiliSec;

// console.log(diff);
// var convertYear = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

// console.log("Mubarak ho ap " + convertYear + " itne saal ky hogaye 💥" );

// function  function_Name(){

// }

// function foo() {
//   console.log("Hello world 1");
//   console.log("Hello world 2");
//   console.log("Hello world 3");
// }

// foo()

// function greet() {
//     alert("Welcome!");
// }

// alert("Hello")
// // greet()

// function addition(){
//     var num1 = +prompt("Enter num1");   //static
//     var num2 = +prompt("Enter num2");  //static
//     var res = num1 + num2
//     alert(res)
// }

// addition()

// console.log()

// alert()

// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("Hammad bhai");
// greet("Jaffar Aman")

// function calc(num1, num2 , num3) {
//   //parameter
//   console.log(num1, num2);
//   console.log("num3" , num3)
// }

// calc(100, 200 , 300 , 400); //arg

function calc(num1, num2, opt) {
  if (opt == "+") {
    console.log("addition", num1 + num2);
  }
}

var num1 = +prompt("Enter num1");
var opt = prompt("Enter operator");
var num2 = +prompt("Enter num2");

calc(num1, num2, opt);

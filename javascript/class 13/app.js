// range 1 to 10

// var num1 = Math.floor(Math.random() * 10 + 1);
// console.log("num1", num1);

// // range 5 to 20
// var randomNum = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
// console.log(randomNum);

// // range 3 to 10
// var randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// var randomNum = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
// console.log(randomNum);

// var randomNumber = Math.floor(Math.random() * 6) + 1;

// var userNumber = prompt("Enter one number between: 1 to 6");

// if (userNumber == randomNumber) {
//   console.log("Win");
// } else {
//   console.log("loss");
// }

// console.log("randomNumber", randomNumber);

// var num1 = "100"
// var num2 = "200"

// console.log(typeof  Number(num1))
// console.log(typeof  parseInt(num2))
// console.log(typeof  +num2)

// // var res = num1 + num2
// // console.log(typeof parseInt(num1));

// var userNum1 = +(prompt("Enter number"));
// console.log(typeof userNum1);
// console.log(userNum1);

// string to number
// Number()  => shorthand => + sign
// parseInt

// var num1 = parseInt("1584.454654")
// var num1 = +("1584.454654")
// console.log(num1)

// var num1 = 500.45632;
// console.log(typeof String(num1));
// console.log(num1.toString());

// var num1 = 545.4444

// console.log(typeof num1.toFixed(0))
// console.log(num1.toFixed(0))

// var num1 = 500
// console.log(num1.toFixed(2));

// var str = "" //empty str  false
// var arr = [] //empty arr  true

// split => str to arr
// var str = "my name is jaffar";
// // "my n" , "me is j" , "ff" , "r"
// var arrStr = str.split(" ")

// console.log("arrStr" , arrStr);
// console.log(str);

// var arr = ["apple", "mango", "orange"];
// console.log(arr.reverse());

var para1 = "my name is jaffar aman";
var paraArr = para1.split(" ");
console.log("paraArr", paraArr);
var arr = []; //empty arr

for (var i = 0; i < paraArr.length; i++) {
  //   console.log(paraArr[i].slice(0, 1).toUpperCase() + paraArr[i].slice(1).toLowerCase());
  var word = paraArr[i];
  //   Capitalize
  word = word[0].toUpperCase() + word.slice(1).toLowerCase();
  console.log(word);
  //   push word into arr
  arr.push(word);
}

console.log(arr);
var CapitalizePara = arr.join(" ");
console.log("CapitalizePara", CapitalizePara);

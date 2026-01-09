// var userName = ["jaffar", "ali", "sufiyan", "bilal"];
// var userInput = prompt("enter your name").toLowerCase();

// var isMatch = false;

// for (var index = 0; index < userName.length; index++) {
//   if (userInput == userName[index]) {
//     console.log("Welcome", userInput);
//     isMatch = true
//     break;
//   }
// }

// if (isMatch == false) {
//   console.log("username not exists!");
// }

// var num1 = [];

// if (num1) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if(num1 !== 100){
//     console.log("condition true")
// }

// data types
// String
// Number
// Boolean
// Array

// var str = "Jaffar Aman"; //string

// var strCopy = str.slice(0, 6);
// console.log("strCopy", strCopy);
// console.log("str", str.length);
// console.log("str", str[1]);

// var str = "jafFaR"; //Saylani
// var firstLetter = str[0].toUpperCase();
// console.log("firstLetter", firstLetter); //S

// var otherLetters = str.slice(1).toLowerCase(); //aylani
// console.log("otherLetters", otherLetters);

// var finalWord = firstLetter + otherLetters; //SAYLANI
// console.log("finalWord", finalWord);

// 2nd way
// var capWord = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log("capWord", capWord);

// var str = prompt("Enter some text!");

var str = "My name is jaffar aman";
// console.log(str.slice(3 , 5 ))

for (var i = 0; i < str.length; i++) {
  //1
  console.log(str.slice(i, i + 2));

  if (str.slice(i, i + 2) == "  ") {
    alert("Double space not allow!");
    break;
  }
}

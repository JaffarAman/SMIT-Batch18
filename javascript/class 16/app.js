// function add  (num1, num2 ) {
// console.log(num);

// }

// add(1000,300)

// var arr = []
// var str = "";

// var str = "Jaffar"; //global scope variable

// function foo() {
//   console.log(str);
// }

// foo()

// function foo() {
//   var str = "Hello world!"; //local scope var
//   console.log(str);
// }

// foo();

// console.log(str);

// var str = "HELLO WORLD" //Global

// function foo(){
//     // var str = "HELLO WORLD" //local
//     var a = 10
//      a++
//     console.log(a)

// }

// // foo()
// // foo()

// console.log(str)

// var str; //

// function foo(){
//     str = "Hello World"
// }

// foo()
// console.log(str)

// var a = 10; //global

// function foo() {
//   //   a = 20; //local
// //   var a = 20; //update
//   console.log(a);
// }

// foo();
// // console.log(a);

// local vs global scope variable

// var -- function scope variable

// function greet(){
//     alert("Hello World")
// }

// function getValue() {
//   var inputElement = document.getElementById("userName");
// //   console.log("inputElement", inputElement.value);

//   alert( "welcome " + inputElement.value);
// }

function getInputValue() {
  //   console.log("getInputValue");

  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  console.log(firstName.value);
  console.log(lastName.value);
}

function setValue() {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");

  //   var userInput1 = prompt('Enter first Name')
  //   var userInput2 = prompt('Enter last Name')

  firstName.value = "Jaffar";
  lastName.value = "Aman";
  //   var a = 10
  //   a = 20
}

// function showPass() {
//   var password = document.getElementById("password");
//   //   console.log(password.type)
//   password.type = "text";
// }

// function hidePass() {
//   var password = document.getElementById("password");
//   password.type = "password";
// }

function passManage() {
  var password = document.getElementById("password");
  var btn = document.getElementById("btn");
  //   console.log(btn.innerHTML)
  //   btn.innerHTML = "hide password"
  console.log(password.type);
  if (password.type == "password") {
    password.type = "text";
    btn.innerHTML = "hide password";
  } else {
    password.type = "password";
    btn.innerHTML = "show password";
  }
}

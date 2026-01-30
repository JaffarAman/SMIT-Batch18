var userName = document.getElementById("userName");

function getValue() {
  console.log("getValue", userName.value);
}

function setValue() {
  console.log(userName);
  userName.value = "Jaffar Aman";
}

function geth1Element() {
  var heading1 = document.getElementById("heading1");
  console.log("geth1Element", heading1.innerHTML);
}

function seth1Element() {
  var heading1 = document.getElementById("heading1");
  console.log("geth1Element", heading1);
  heading1.innerHTML = "Hello class!";
}

function changeImage1() {
  var htmlImg = document.getElementById("htmlImg");
  console.log("changeImage1", htmlImg.src);

  // htmlImg.src = "https://img.freepik.com/free-photo/programming-background-collage_23-2149901776.jpg"

  htmlImg.src = "./image2.png";
}

// function onCar(){
//     var carImg = document.getElementById("carImg")

//     console.log(carImg)

//     carImg.src = "./car2.gif"
// }

// function offCar(){
//     var carImg = document.getElementById("carImg")

//     console.log(carImg)

//     carImg.src = "./car1.png"
// }

// function carHandle() {
//   var carImg = document.getElementById("carImg");
//     var btn = document.getElementById("btn")
//   console.log(carImg.src);
//   console.log(carImg.src.indexOf("car1.png"));

//     // 1st way
//   //   if (carImg.src.indexOf("car1.png") !== -1) {
// //     carImg.src = "./car2.gif";
// //     btn.innerHTML = "off"
// //   } else {
// //     btn.innerHTML = "on"
// //     carImg.src = "./car1.png";
// //   }

//     // 2nd way

//     console.log(btn.innerHTML)
//     if(btn.innerHTML == "ON"){
//         carImg.src = "car2.gif"
//         btn.innerHTML = "OFF"
//     }else{
//           carImg.src = "car1.png"
//         btn.innerHTML = "ON"
//     }

// }

function greet() {
  alert("Hello world");
}

// function imageMouseOver() {
//   var carImg = document.getElementById("carImg");
//   console.log("imageMouseOver", carImg);
//   carImg.width = "600"
//   carImg.height = "400"
// }

// function imageMouseOut() {
//   var carImg = document.getElementById("carImg");
//   console.log("imageMouseOut", carImg);
//   carImg.width = "500"
//   carImg.height = "300"
// }

// function imageHandle(toggle) {
//   console.log("imageHandle", toggle);

//   var carImg = document.getElementById("carImg");
//   //   console.log("imageMouseOver", carImg);
//   if (toggle == "over") {
//     carImg.width = "600";
//     carImg.height = "400";
//     carImg.src = "./car2.gif"
//   } else {
//     carImg.width = "500";
//     carImg.height = "300";
//     carImg.src = "./car1.png"
//   }
// }

// var a = 10

// // a = 20
// a += 20

// var a = "Jaffar"
// a += "Aman"

function addValue(value) {
  var input = document.getElementById("input");
  console.log(input);
  //   input.value = input.value + 7
  input.value += value;
}

function calc() {
  var input = document.getElementById("input");
  console.log(input.value);
  var ans = eval(input.value);
  console.log("ans", ans);
  input.value = ans
}

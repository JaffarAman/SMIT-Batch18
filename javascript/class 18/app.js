var itnpu = document.getElementById("input");

function addValue(value) {
  console.log(input);
  //   input.value = input.value + value
  input.value += value;
}

function calc() {
  //   var input = document.getElementById("input");
  console.log(input.value);
  var ans = eval(input.value);
  console.log("ans", ans);
  input.value = ans;
}

function allClear() {
  //   var input = document.getElementById("input");
  // console.log("input" , input.value)
  input.value = "";
}

function deleteValue() {
  //   var input = document.getElementById("input");
  console.log("input", input.value);
  input.value = input.value.slice(0, -1);
}

// Events

// function foo(){
//     // alert("Welcome")

//     console.log("hello world")

// }

// var input = document.getElementById("input")

function inputFocus(num1, elem) {
  console.log("typingg......", elem);

  elem.type = "text";
}

function inputBlur(elem) {
  console.log("online...", elem);
  elem.type = "password";
}

function inputHandler(elem, flag) {
  //   console.log(elem, flag);

  //   if (flag == "focus") {
  //     elem.type = "text";
  //     elem.style.color = "red"
  //     elem.style.backgroundColor = "grey"
  //   } else {
  //     elem.style.backgroundColor = "white"
  //     elem.style.color = "black"
  //     elem.type = "password";
  //   }

  // console.log(elem)
  if (flag == "focus") {
    elem.style.border = "1px solid blue";
  } else {
    var inputValue = elem.value;
    console.log(inputValue.length);

    if (inputValue.length >= 3) {
      elem.style.border = "1px solid green";
    } else {
      elem.style.border = "1px solid red";
    }
  }
}

// function getParas() {
//   //   var para1 = document.getElementById("para1");
//   //   var para2 = document.getElementById("para2");
//   //   var para3 = document.getElementById("para3");

//   var paras = document.getElementsByTagName("p");
//   console.log("para 1", paras);
//   console.log("para 1", paras[1].innerHTML);
//     paras[1].style.color = "red"

// }

function getParas() {
  // var paras = document.getElementsByTagName("p");
  // console.log("para 1", paras);

  var parent = document.getElementById("parent");
  var paras = parent.getElementsByTagName("p")
  console.log("paras", paras);
}

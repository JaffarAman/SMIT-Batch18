// console.log(document.childNodes[1].childNodes[2].childNodes[1])

// var h1Element = document.childNodes[1].childNodes[2].childNodes[1]
// console.log("h1Element" , h1Element.childNodes[0])
// console.log(h1Element.innerHTML)
// h1Element.style.color = "red"
// h1Element.innerHTML = "Hello CLASS 19"

// console.log(document.childNodes[1].childNodes[1].childNodes[0])
// console.log(document.childNodes[1].children[1].children)

// var pappa = document.getElementById("pappa");
// var firstChild = pappa.firstElementChild
// console.log(firstChild.nextElementSibling)
// console.log(pappa.firstElementChild)
// console.log(pappa.lastElementChild)
// var lastChild = pappa.lastElementChild
// // console.log(lastChild.previousElementSibling.previousElementSibling)

// console.log(lastChild.parentNode.parentNode)

// var para  = document.getElementById("para")
// console.log(para.childNodes)

// var pappa = document.getElementById("pappa");
// console.log(pappa.nodeName)
// var pappaChild = pappa.childNodes;

// var arr = []

// for (var i = 0; i < pappaChild.length; i++) {
// //   console.log("pappaChild", pappaChild[i].nodeType);
//   var eleType = pappaChild[i].nodeType;
//   if (eleType == 1) {
//     // console.log(pappaChild[i])
//     pappaChild[i].style.color = "red";
//     arr.push(pappaChild[i])
// }
// }


// console.log(arr.length  )

// var h1elements = document.getElementsByTagName("h1")
// console.log(h1elements.length)




function checkInput(){
    // var input = document.getElementById("input")
    // var isCheck  = input.hasAttribute("placeholder")
    // console.log(input.hasAttribute("placeholder")  );
    // if(isCheck){
    //     var value = input.getAttribute("placeholder")
    //     console.log("exist" , value)


    // }else{
    //     console.log("not exist")
    //     input.setAttribute("placeholder" , "Enter userName")


    // }

    var input = document.getElementById("input")
    // console.log(input.placeholder)
    // // console.log(input.hasAttribute("placeholder"))
    console.log(input.getAttribute("placeholder"))
    // input.setAttribute("required", true)

}




var parent = document.getElementById("parent")
var h1Element = document.createElement("h1")

h1Element.innerHTML = "Hello World"
console.log(h1Element)
h1Element.className = "h1"

parent.append(h1Element)



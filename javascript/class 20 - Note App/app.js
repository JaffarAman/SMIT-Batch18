// var parent = document.getElementById("parent")

// var h1Element = document.createElement("h1")
// var h1Text = document.createTextNode("Hello world")
// // h1Element.innerHTML = "Hello world"
// console.log(h1Text, "h1Text")

// h1Element.append(h1Text)
// console.log(h1Element, "h1Element")

// parent.appendChild(h1Element)



// document.writeln("<h1>Hello world</h1>")

// var userName = 'Jaffar'
// var userName = `Jaffar`
// document.writeln(`<h1> welcome: ${userName} </h1>`)

// document.writeln("<h1>" + userName + "</h1>")

// var num1 = 10
// document.writeln("2 x 1 = " + num1 * 2 + "<br />")


// var firstName = "Jaffar";
// var lastName = "Aman";

// document.writeln(`<h1> Welcome: ${firstName} ${lastName} User. `)


// var parent =document.getElementById("parent")

// for(var i = 1 ; i<=10 ; i++){
//     var parentDiv = document.createElement("div") 
//     parentDiv.className = "card"
//     parentDiv.style.width = "18rem"


//     // card-body
//     var cardBodyDiv = document.createElement("div")
//     cardBodyDiv.className = "card-body"

//     // cardTitle
//     var cardTitle = document.createElement("h5")
//     cardTitle.className = "card-title"
//     cardTitle.innerHTML = i + " Hello world"


//     cardBodyDiv.appendChild(cardTitle)
//     parentDiv.appendChild(cardBodyDiv)


//     // append card div to parent
//     parent.appendChild(parentDiv)

// }


// var parent =document.getElementById("parent")

// for(var i = 1 ;i<=10 ;i++){
//     var card = `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//             <h5 class="card-title"> ${i} Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
//                 content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>`
//     parent.innerHTML += card
// }

var parent = document.getElementById("parent")


function addNote() {
    var input = document.getElementById("input")

    // validation lagao min 5 char
    if (input.value.length < 5) {
        alert("Invalid Note")
        return
    }


    var cardUI = `<div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${input.value}  </h5>
                <button class="btn btn-info"
                onclick="editTodo(this)"
                >Edit</button>
                <button class="btn btn-danger"  
                    onclick="deleteNote(this)"
                >Delete</button>
            </div>
        </div>`


    // console.log(cardUI)
    parent.innerHTML += cardUI

    input.value = ""
}


function deleteNote(deleteBtn) {
    // console.log("deleteNote()" , deleteBtn.parentNode.parentNode)
    deleteBtn.parentNode.parentNode.remove()
}


function editTodo(editBtn) {
    console.log("editTOdo", editBtn.previousElementSibling)
    var editValue = prompt("Enter edit value" , editBtn.previousElementSibling.innerHTML )
    editBtn.previousElementSibling.innerHTML = editValue
}


function deleteAll(){
    parent.innerHTML = ""
}
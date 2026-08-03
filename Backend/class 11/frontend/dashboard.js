import { BASE_URL } from "./config.js"

const authCheck = (async () => {
    try {
        const userId = localStorage.getItem("user")
        // console.log("authCheck", userId)

        if (!userId) {
            return window.location.replace("./login.html")
        }

        const getCurrentUser = await fetch(`http://localhost:5000/get-single-user/${userId}`).then(res => res.json())
        // console.log("getCurrentUser", getCurrentUser)

        if (!getCurrentUser.status) {
            localStorage.removeItem("user")
            return window.location.replace("./login.html")
        }

        localStorage.setItem("userInfo", JSON.stringify(getCurrentUser.data))
        const dashboardHeading = document.getElementById("dashboardHeading")
        dashboardHeading.innerHTML = `👋 Hello ${getCurrentUser.data.fullName}`

    } catch (error) {

    }

})()


const parent = document.getElementById("parent")

const getAllTodos = (async () => {

    const todoData = await fetch(`${BASE_URL}/todo`).then(res => res.json())
    console.log("todoData", todoData)

    // api status false show error message
    if (!todoData.status) {
        return alert(todoData.message)
    }

    const todos = todoData.data
    // console.log("todos  11111" , todos)
    parent.innerHTML = ""
    todos.forEach((obj) => {
        console.log("obj", obj)

        const priorityClass = "priority " + obj.priority.toLowerCase()
        // console.log("priorityClass" , priorityClass)
        parent.innerHTML += `<div class="todo-card">

            <div class="todo-content">
                <h3> ${obj.title} </h3>
                <p> ${obj.desc} </p>
                <div class="meta">
                    <span class="${priorityClass}"  > ${obj.priority}</span>
                    ${obj.dueDate && `<span>📅 ${obj.dueDate}</span>`}
                    
                </div>
            </div>

            <div class="actions">
                <button class="edit" id="${obj._id}" onclick="editTodo(this)" >Edit</button>
                <button class="delete">Delete</button>
            </div>

        </div>`

    })



})


const logoutHandler = () => {
    localStorage.clear()
    window.location.replace("./login.html")
}


const addTodoBtn = document.getElementById("addTodoBtn")

// addTodoBtn.addEventListener("click" , createTodo)

const createTodo = async () => {
    try {
        const title = document.getElementById("title").value
        const desc = document.getElementById("desc").value
        const priority = document.getElementById("priority").value
        const date = document.getElementById("date").value


        const todoObj = {
            title,
            desc,
            priority,
            dueDate: date
        }


        const res = await fetch("http://localhost:5000/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todoObj)
        }).then(res => res.json())

        if (!res.status) {
            return alert(res.message)
        }

        alert(res.message)

        getAllTodos()



    } catch (error) {

    }



}


const editTodo = async (ele) => {
    try {
        console.log("editTodo(this)", ele)
        const editTodoValue = prompt("edit todo value")
        const editDescValue = prompt("edit desc value")

        const obj = {
            title: editTodoValue,
            desc: editDescValue
        }

        const res = await fetch(`${BASE_URL}/todo/${ele.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())


        if (!res.status) {
            alert(res.message)
        } else {
            alert(res.message)
            getAllTodos()
        }


    } catch (error) {
        alert(error.message)
    }


}


window.editTodo = editTodo
window.createTodo = createTodo
window.getAllTodos = getAllTodos
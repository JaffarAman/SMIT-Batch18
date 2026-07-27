const authCheck = (async () => {
    try {
        const userId = localStorage.getItem("user")
        console.log("authCheck", userId)

        if (!userId) {
            return window.location.replace("./login.html")
        }

        const getCurrentUser = await fetch(`http://localhost:5000/get-single-user/${userId}`).then(res => res.json())
        console.log("getCurrentUser", getCurrentUser)

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


const logoutHandler = () => {
    localStorage.clear()
    window.location.replace("./login.html")
}

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



    } catch (error) {

    }



}
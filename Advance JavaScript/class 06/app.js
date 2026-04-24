console.log("login js")


// const kuchB = document.getElementById("kuchB")
// console.log(kuchB.innerHTML)

const loginHandler = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")


    if (!email.value || !password.value) {
        alert("required fields are missing!")
        return
    }

    const getUsers = JSON.parse(localStorage.getItem("users"))
    // console.log("getUsers", getUsers)

    const findUser = getUsers.find((user) => {
        // console.log("user", user)
        if (user.email === email.value && user.password === password.value) {
            return true
        }

    })

    console.log(findUser, "findUser")

    if (!findUser) {
        alert("Invalid email or password")
        return
    }

    localStorage.setItem("loginUser", JSON.stringify(findUser))
    alert("login successfully!")
    location.replace("./dashboard.html")
}
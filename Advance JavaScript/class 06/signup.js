// console.log("sign js")


const signupHandler = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    if (!email.value || !password.value) {
        alert("required fields are missing!")
        return
    }

    const userObj = {
        email: email.value,
        password: password.value
    }
    // console.log(userObj)

    // get users
    const users = localStorage.getItem("users")
    console.log(users)

    if (users === null) {
        // first user signup kr rha ha 
        console.log("first user")
        localStorage.setItem("users", JSON.stringify([userObj]))
        alert("User Signup!")


    } else {
        // first user nahi ha
        const userData = JSON.parse(users)

        console.log(userData, "userData")
        const findEmail = userData.find((user) => {
            if (user.email === email.value) {
                return true
            }
        })


        if (findEmail) {
            alert("Email address already exist")
            return
        }

        console.log("findEmail", findEmail)
        userData.push(userObj)
        console.log("first user nhi hai", userData)
        localStorage.setItem("users", JSON.stringify(userData))
        alert("User Signup!")
    }


    email.value = ""
    password.value = ""
    location.href = "./index.html"
    // // save obj on localstorage
    // localStorage.setItem("users" , JSON.stringify([userObj]))




}
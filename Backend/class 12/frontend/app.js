const authCheck = (() => {
    const userId = localStorage.getItem("user")
    console.log("authCheck", userId)

    if (userId) {
        return window.location.replace("./dashboard.html")
    }

})()

const signUpHandler = async () => {
    try {
        const fullName = document.getElementById("fullname").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const confirmPassword = document.getElementById("confirm-password").value


        if (!fullName || !email || !password || !confirmPassword) {
            alert("Required fields are missing!")
            return
        }

        if (password !== confirmPassword) {
            alert("password not match!")
            return
        }

        const userObj = {
            fullName,
            email,
            password
        }

        console.log("userObj", userObj)
        const res = await fetch(`http://localhost:5000/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        }).then(res => res.json())


        if (res.status) {
            alert("sign Successfully")
            window.location.assign("./login.html")
        } else {
            alert(res.message)
        }
        console.log("res", res)

    } catch (error) {
        alert(error.message)
    }



}
// const createStd = async () => {
//     const firstName = document.getElementById("firstName").value
//     const lastName = document.getElementById("lastName").value
//     const email = document.getElementById("email").value
//     const age = document.getElementById("age").value

//     const obj = {
//         firstName,
//         lastName,
//         email,
//         age
//     }

//     console.log(obj)

//     await fetch("http://localhost:5000/create-std", {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(obj)
//     })
//     console.log("created!")

// }


// const getUsers = (async () => {
//     const data = await fetch("http://localhost:5000/get-all-std").then(res => res.json())
//     console.log(data, "Data")
// })()


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
        } else {
            alert(res.message)
        }
        console.log("res", res)

    } catch (error) {
        alert(error.message)
    }



}
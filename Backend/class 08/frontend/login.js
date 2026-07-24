const loginHandler = async () => {
    try {

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value


        if (!email || !password) {
            alert("Required fields are missing!")
            return
        }

        const obj = {
            email,
            password
        }
        console.log(obj);

        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(res => res.json())

        if (res.status) {
            console.log(res)
            localStorage.setItem("user", res.data._id)
            alert("Login successfully")
        } else {
            alert(res.message)
        }



    } catch (error) {
        alert(error.message)
    }


}
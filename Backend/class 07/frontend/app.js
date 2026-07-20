const createStd = async () => {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const age = document.getElementById("age").value

    const obj = {
        firstName,
        lastName,
        email,
        age
    }

    console.log(obj)

    await fetch("http://localhost:5000/create-std", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    console.log("created!")

}


const getUsers = (async () => {
    const data = await fetch("http://localhost:5000/get-all-std").then(res => res.json())
    console.log(data, "Data")
})()
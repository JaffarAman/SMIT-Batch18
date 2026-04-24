
const currentUser = JSON.parse(localStorage.getItem("loginUser"))
const addNote = () => {
    const title = document.getElementById("title").value
    const desc = document.getElementById("desc").value

    const obj = {
        title,
        desc,
        email: currentUser.email
    }

    // console.log(obj)

    const notes = localStorage.getItem("notes")

    if (!notes) {
        // first note

        console.log("first note")
        localStorage.setItem("notes", JSON.stringify([obj]))

    } else {
        // first note nahi hai
        const getNotes = JSON.parse(notes)
        console.log("getNotes", getNotes)
        getNotes.push(obj)
        localStorage.setItem("notes", JSON.stringify(getNotes))
    }

    alert("notes Created!")
    renderUi()

}

const parent = document.getElementById("parent")
const renderUi = () => {
    const getNotes = JSON.parse(localStorage.getItem("notes"))
    console.log("getNotes", getNotes)
    parent.innerHTML = ""
    for (let note of getNotes) {
        parent.innerHTML += `  <div style="border: 1px solid red;" >
            <h1>title: ${note.title}</h1>
            <h1>desc: ${note.desc}</h1>
            <h1>email: ${note.email}</h1>
        </div>
`
    }


}
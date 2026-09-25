import React, { useState } from 'react'
import ButtonCmp from './button'

const TodoApp = () => {


    const [noteInput, setNoteInput] = useState("")

    const [notesArr, setNotesArr] = useState([])


    const addNoteHandler = (event) => {
        event.preventDefault()
        // console.log("noteInput", noteInput)

        notesArr.push(noteInput)
        setNotesArr([...notesArr])
        setNoteInput("")

    }

    console.log("notesArr", notesArr)


    const deleteHandler = (index) => {
        console.log("deleteHandler", index)

        notesArr.splice(index, 1)
        setNotesArr([...notesArr])

    }




    const [editIndexNumber, setEditIndexNumber] = useState("")
    const [editInput, setEditInput] = useState("")


    const editHandler = (index) => {
        const value = notesArr[index]
        // console.log("value", value)
        setEditInput(value)


        setEditIndexNumber(index)

    }

    console.log("editIndexNumber", editIndexNumber)


    const saveHandler = () => {
        console.log("noteArr before update", notesArr)
        notesArr[editIndexNumber] = editInput
        console.log("noteArr after update", notesArr)

        setEditIndexNumber("")
        setNotesArr([...notesArr])
    }

    return (
        <div>
            <h1>My Note</h1>

            <div>

                {/* <form action="" onSubmit={(e)=>addNoteHandler(e)} > */}
                <form onSubmit={addNoteHandler} >
                    <input type="text" value={noteInput} placeholder='Enter your notes....'
                        onChange={(e) => setNoteInput(e.target.value)}
                    />
                    {/* <button>Add Note</button> */}
                    {/* <button type='button' >Delete All</button> */}
                    <ButtonCmp type={"submit"} text="Add Note" />
                    <ButtonCmp text="Delete All" />
                </form>



            </div>


            {/* notes listing */}
            <div>

                {
                    notesArr && notesArr.map((val, index) => {
                        return (
                            // 5  ===           5
                            index === editIndexNumber ?
                                // edit input
                                <div>
                                    <input type='text' placeholder='Edit Input'
                                        value={editInput}
                                        onChange={(e) => setEditInput(e.target.value)}
                                    />
                                    <button onClick={saveHandler} >Save</button>
                                    <button onClick={() => setEditIndexNumber("")} >Cancel</button>
                                </div>
                                :

                                // note card
                                <div key={index} >
                                    <p> {val}  </p>
                                    <button onClick={() => editHandler(index)} >Edit</button>
                                    {/* <button onClick={() => deleteHandler(index)} >Delete</button> */}
                                    <ButtonCmp
                                        text='delete'
                                        onClick={() => deleteHandler(index)} />

                                </div>
                        )
                    })
                }





            </div>


        </div>
    )
}

export default TodoApp

import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../../config/baseUrl'

const TodoForm = ({ isRefresh,
    setIsRefresh }) => {


    const [title, setTitle] = useState("")
    const [desc, setdesc] = useState("")
    const [priority, setpriority] = useState("")
    const [isLoading, setIsloading] = useState(false)


    const todoHandler = async (event) => {
        try {
            setIsloading(true)
            event.preventDefault()

            //add condition

            const userData = JSON.parse(localStorage.getItem("userData"))
            const body = {
                title,
                desc,
                priority,
                userId: userData._id
            }

            const response = await axios.post(`${BASE_URL}/todo`, body, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setIsRefresh(!isRefresh)
            setIsloading(false)
            setTitle("")
            setdesc("")

            console.log("todo create response", response)

        } catch (error) {
            setIsloading(false)
            console.log("ERror", error)
        }

    }

    return (

        <form onSubmit={todoHandler}>
            <input value={title} type="text" placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder='Enter Desc'
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
            />

            <select name="" id=""
                onChange={e => setpriority(e.target.value)}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button type={isLoading ? "button" : "submit"} disabled={isLoading} >
                {
                    isLoading ? "loading..." :
                        "Submit Todo"
                }
            </button>
        </form>
    )
}

export default TodoForm

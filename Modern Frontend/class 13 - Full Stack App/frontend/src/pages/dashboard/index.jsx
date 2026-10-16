import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../config/baseUrl'

const Dashboard = () => {

    const [title, setTitle] = useState("")
    const [desc, setdesc] = useState("")
    const [priority, setpriority] = useState("")


    const todoHandler = async (event) => {
        try {

            event.preventDefault()

            //add condition

            const body = {
                title,
                desc,
                priority
            }

            const response = await axios.post(`${BASE_URL}/todo`, body, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log("todo create response", response)

        } catch (error) {
            console.log("ERror", error)
        }

    }


    return (
        <div>
            <h1>Dashboard Page</h1>

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

                <button>Submit Todo</button>
            </form>

        </div>
    )
}

export default Dashboard

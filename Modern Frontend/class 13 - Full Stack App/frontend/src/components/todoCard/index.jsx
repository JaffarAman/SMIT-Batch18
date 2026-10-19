import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../../config/baseUrl'

const TodoCard = ({ todo, isRefresh,
    setIsRefresh }) => {

    const [isLoading, setIsloading] = useState(false)

    const editHandler = () => { }

    const deleteHandler = async (todoId) => {
        try {
            setIsloading(true)
            console.log("todoId", todoId)
            await axios.delete(`${BASE_URL}/todo/${todoId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setIsRefresh(!isRefresh)

        } catch (error) {
            console.log("error", error.message)
        } finally {
            setIsloading(false)
        }
    }


    const userData = JSON.parse(localStorage.getItem("userData"))

    const isBtnShow = todo.userId === userData._id
    console.log('isBtnShow', isBtnShow)
    return (
        <div className='todoCard' style={{ border: "1px solid black" }}  >
            <h1>Title : {todo.title} </h1>
            <p>todo desc : {todo.desc} </p>
            <p>userName: {userData.fullName}</p>

            {
                isBtnShow ?
                    <>
                        <button>edit</button>
                        <button onClick={() => deleteHandler(todo._id)} >delete</button>
                    </>
                    : null
            }
        </div>
    )
}

export default TodoCard

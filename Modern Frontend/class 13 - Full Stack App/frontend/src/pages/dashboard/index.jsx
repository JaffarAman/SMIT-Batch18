import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../config/baseUrl'
import TodoCard from '../../components/todoCard'
import TodoForm from '../../components/todoForm'

const Dashboard = () => {


    const [fetchLoading, setfetchLoading] = useState(false)
    const [todos, setTodos] = useState([])
    const [isRefresh, setIsRefresh] = useState(false) //flag

    useEffect(() => {
        fetchTodos()
    }, [isRefresh])



    const fetchTodos = async () => {
        try {
            setfetchLoading(true)
            // api call
            const response = await axios.get(`${BASE_URL}/todo`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            console.log("fetchTodos response", response.data.data)
            setTodos(response.data.data)

        } catch (error) {
            const message = error?.response?.data?.message || error.message || "Something went wrong!"
            alert(message)
        } finally {
            setfetchLoading(false)
        }
    }

    return (
        <div>
            <h1>Dashboard Page</h1>


            <TodoForm
                isRefresh={isRefresh}
                setIsRefresh={setIsRefresh}
            />

            {
                fetchLoading ? <h1>loading....</h1> :

                    todos.length > 0 ?

                        todos.map((todo, index) => {
                            return (
                                <React.Fragment key={todo._id} >
                                    <TodoCard todo={todo}
                                        isRefresh={isRefresh}
                                        setIsRefresh={setIsRefresh}

                                    />
                                </React.Fragment>
                            )
                        })
                        : <h1>NO Records - (Todos)</h1>
            }

        </div>
    )
}

export default Dashboard

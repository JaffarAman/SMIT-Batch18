import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../config/baseUrl'

const ProtectedRoute = () => {


    const [isLoading, setIsLoading] = useState(false)
    const [isAuth, setisAuth] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const userData = await axios.get(`${BASE_URL}/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
                console.log("userData", userData.data.data)
                const data = userData.data.data
                localStorage.setItem("userData", JSON.stringify(data))
                setisAuth(true)
                setIsLoading(false)

            } catch (error) {
                setisAuth(false)
                console.log(error.response.status)
                if (error.response.status === 401) {
                    localStorage.removeItem("token")
                    navigate("/")
                }
            }
            // finally {
            //     setIsLoading(false)
            // }
        })()
    }, [])


    console.log("isAuth", isAuth)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        localStorage.getItem("token") ?
            <Outlet /> : <Navigate to={"/"} />
    )
}

export default ProtectedRoute

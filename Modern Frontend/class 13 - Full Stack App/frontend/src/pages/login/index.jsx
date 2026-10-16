import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../config/baseUrl'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const loginHandler = async (event) => {
        try {
            event.preventDefault()

            console.log("Login Form submit!")
            if (!email || !password) {
                return alert("Required fields are missing!")
            }

            const userObj = {
                email,
                password
            }
            // console.log("userObj", userObj)

            // API CAll
            setIsLoading(true)
            const response = await axios.post(`${BASE_URL}/auth/login`, userObj)
            console.log("response ", response)
            setIsLoading(false)
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")

        } catch (error) {
            setIsLoading(false)
            console.log("error", error.response.status)
            if (error.response.status == 403) {
                // navigate otp verify screen
                return navigate("/otpverify")
            }
            alert(error?.response?.data?.message || error.message)

        }


    }

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={loginHandler} >

                <input type="text" placeholder='Enter your email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" placeholder='Enter your password'
                    onChange={e => setPassword(e.target.value)}
                />

                <p>
                    {/* <a href="/signup">Create Account?</a> */}
                    <Link to="/signup"  > Create Account?</Link>
                </p>



                {/* loading UI  */}
                {
                    isLoading ?
                        <button type='button' disabled >loading....</button>

                        : <button>Login</button>
                }



            </form>


        </div>
    )
}

export default Login

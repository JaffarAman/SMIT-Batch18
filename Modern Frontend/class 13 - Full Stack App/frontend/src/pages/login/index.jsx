import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const loginHandler = (event) => {
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

        setIsLoading(true)
        // API CAll
        setTimeout(() => {
            setIsLoading(false)
            console.log("API RESPONSE")
        }, 2000)


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

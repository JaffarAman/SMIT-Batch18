import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const BASE_URL = import.meta.env.VITE_BASE_URL

// console.log("BASE_URL", BASE_URL)
const Signup = () => {

    const [fullName, setfullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const signupHandler = async (event) => {
        try {
            // console.log("signup Form submit!")

            event.preventDefault()

            // if (!email || !password || !fullName) {
            //     return alert("Required fields are missing!")
            // }

            const userObj = {
                email,
                password,
                fullName
            }
            // console.log("userObj", userObj)

            setIsLoading(true)
            // API CAll
            const response = await axios.post(`${BASE_URL}/auth/signup`, userObj)
            console.log("response", response)

        } catch (error) {
            setIsLoading(false)
            console.log("ERROR: ", error.response.data.message)
            alert(error?.response?.data?.message)
        }

    }

    return (
        <div>
            <h1>Signup Page</h1>

            <form onSubmit={signupHandler} >

                <input type="text" placeholder='Enter your fullName'
                    onChange={e => setfullName(e.target.value)}
                />
                <input type="text" placeholder='Enter your email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" placeholder='Enter your password'
                    onChange={e => setPassword(e.target.value)}
                />

                <p>
                    {/* <a href="/signup">Create Account?</a> */}
                    <Link to="/"  > Already Account?</Link>
                </p>



                {/* loading UI  */}
                {
                    isLoading ?
                        <button type='button' disabled >loading....</button>

                        : <button>Signup</button>
                }



            </form>


        </div>
    )
}

export default Signup

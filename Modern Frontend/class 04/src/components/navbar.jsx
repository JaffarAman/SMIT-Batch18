import React, { useState } from 'react'

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false) //boolean
    console.log("NAVBAR");

    const loginHandler = () => {
        setIsLogin(true)
    }
    return (
        <div>
            <h1>NAVBAR  {isLogin ? "JAFFAR AMAN" : "Please login"} </h1>
            <button onClick={loginHandler} >Login</button>
        </div>
    )
}

export default Navbar

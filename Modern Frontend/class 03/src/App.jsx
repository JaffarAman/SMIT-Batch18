import React, { useState } from 'react'
import "./style.css"

const App = () => {

    // const userName = "Jaffar Aman"
    // const para = "My name is jaffar aman"
    // const isLogin = true
    // true == USERNAME
    // false == PLEASE LOGIN


    // const postHandler = (name, ele) => {
    //     console.log("ele", ele.target.innerHTML)
    //     // alert("POST CREATED! " + name)
    // }

    // let user = "user"
    // console.log("before call user", user)


    // state - useState
    // const state = useState("Saylani")
    // console.log("read", state[0])
    // console.log("write", state[1])

    // const loginHandler = () => {
    //     user = "JAFFAR AMAN"
    //     console.log("user", user)
    // }


    const [userName, setUserName] = useState("Jaffar")

    const loginHandler = () => {
        setUserName("Jaffar Aman")
    }
    console.log("userName", userName)

    return (
        <div>
            <h1>HELLO {userName} </h1>
            <button onClick={loginHandler} >LOGIN!</button>

            {/* <h1>HELLO {user}!</h1>

            {/* <h1 style={{
                color: "red"
            }} >HELLO</h1> */}


            {/* <h1>HELLO {userName} </h1>
            <p> {} </p> */}

            {/* <h1> {isLogin ? userName : "Please Login"}  </h1> */}


            {/* <h1 className='heading1' >HELLO REACT! we are using css
            in this Element</h1>
            
            <input type="text" /> */}



            {/* <button onClick={(ele) => postHandler("JAFFAR", ele)} >POST CREATE</button> */}



        </div>
    )
}

export default App

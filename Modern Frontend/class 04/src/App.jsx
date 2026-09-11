import { useState } from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";

const App = () => {

    // // let userName = "SAYLANI!"
    let [name, setName] = useState("Jaffar")
    console.log("name", name);

    const updatedValue = () => {
        // userName = "SMIT"
        // console.log(userName);
        name = "Jaffar Aman"
        setName(name)
    }
    // console.log("APP CMP")



    const [arr, setArr] = useState(["apple", "mango"]) /* 12345 */
    // const [arr , setArr] = useState({name : "Jaffar"})
    console.log("arr", arr)

    const updateValue = () => {
        // arr.push("orange")
        // console.log("updatedArr", arr) /* 12345 */

        // // array set
        // setArr(arr) /* 12345 */

        // const newArr = [...arr , "orange"]
        // setArr(newArr)


        //  setArr([...arr, "orange"])



    }

    const [loading, setLoading] = useState(false)


    const foo = () => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }
    foo()


    // if (loading) {
    //     return <h1>LOADING....</h1>
    // }


    const [isAuth, setIsAuth] = useState(false)

    return (
        loading ? <h1>loading....</h1> :
            <div>


                {/* after login */}


                {/* before login */}

                {/* {
                    isAuth ? (
                        <div>
                            <h1>HELLO SAYLANI</h1>
                            <h1>WELCOME SAYLANI</h1>
                        </div>
                    )
                        :
                        <h1>PLEASE LOGIN</h1>
                } */}


                {/* <button onClick={() => {
                    // const value = !isAuth ? true : false
                    setIsAuth(!isAuth) //toggle
                    // !true = false
                    // !false = true
                }} > {isAuth ? "logout" : "login"} </button> */}


                {/* <h1>HELLO WORLD</h1>
                <h1>HELLO SAYLANI</h1>
                <h1>HELLO BATCH 18</h1>
                <h1>HELLO Jaffar Aman</h1>
                <h1>HELLO Pakistan</h1>
 */}


                {/* <h1> {!isAuth ? "Please Login" : "Welcome Jaffar Aman!"} </h1> */}
                {/* {
                    isAuth ?
                        <h1>Welcome Jaffar Aman </h1>
                        :
                        <h1>Please Login </h1>
                } */}



                {/* <button onClick={updateValue} >Update Array</button> */}

                {/* 
            {!foo ? "FIRST TIME RENDER" : "RE-RENDERING...."}
            <button onClick={() => {
                setFoo(true)
            }} >CLICK!</button> */}


                {/* <h1>HELLO {name}  </h1>

            <button onClick={updatedValue} >UPDATE VALUE</button> */}

                {/* <Navbar />
            <Card /> */}









            </div>
    )
}

export default App

 import React from 'react'

const Navbar = (props) => {
    console.log("props", props)

    const campus = "head office"



    return (
        <div>
            <h1>HELLO NAVBAR :
                {props.userName}
            </h1>
            <button
                onClick={() => {
                    props.setUserName("Jaffar Aman")
                }}
            >CHILD BTN</button>


            <button onClick={() => {
                props.getCampusValue(campus)
            }} >PASS VALUE TO PARENT</button>
        </div>
    )
}

export default Navbar

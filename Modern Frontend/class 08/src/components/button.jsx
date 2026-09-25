import React from 'react'

// var a = null || 10

const ButtonCmp = ({ text = "Button", type, onClick = () => { } }) => {
    return (
        <button type={type || "button"} onClick={onClick} > {text} </button>
    )
}

export default ButtonCmp

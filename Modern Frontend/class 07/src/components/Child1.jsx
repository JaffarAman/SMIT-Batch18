import React, { useEffect } from 'react'

const Child1 = () => {

    useEffect(() => {

        // console.log("child 1 mounting...")
        console.log("User Active.....")
        // unmounting
        return () => {
            // console.log("chid1 component  remove!")
            // api calling offline
            console.log("USER OFFLINE!")
        }

    }, [])


    return (
        <div>
            <h1>Child 1</h1>
        </div>
    )
}

export default Child1

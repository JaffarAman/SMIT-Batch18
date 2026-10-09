import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const UserDetails = () => {
    // const { id } = useParams()


    const [searchParams, setURLSearchParams] = useSearchParams()
    const id = searchParams.get("id")
    const [user, setUser] = useState({})

    // console.log("setURLSearchParams")

    useEffect(() => {
        fetchSingleUser()
    }, [searchParams])

    const fetchSingleUser = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        // console.log("response", response)
        setUser(response.data)
    }


    console.log('====================================');
    console.log("user", user);
    console.log('====================================');

    return (
        <div>
            <h1>USER DETAIL : {id} </h1>

            <div style={{ border: "1px solid black" }} >

                <h1> {user.name}  </h1>
                <p> {user.email}  </p>
                <p> {user?.company?.name} </p>
                <p>{user.username}</p>
                <p>phone {user.phone} </p>
                <p>website : {user.website}</p>

            </div>


            <button onClick={() => {
                // searchParams.set("id", 3)
                setURLSearchParams({ id: 3 })
            }} >USER 3 </button>
            <button>USER 4 </button>

        </div>
    )
}

export default UserDetails

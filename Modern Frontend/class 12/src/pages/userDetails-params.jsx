import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const { id } = useParams()

    const [user, setUser] = useState({})

    useEffect(() => {
        fetchSingleUser()
    }, [])

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

        </div>
    )
}

export default UserDetails

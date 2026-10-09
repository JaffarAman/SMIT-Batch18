import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const UserDetails = () => {


    // useLocation
    const location = useLocation()
    console.log("location", location?.state?.id)
    const [user, setUser] = useState({})

    useEffect(() => {
        fetchSingleUser()
    }, [])

    const fetchSingleUser = async () => {
        // const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        // // console.log("response", response)
        // setUser(response.data)
    }


    return (
        <div>
            {/* <h1>USER DETAIL : {id} </h1> */}

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

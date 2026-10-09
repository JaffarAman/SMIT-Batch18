import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const UserPage = () => {


    const navigate = useNavigate() //return func


    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetchUserData()
    }, [])


    const fetchUserData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log("response", response)
        setUserData(response.data)
    }

    console.log("userData", userData)

    return (
        <div>
            <h1>User Page</h1>

            {
                userData.map((user, index) => {
                    return (
                        <div key={user.id} style={{ border: "1px solid black", margin: "20px" }} >
                            <h1>NAME : {user.name} </h1>
                            <p>email: {user.email} </p>
                            <p>Company Name :  {user.company.name} </p>
                            <button onClick={() => {
                                // navigate(`/user-detail/${user.id}`)
                                // navigate(`/user-detail?id=${user.id}`)

                                navigate("/user-detail", {
                                    state: {
                                        id: user.id
                                    }
                                })

                            }} >View Profile</button>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default UserPage

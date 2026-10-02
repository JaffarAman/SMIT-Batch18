import { useParams } from "react-router-dom"

const UserDetails = () => {

    const params = useParams()
    console.log("params", params.id)


    return (
        <div>
            <h1>User Details</h1>
        </div>
    )
}

export default UserDetails

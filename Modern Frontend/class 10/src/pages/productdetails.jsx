import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Productdetails = () => {

    const params = useParams()

    useEffect(() => {
        getSingleProduct()
    }, [])

    const getSingleProduct = async () => {
        const data = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
        console.log("data", data)
    }


    return (
        <div>
            <h1>Product Details: {params.id} </h1>
        </div>
    )
}

export default Productdetails

import axios from 'axios'
import React, { useEffect } from 'react'
import { productData } from '../data/product'
import { useNavigate } from 'react-router-dom'

const Product = () => {

    // useEffect(() => {
    //     getAllData()
    // }, [])

    // const getAllData = async () => {
    //     const data = await axios.get("https://fakestoreapi.com/products/")
    //     console.log("data", data)
    // }

    const navigate = useNavigate()

    return (
        <div>
            <h1>My Products</h1>

            {productData.map((product) => {
                return (
                    <div className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt={product.title} />
                        </div>

                        <div className="product-content">
                            <span className="product-category">
                                {product.category}
                            </span>

                            <h2>{product.title}</h2>

                            <p className="description">
                                {product.description}
                            </p>

                            <div className="rating">
                                <span className="star">★</span>
                                <span>{product.rating.rate}</span>
                                <span className="review-count">
                                    ({product.rating.count} reviews)
                                </span>
                            </div>

                            <div className="product-footer">
                                <span className="price">
                                    ${product.price}
                                </span>

                                <button onClick={() => {
                                    navigate(`/product/${product.id}`)
                                }} >Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Product

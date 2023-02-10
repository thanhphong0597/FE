

import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
export default function ProductDetail({ data }) {
    return (
        <Link to={`/productdetail/${data.id}`}>
            <div className="productDetail-wrapper">
                <p className="name">{data.name}</p>
                <p className="price">{data.price}</p>
            </div>
        </Link>
    )
}

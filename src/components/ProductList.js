import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])


    return (
        <section className="mb-8">
            <Link to="/">Home</Link>
            <h2 className="text-xl font-semibold mb-4">Product Catalog</h2>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="border p-4">
                        <h3 className="text-lg font-semibold">{product.title} {product.rating}</h3>
                        <img src={product.thumbnail} alt={product.title} className="w-full mb-4" />
                        <p>Brand: {product.brand}</p>
                        <p>Description: {product.description}</p> 
                        <p>Price: {product.price}</p>
                        <p>Category: {product.category}</p>
                        {/* Add more product details as needed */}
                    </div>
                ))}
            </div>

        </section>
    )
}
export default ProductList;
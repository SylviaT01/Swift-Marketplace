import React, { useState } from 'react';
import { useCart } from './cart-context';

function ProductDetails({ product, closeModal }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        closeModal();
    };

    // Calculate total price locally
    const totalPrice = product.price * quantity;

    return (
        <div className="bg-white p-8 max-w-md">
            <div className="mb-4">
                <img src={product.thumbnail} alt={product.title} className="w-full md:w-1/3" />
                <div className="md:ml-4">
                    <h2 className="text-xl font-semibold mb-4">{product.title}</h2>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <div className="flex items-center mb-4">
                        <span className="text-gray-500 mr-2">Price:</span>
                        <span className="font-semibold text-gray-900">${product.price}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-gray-500 mr-2">Rating:</span>
                        <span className="font-semibold text-gray-900">{product.rating}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <label htmlFor="quantity" className="mr-2">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="border rounded-md px-2 py-1 w-16 text-center"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-gray-500 mr-2">Total Price:</span>
                        <span className="font-semibold text-gray-900">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="bg-red-400 text-white px-4 py-2 rounded" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            <button className="absolute top-4 right-4" onClick={closeModal}>Close</button>
        </div>
    );
}

export default ProductDetails;

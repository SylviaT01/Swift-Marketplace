import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Categories from './categories';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                // Extract and set categories
                const uniqueCategories = [...new Set(data.products.map(product => product.category))];
                setCategories(uniqueCategories.map((category, index) => ({ id: index, name: category })));
            });
    }, []);

    const filterProductsByCategory = categoryId => {
        setSelectedCategory(categoryId);
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === categories[selectedCategory].name)
        : products;

    return (
        <section className="mb-8">
            <Link to="/">Home</Link>
            <h2 className="text-xl font-semibold text-center  mb-4">Product Catalog</h2>
            <div className="text-center mb-4">
                <Categories
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={filterProductsByCategory}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="border p-4 flex flex-col justify-between shadow-md shadow-black">
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                            <div className="image-container">
                                <img src={product.thumbnail} alt={product.title} className="w-full h-full mb-2" />
                            </div>
                        </div>
                        <div>
                            <p className="mb-2 text-sm"><span className="font-semibold text-sm">Brand:</span> {product.brand}</p>
                            <p className="mb-2 text-sm"><span className="font-semibold text-sm">Description:</span> {product.description}</p> 
                            <p className="mb-2 text-sm"><span className="font-semibold text-sm">Price:</span> ${product.price}</p>
                            <p className="mb-2 text-sm"><span className="font-semibold text-sm">Category:</span> {product.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductList;

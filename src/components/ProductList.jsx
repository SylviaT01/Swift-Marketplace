import React, { useState, useEffect } from 'react';
import Categories from './categories';
import { Navbar } from './navbar';
import { useCart } from './cart-context'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { addToCart } = useCart();
    

    
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(data => {
                // Filter out categories and brands from the products
                const filteredProducts = data.products.filter(product =>
                    product.category !== "smartphones" && product.brand !== "luxury palace" && product.brand !== "Bracelet" && product.brand !== "fauji"
                );

                // Extract and set categories from filtered products
                const uniqueCategories = [...new Set(filteredProducts.map(product => product.category))];
                setCategories(uniqueCategories.map((category, index) => ({ id: index, name: category })));

                // Set filtered products
                setProducts(filteredProducts);
            });
    }, []);


    const handleAddToCart = (product) => {
        addToCart(product);
        // console.log("Product added to cart:", product);
      };
    

    const filterProductsByCategory = categoryId => {
        setSelectedCategory(categoryId);
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === categories[selectedCategory].name)
        : products;
    

    return (
    
        <section className="mb-8">
            {/* <Link to="/">Home</Link> */}
            <Navbar />
            <h2 className="text-xl font-semibold text-center  mb-4">Product Catalog</h2>
            <div className="text-center mb-4">
                <Categories
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={filterProductsByCategory}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 bg-[url('/src/assets/page4.jpg')] z-10">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="border p-4 flex flex-col justify-between shadow-md shadow-black">
                        <h2 className="font-medium text-base mb-1">{product.title}</h2>
                        <div className="flex-grow border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="w-[200px] mx-auto flex justify-center items-center ">
                                    {/* <img src={product.thumbnail} alt={product.title} className="max-h-[160px] group-hover:scale-110 transition duration-300" /> */}
                                    <Swiper
                                        spaceBetween={30}
                                        navigation
                                        pagination={{ clickable: true }}
                                    >
                                        {product.images.map((image, imageIndex) => (
                                            <SwiperSlide key={imageIndex}>
                                                <img src={image} alt={`Product avatar ${imageIndex + 1}`} className="max-h-[300px] object-cover" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm capitalize text-gray-500 mb-1">
                                {product.category}
                            </div>
                            <div className="font-medium">$ {product.price}</div>
                            <button className=" bg-red-400 p-2" onClick={() => handleAddToCart(product)}>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


export default ProductList;

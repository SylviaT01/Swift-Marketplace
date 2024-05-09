import React, { useState, useEffect, useRef } from 'react';
import Categories from './categories';
import { Navbar } from './navbar';
import { useCart } from './cart-context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ProductDetails from './productDetails';
import { FaSearch } from "react-icons/fa";
import StarRating from './starRating';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const { addToCart } = useCart();
    const modalRef = useRef(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

    
    useEffect(() => {
        // Initialize AOS once after the initial render
        AOS.init();
    }, []);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(data => {
                const filteredProducts = data.products.filter(product =>
                    product.category !== "smartphones" && product.brand !== "luxury palace" && product.brand !== "Bracelet" && product.brand !== "fauji"
                );

                const uniqueCategories = [...new Set(filteredProducts.map(product => product.category))];

                const categoriesWithAll = [{ id: null, name: "All categories" }, ...uniqueCategories.map((category, index) => ({ id: index, name: category }))];
                setCategories(categoriesWithAll);
                setProducts(filteredProducts);
                setFilteredProducts(filteredProducts);
            });
    }, []);

    const handleAddToCart = (product, quantity) => {
        addToCart(product, quantity);
    };

    const filterProductsByCategory = (categoryId) => {
        if (categoryId !== null) {
            const categoryName = categories.find(cat => cat.id === categoryId)?.name;
            setSelectedCategory(categoryId);
            const filtered = categoryId === null ? products : products.filter(product => product.category === categoryName);
            setFilteredProducts(filtered);
        } else {
            setSelectedCategory(null);
            setFilteredProducts(products);
        }
    };

    const handleSearch = () => {
        if (!searchQuery) {
            // If search query is empty, reset the product list
            setFilteredProducts(products);
        } else {
            // Filter products based on the search query
            const filtered = products.filter(product => {
                // You can adjust the search criteria based on your requirements
                return product.title.toLowerCase().includes(searchQuery.toLowerCase());
            });
            setFilteredProducts(filtered);
        }
    };
    

    const openProductDetails = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const handleOverlayClick = (event) => {
        if (event.target === modalRef.current) {
            closeModal();
        }
    };

    return (
        <section className="mb-8">
            <Navbar />
            <div className="border-b">
            <h2 className="text-xl font-semibold text-center uppercase">Product Catalog</h2>
            </div>
            <div className=" text-center mb-2 border-b">
                <Categories
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={filterProductsByCategory}
                />
                <div className="flex justify-center mb-2">
                <input type="search" placeholder="Search products" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="border border-gray-300 px-4 py-2 rounded" />
                <button className="bg-blue-300 hover:bg-blue-200/90 p-2 py-2 rounded border" onClick={handleSearch}><FaSearch /></button>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 bg-blue-200 z-100 px-4 py-4 mb-0">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="border p-4 flex flex-col justify-between shadow-md rounded-lg overflow-hidden bg-white  aos-init" data-aos="fade-up">
                        <h2 className="font-medium text-base mb-1">{product.title}</h2>
                        <div className="flex-grow border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="w-[200px] mx-auto flex justify-center items-center">
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
                            <StarRating rating={product.rating} />
                            <button className="bg-blue-300 hover:bg-blue-200/90 p-1" onClick={() => openProductDetails(product)}>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Product Details Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" ref={modalRef} onClick={handleOverlayClick}>
                    <ProductDetails product={selectedProduct} closeModal={closeModal} handleAddToCart={handleAddToCart} />
                </div>
            )}

        </section>
    );
}

export default ProductList;

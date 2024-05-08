import React, { useState, useEffect, useRef } from 'react';
import Categories from './categories';
import { Navbar } from './navbar';
import { useCart } from './cart-context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ProductDetails from './productDetails';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useCart();
    const modalRef = useRef(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(data => {
                const filteredProducts = data.products.filter(product =>
                    product.category !== "smartphones" && product.brand !== "luxury palace" && product.brand !== "Bracelet" && product.brand !== "fauji"
                );

                const uniqueCategories = [...new Set(filteredProducts.map(product => product.category))];
                setCategories(uniqueCategories.map((category, index) => ({ id: index, name: category })));

                setProducts(filteredProducts);

                AOS.init();
            });
    }, []);

    const handleAddToCart = (product, quantity) => {
        addToCart(product, quantity);
    };

    const filterProductsByCategory = categoryId => {
        setSelectedCategory(categoryId);
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

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === categories[selectedCategory].name)
        : products;

    return (
        <section className="mb-8">
            <Navbar />
            <h2 className="text-xl font-semibold text-center  mb-4">Product Catalog</h2>
            <div className="text-center mb-4">
                <Categories
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={filterProductsByCategory}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="border p-4 flex flex-col justify-between shadow-md rounded-lg overflow-hidden aos-init" data-aos="fade-up">
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
                            <button className="bg-blue-300 hover:bg-blue-200/90 p-1" onClick={() => openProductDetails(product)}>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" ref={modalRef} onClick={handleOverlayClick}>
                    <ProductDetails product={selectedProduct} closeModal={closeModal} handleAddToCart={handleAddToCart} />
                </div>
            )}
        </section>
    );
}

export default ProductList;

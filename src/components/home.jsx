import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

const Home = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust as needed
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="w-full max-w-full overflow-hidden relative">
            <div className="slider-container h-full">
                <Slider ref={sliderRef} {...settings}>
                    <div className='relative'>
                        <img src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Woman after shopping" className="w-full h-svh object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                            <h2 data-aos="fade-down" data-aos-duration="1500" className="text-4xl md:text-6xl lg:text-7xl  font-semibold uppercase space-font z-10 text-white shadow-md">Welcome to Swift MarketPlace!</h2>
                            <p data-aos="fade-right" data-aos-duration="1500" className="w-2/3 lg:w-1/2 z-20 text-sm md:text-base lg:text-lg xl:text-xl">Your One-Stop Destination for Fashion, Home Decor, and More!</p>
                            <Link to="/products" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000" className="browse-products-btn border-[1px] uppercase h-12 w-64 md:h-9 md:w-72 mt-5 duration-300 font-medium bg-blue-400 hover:bg-blue-200 hover:bg-opacity-70">Browse Products</Link>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="https://img.freepik.com/premium-photo/happy-millennial-african-american-lady-with-laptop-sits-sofa-looks-into-shopping-bag-living-room_116547-35206.jpg?w=740" alt="Enjoy the view" className="w-full h-svh object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                            <h2 data-aos="fade-down" data-aos-duration="1500" className="text-4xl md:text-6xl lg:text-7xl  font-semibold uppercase space-font z-10 text-white shadow-md">Elevate Your Presence with Captivating Fragrances</h2>
                            <p data-aos="fade-right" data-aos-duration="1500" className="w-2/3 lg:w-1/2 z-20 text-sm md:text-base lg:text-lg xl:text-xl">Shop Exquisite Perfumes</p>
                            <Link to="/products" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000" className="browse-products-btn border-[1px] uppercase h-12 w-64 md:h-9 md:w-72 mt-5 duration-300 font-medium bg-blue-400 hover:bg-blue-200 hover:bg-opacity-70">Browse Products</Link>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://img.freepik.com/free-photo/watch-black-box-bow-tie-lie-white-windowsill_8353-687.jpg?t=st=1715156346~exp=1715159946~hmac=c330d203f13701da055a732decd695b07939e2004720bab95a5759598dda7bdf&w=740" alt="Smile after shopping" className="w-full h-svh object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                            <h2 data-aos="fade-down" data-aos-duration="1500" className="text-4xl md:text-6xl lg:text-7xl  font-semibold uppercase space-font z-10 text-white shadow-md">Explore Our Collection of Watches</h2>
                            <p data-aos="fade-right" data-aos-duration="1500" className="w-2/3 lg:w-1/2 z-20 text-sm md:text-base lg:text-lg xl:text-xl">Shop Exquisite Perfumes</p>
                            <Link to="/products" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000" className="browse-products-btn border-[1px] uppercase h-12 w-64 md:h-9 md:w-72 mt-5 duration-300 font-medium bg-blue-400 hover:bg-blue-200 hover:bg-opacity-70">Browse Products</Link>
                        </div>
                    </div>
                </Slider>
                <button onClick={goToPrevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-300 p-2 rounded-full shadow-md z-10">
                    <IoMdArrowRoundBack />
                </button>
                <button onClick={goToNextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-300 p-2 rounded-full shadow-md z-10">
                    <IoMdArrowRoundForward />
                </button>
            </div>
        </div>
    );
};

export default Home;

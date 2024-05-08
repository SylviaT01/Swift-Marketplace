import React, { useEffect, useRef } from 'react';
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
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000, // Adjust as needed
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
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black">
                        <h2 data-aos="fade-down" data-aos-duration="1500" className="text-4xl md:text-6xl lg:text-7xl  font-semibold uppercase space-font z-10">Grab yours</h2>
                        <p data-aos="fade-right"
                            data-aos-duration="1500"
                            className="w-2/3 lg:w-1/2 z-20 text-sm md:text-base lg:text-lg xl:text-xl">You get everything you need</p>
                    </div>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Enjoy the view" className="w-full h-svh object-cover" />
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-with-shopping-bags_23-2149313436.jpg?t=st=1715115812~exp=1715119412~hmac=ab8ea06a53511dc6434a1edebd916c2b401eef4e8f6c7e182e5cefc4714ff052&w=740" alt="Smile after shopping" className="w-full h-svh object-cover" />
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

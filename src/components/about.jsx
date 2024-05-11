import { Parallax } from "react-parallax";
import { Navbar } from "./navbar";
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import Footer from "./footer";

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <div className="header">
                <Parallax
                    className="w-full h-[calc(100vh-5rem)] object-cover brightness-[.6]"
                    bgImage="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    strength={225}
                >
                    <div style={{ height: 500 }}>
                        <p className="text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] uppercase font-extralight text-white text-8xl">
                            About Swift MarketPlace
                        </p>
                    </div>
                </Parallax>
            </div>

            <div className="wrapper">
                <div className="my-8 text-center">
                    <p className="tracking-widest font-semibold uppercase text-xl p-5 text-black">
                        Swift MarketPlace-Happy shopping!
                    </p>
                    <p className="text-4xl px-[20rem] pb-5 font-extralight">
                        Explore, discover, and shop to your heart's content at Swift MarketPlace - where shopping is not just an activity, but an experience.
                    </p>
                    <p className="px-[7rem] pb-2 text-xl font-light">
                       Welcome to Swift MarketPlace, where convenience meets variety in the world of online shopping. Our journey began with a simple yet powerful vision: to create a platform that caters to the evolving needs of modern consumers.
                       We value your feedback, insights, and suggestions, as they drive us to continuously improve and innovate. Your trust is our priority, and we're committed to earning it, every step of the way.
                       So whether you're looking for the latest gadgets, trendy fashion essentials, or everyday household items, you can count on Swift MarketPlace to deliver convenience, variety, and unparalleled service.
                       Thank you for choosing Swift MarketPlace. We're honored to be part of your shopping journey❤️.
                    </p>
                </div>
            </div>

            <div className="wrapper py-2 flex flex-col gap-5">
                <p className="tracking-widest font-semibold uppercase text-xl p-5 text-black text-center">
                    Partners
                </p>
                <p className="text-2xl px-[5rem] pb-2 font-extralight text-center">
                We are deeply appreciative for the chance to partner with such remarkable companies and brands."
                </p>
                <div className='flex flex-row justify-center items-center gap-4'>
                <img src={logo2} alt="shein"  className='w-10 h-10'/>
                <img src={logo3} alt="random" className='w-10 h-10'/>
                <img src={logo4} alt="google" className='w-10 h-10'/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
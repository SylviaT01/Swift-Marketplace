import { Link } from 'react-router-dom';
import { useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="text-black py-20 pt-4 bg-slate-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-10 wrapper w-full gap-16 md:gap-10 lg:gap-5 xl:gap-10 2xl:px-10 ">
        <div className="footer-col-1 flex flex-col items-start">
          <Link
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
            href="/"
            className="text-4xl md:text-2xl font-semibold text-blue-400 hover:text-blue-500 duration-300"
          >
            Swift MarketPlace
          </Link>
          <div 
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
          className="pt-5">
              <p className="font-medium uppercase text-lg">Opening Hours:</p>
              <p>Mon-Sat: 9:00am - 8:00pm</p>
              <p>Sun: 12:00am - 9:00pm</p>
            </div>
        </div>
        <div
          className="footer-col-2 flex flex-col items-start"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          <p className="follow-text uppercase tracking-wider text-gray-900">{`Don't forget to follow us`}</p>
          <div className="social-icons flex gap-5 p-5">
            <div className="icon-circle">
              <FaFacebookF className="text-rose-100 mx-auto bg-blue-800 rounded" />
            </div>
            <div className="icon-circle">
              <FaInstagram className="text-rose-100 mx-auto bg-pink-400 rounded" />
            </div>
            <div className="icon-circle">
              <FaLinkedinIn className="text-rose-100 mx-auto bg-blue-600 rounded" />
            </div>
            <div className="icon-circle">
              <FaTwitter className="text-rose-100 mx-auto bg-blue-500 rounded " />
            </div>
          </div>
        </div>
        <div
          className="footer-col-3 flex flex-col items-start"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          <p className="uppercase font-medium text-blue-500 tracking-wider">
            Useful Links
          </p>
          <div className="nav-link flex flex-col-2 mt-3 gap-10 justify-start">
            <div className="link-col-left flex flex-col text-left gap-1 uppercase">
              <Link to="/" className="footer-nav-links hover:text-blue-500 hover:underline">
                Home
              </Link>
              <Link to="/products" className="footer-nav-links hover:text-blue-500 hover:underline">
                Products
              </Link>
              <Link to="/about" className="footer-nav-links hover:text-blue-500 hover:underline">
                About Us</Link>
              <Link to="/feedback" className="footer-nav-links hover:text-blue-500 hover:underline">
                Feedback
              </Link>
              <Link to="/contact" className="footer-nav-links hover:text-blue-500 hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div
          className="footer-col-4 flex flex-col items-start xl:items-center gap-3"
          data-aos="flip-up"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          <p className="uppercase tracking-wider text-gray-900">
            Need more information?
          </p>
          <Link to="/contact" className="footer-btn bg-blue-400 py-4 px-6 rounded-full uppercase text-sm font-medium hover:text-blue-300 hover:bg-blue-50 duration-300">
            + New Message
          </Link>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400" />
            <p className="font-medium text-lg">contact@swiftmarketplace.com</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-400" />
            <p className="font-medium text-lg">+254712345678</p>
          </div>
        </div>
      </div>

      <p
        className="copyright border-t border-gray-500/40 pt-10 text-gray-900 wrapper text-center uppercase"
        data-aos="zoom-in-up"
        data-aos-duration="800"
        data-aos-delay="1300"
      >
        &copy; {new Date().getFullYear()} SwiftMarketPlace. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
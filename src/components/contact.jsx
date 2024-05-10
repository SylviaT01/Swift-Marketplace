import React from 'react';
import { Navbar } from './navbar';
import Footer from './footer';

const ContactForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = '/'; // Redirect to homepage
      };
    return (
        <>
        <Navbar />
        <div className="flex items-center justify-center bg-cover h-screen bg-[url('/src/assets/page1.jpeg')]">
            <div className="flex w-full max-w-screen-lg bg-white shadow-md rounded">
            <div className="w-full md:w-3/8 p-8">
                <h2 className="section-title text-2xl font-bold mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                            id="message"
                            placeholder="Your Message"
                            rows="4"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                </div>
                <div className="w-full md:w-3/8 p-8 bg-gray-100 rounded">
                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="font-medium uppercase text-lg">Return address for online orders :</p>
                                <p>Bilha Towers Ground Floor, Shop Number 45KE</p>
                            </div>
                            <div>
                                <p className="font-medium uppercase text-lg">Phone Number:</p>
                                <p className="text-blue-500 underline underline-offset-2">+254712345678</p>
                            </div>
                            <div>
                                <p className="font-medium uppercase text-lg">Email Address:</p>
                                <p className="text-blue-500 underline underline-offset-2">contact@swiftmarketplace.com</p>
                            </div>
                            <div>
                                <p className="font-medium uppercase text-lg">Opening Hours:</p>
                                <p>Mon-Sat: 9:00am - 8:00pm</p>
                                <p>Sun: 12:00am - 9:00pm</p>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactForm;
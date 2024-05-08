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
            <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                            placeholder="Write your name"
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
                            placeholder="Write your email"
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
                            placeholder="Write your Message"
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
            </div>
            <Footer />
        </>
    );
};

export default ContactForm;

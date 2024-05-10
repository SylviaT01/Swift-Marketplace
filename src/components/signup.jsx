import React, { useState } from 'react';
import { Navbar } from './navbar';
import Footer from './footer';
import home from '../assets/home.jpg'

function SignupPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [isRegistered, setIsRegistered] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        setIsRegistered(true);
    };

    // Redirect after successful registration
    if (isRegistered) {
        window.location.href = '/'; // Redirect to the home page
    }

    return (
        <>
        <Navbar />
        <div className="flex items-center justify-center bg-cover h-screen bg-[url('/src/assets/page1.jpeg')]">
        <div className="flex w-full max-w-screen-lg bg-white shadow-md rounded">
        <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-1">Username</label>
                    <input type="text" id="username" name="username" placeholder="Your username" value={formData.username} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-1">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-1">Password</label>
                    <input type="password" id="password" name="password" placeholder="Your password" value={formData.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-1">Confirm password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password" value={formData.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <button type="submit" className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-blue-500">Sign Up</button>
            </form>
            </div>
            <div className="hidden md:block w-1/2 bg-cover bg-center rounded" style={{backgroundImage: `url(${home})`}}></div>
        </div>
        </div>
        <Footer />
        </>
    );
}

export default SignupPage;

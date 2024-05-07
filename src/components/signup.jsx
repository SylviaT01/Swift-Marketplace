import React, { useState } from 'react';
import { Link } from "react-router-dom";

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
        // Here you can add your logic to handle form submission
        // For example, you can send the form data to a backend API
        console.log(formData);
        // After successful signup, set isRegistered to true
        setIsRegistered(true);
    };

    // Redirect after successful registration
    if (isRegistered) {
        window.location.href = '/'; // Redirect to the home page
    }

    return (
        <>
        <header><Link to="/">Home</Link></header>
        <div className="flex items-center justify-center bg-cover h-screen bg-[url('/src/assets/page2.jpg')]">
        <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="username" className="block mb-1">Username</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="border p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="border p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-1">Confirm password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.password} onChange={handleChange} className="border p-2 w-full" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
            </form>
        </div>
        </div>
        </>
    );
}

export default SignupPage;

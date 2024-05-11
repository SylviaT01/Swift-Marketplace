import React, { useState } from 'react';
import { Navbar } from './navbar';
import Footer from './footer';
import survey from '../assets/survey.jpg'
import { FaStar } from 'react-icons/fa';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/';
        setFeedback('');
        setRating(0);
    };

    const handleStarClick = (value) => {
        setRating(value);
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center bg-cover h-screen bg-[url('/src/assets/page1.jpeg')]">
                <div className="flex w-full max-w-screen-lg bg-white shadow-md rounded">
                    <div className="w-full md:w-1/2 p-8">
                        <div className='flex flex-col justify-center items-center'>
                            <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
                                        Your Feedback
                                    </label>
                                    <textarea
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="feedback"
                                        placeholder="Please leave your feedback here"
                                        rows="4"
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                                        Rate our services:
                                    </label>
                                    <div className='flex flex-row'>
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className="cursor-pointer text-yellow-400"
                                                onClick={() => handleStarClick(index + 1)}
                                                color={index < rating ? "#ffc107" : "#e4e5e9"}
                                                size={30}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Submit Feedback
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="hidden md:block w-1/2 bg-cover bg-center rounded shadow-md" style={{ backgroundImage: `url(${survey})` }}></div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FeedbackForm;



import React, { useState } from 'react';
import { Navbar } from './navbar';
import Footer from './footer';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the logic to send the feedback data to your backend
        console.log('Feedback submitted:', feedback);
        // Optionally, you can reset the form after submission
        setFeedback('');
    };

    return (
        <>
         <Navbar />
        <div className="flex items-center justify-center bg-cover h-screen bg-[url('/src/assets/page1.jpeg')]">
            <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
            <Footer />
        </>
    );
};

export default FeedbackForm;

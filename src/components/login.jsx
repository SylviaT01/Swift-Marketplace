import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './navbar';
import Footer from './footer';
// import flowervase from "../assets/flowervase.jpg"
import background from '../assets/background.jpg'


const LoginForm = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    window.location.href = '/'; // Redirect to homepage
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-cover h-screen bg-[url('/src/assets/page1.jpeg')]">
        <div className="flex w-full max-w-screen-lg bg-white shadow-md rounded">
          <div className="w-full md:w-1/2 p-8">
            <div className='flex flex-col justify-center items-center'>
              <h2 className="text-xl font-semibold mb-2">Welcome to Swift MarketPlace</h2>
              <p className="mb-6">Type your e-mail to log in</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email or phone">
                  Email or Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Your email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^[0-9]{10}$"
                  title="Please enter a valid email address or a 10-digit phone number"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Your Password"
                  required
                />
              </div>
            </form>
            <div>
              Don't have an account? <Link to="/signup" className="text-blue-500">Register</Link>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log In
              </button>
            </div>
          </div>
          <div className="hidden md:block w-1/2 bg-cover bg-center rounded shadow-md" style={{backgroundImage: `url(${background})`}}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;

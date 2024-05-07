import React from 'react'
import { Link } from 'react-router-dom';

export const NavItems = () => {

  return (
    <div className='flex items-center gap-5'>
        <Link to="/" className="bg-transparent hover:bg-slate-50 py-1 px-2">Home</Link>
        <Link to="/products" className="bg-transparent hover:bg-slate-50 py-1 px-2">Products</Link>
        <Link to="/feedback" className="bg-transparent  hover:bg-slate-50 py-1 px-2">Feedback</Link>
        <Link to="/contact" className="bg-transparent hover:bg-slate-50 py-1 px-2">Contact us</Link>
        <Link to="/login" className="bg-blue-400 text-slate-50 hover:bg-blue-300/90 py-1 px-2">Login</Link>
        <Link to="/signup" className="bg-blue-400 text-slate-50 hover:bg-blue-300/90 py-1 px-2">Sign Up</Link>
    </div>
  )
}
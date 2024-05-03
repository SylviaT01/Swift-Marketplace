import React from 'react'
import { Link } from 'react-router-dom';
// import { Button } from './button'

export const NavItems = () => {

  return (
    // <div className='flex items-center gap-5'>
    //     <Button text="Home" classname="bg-transparent hover:bg-slate-50 py-1 px-2"/>
    //     <Button text="Products" classname="bg-transparent hover:bg-slate-50 py-1 px-2" />
    //     <Button text="Feedback" classname="bg-transparent border-2 hover:bg-slate-50 py-1 px-2"/>
    //     <Button text="Contact us" classname="bg-transparent border-2 hover:bg-slate-50 py-1 px-2"/>
    //     <Button text="Login" classname="bg-red-600 text-slate-50 hover:bg-red-600/90 py-1 px-2"/>
    // </div>
    <div className='flex items-center gap-5'>
        <Link to="/" className="bg-transparent hover:bg-slate-50 py-1 px-2">Home</Link>
        <Link to="/products" className="bg-transparent hover:bg-slate-50 py-1 px-2">Products</Link>
        <Link to="/feedback" className="bg-transparent border-2 hover:bg-slate-50 py-1 px-2">Feedback</Link>
        <Link to="/contact" className="bg-transparent border-2 hover:bg-slate-50 py-1 px-2">Contact us</Link>
        <Link to="/login" className="bg-red-600 text-slate-50 hover:bg-red-600/90 py-1 px-2">Login</Link>
    </div>
  )
}
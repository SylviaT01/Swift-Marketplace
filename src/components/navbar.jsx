import React, { useState } from 'react';
import { FaShopify } from "react-icons/fa6";
import logo1 from "../assets/logo1.png"
import { NavItems } from './nav-items'
import { useCart } from './cart-context'
import CartModal from './CartModal'


export const Navbar = ({ text }) => {
    const { cartItems } = useCart();
    const [showCartModal, setShowCartModal] = useState(false);

    const toggleCartModal = () => {
        setShowCartModal(!showCartModal);
    };
    
    return (
        <div className=' bg-slate-200'>
            <div className='flex items-center justify-between container p-4'>
                <img src={logo1} alt="logo" className='w-auto h-10 md:h-12 lg:h-14' />
                <NavItems />
                <button className="relative flex items-center gap-0" onClick={toggleCartModal}>
                <FaShopify className="w-7 h-7 fill-blue-500"/>
                <span className="bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">{cartItems.length}</span>
                </button>
            </div>
            {showCartModal && <CartModal cartItems={cartItems} onClose={toggleCartModal} />}
        </div> 
    )
}
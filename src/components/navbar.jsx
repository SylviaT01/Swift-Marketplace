import logo from '../logo.svg'
import { NavItems } from './nav-items'


export const Navbar = ({ text }) => {
    return (
        <div className=' bg-slate-100'>
            <div className='flex items-center justify-between container p-4'>
                <img src={logo} alt="logo" className='w-24 h-full' />
                <NavItems />
                <img src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="cart-icon" className="w-10 h-10" />
            </div>


        </div> 
    )
}
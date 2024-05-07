import logo1 from "../assets/logo1.png"
import { NavItems } from './nav-items'


export const Navbar = ({ text }) => {
    return (
        <div className=' bg-slate-200'>
            <div className='flex items-center justify-between container p-4'>
                <img src={logo1} alt="logo" className='w-auto h-10 md:h-12 lg:h-14' />
                <NavItems />
                <img src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="cart-icon" className="w-10 h-10" />
            </div>


        </div> 
    )
}
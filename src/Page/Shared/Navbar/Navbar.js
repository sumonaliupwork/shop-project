import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'


const Navbar = () => {
    const menuItems = <React.Fragment>
        <li className='mx-2'><Link to={'/'}>Shop</Link></li>
        <li className='mx-2'><Link to={'/Order'}>Order</Link></li>
        <li className='mx-2'><Link to={'/orderReview'}>Order Review</Link></li>
        <li className='mx-2'><Link to={'/inventory'}>Management Inventory</Link></li>
        <li className='mx-2'><Link to={'/login '}>Login</Link></li>
    </React.Fragment>
    return (
        <div class="navbar bg-base-300 px-12">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} class="btn btn-ghost normal-case text-xl"><img src={logo} alt="" className='w-32' /></Link>
            </div>
            <div class="navbar-center hidden lg:flex ">
                <ul class="menu menu-horizontal px-1 text-lg">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
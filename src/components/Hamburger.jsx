import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
// import logo from '/joly-logo1.gif';
import LanguageToggle from './LanguageToggle';

const HamburgerMenu = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            {/* <a href="">
                <img className="w-32 h-auto mx-8 mt-8 md:hidden" src={logo} alt="" />
            </a> */}
            <div className={`block lg:hidden top-8 right-8 ${click ? 'open' : ''}`}>
                <label 
                    htmlFor="navi-toggle" 
                    className={`flex items-center justify-center bg-yellow-400 rounded-full h-12 w-12 cursor-pointer z-50 shadow-lg ${click ? 'bg-opacity-80' : ''}`}
                    onClick={handleClick}
                >
                    <span className={`icon block bg-black w-12 h-1 ${click ? 'transform translate-y-2' : ''}`}>&nbsp;</span>
                </label>
                <div className={`fixed top-10 right-10 bg-gradient-radial from-black to-gray-300 h-24 w-24 rounded-full z-30 ${click ? 'scale-80' : ''}`}>&nbsp;</div>

                <nav className={`fixed top-0 right-0 w-full h-screen bg-white z-20 ${click ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col items-end justify-center h-full list-none text-center">
                        <li>
                            <a href="/" className="text-3xl font-light text-yellow-400 p-4 hover:text-green-800 hover:translate-x-4 transition-transform" onClick={handleClick}>Home</a>
                        </li>
                        <li>
                            <a href="/" className="text-3xl font-light text-yellow-400 p-4 hover:text-green-800 hover:translate-x-4 transition-transform" onClick={handleClick}>Beverages</a>
                        </li>
                        <li>
                            <a href="/" className="text-3xl font-light text-yellow-400 p-4 hover:text-green-800 hover:translate-x-4 transition-transform" onClick={handleClick}>Food</a>
                        </li>
                        <li>
                            <a href="/" className="text-3xl font-light text-yellow-400 p-4 hover:text-green-800 hover:translate-x-4 transition-transform" onClick={handleClick}>Household</a>
                        </li>
                        <li className='mt-4'>
														<a href="#contactform" className='bg-orange-600 text-white p-2 m-4'>Get a quote</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default HamburgerMenu;

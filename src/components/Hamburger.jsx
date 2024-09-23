import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import FontAwesome icons
import LanguageToggle from './LanguageToggle';

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const handleToggle = () => {
        setMenuOpen(!menuOpen);
        // Disable body scroll when the menu is open
        if (!menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <>
            {/* Hamburger Icon */}
            <div className="block lg:hidden fixed top-8 right-8 z-50">
                <button
                    className="flex items-center justify-center bg-yellow-400 rounded-full h-12 w-12 cursor-pointer shadow-lg"
                    onClick={handleToggle}
                >
                    {menuOpen ? (
                        <FaTimes className="text-black text-2xl" />
                    ) : (
                        <FaBars className="text-black text-2xl" />
                    )}
                </button>
            </div>

            {/* Navigation Menu */}
            <nav
                className={`fixed top-0 right-0 w-full h-screen bg-white z-40 transition-transform transform ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <ul className="text-3xl flex flex-col items-end justify-center h-full list-none text-center space-y-8 pr-8">
                    <li>
                        <a
                            href="/"
                            className="font-light text-yellow-400 hover:text-green-800 transition-transform"
                            onClick={handleToggle}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/beverages"
                            className="font-light text-yellow-400 hover:text-green-800 transition-transform"
                            onClick={handleToggle}
                        >
                            Beverages
                        </a>
                    </li>
                    <li>
                        <a
                            href="/food"
                            className="font-light text-yellow-400 hover:text-green-800 transition-transform"
                            onClick={handleToggle}
                        >
                            Food
                        </a>
                    </li>
                    <li>
                        <a
                            href="/household"
                            className="font-light text-yellow-400 hover:text-green-800 transition-transform"
                            onClick={handleToggle}
                        >
                            Household
                        </a>
                    </li>
                    <li className="mt-4">
                        <a
                            href="#contactform"
                            className="text-[16px] bg-orange-600 text-white p-2 m-4"
                        >
                            Get a quote
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default HamburgerMenu;

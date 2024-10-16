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
            <div className="block md:hidden fixed top-14 right-8 z-50">
                <button
                    className="flex items-center justify-center h-12 w-12 cursor-pointer"
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
                className={`fixed top-0 right-0 w-full h-screen bg-white z-40 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <ul className="text-3xl flex flex-col items-end justify-center h-full list-none text-center space-y-6 pr-8">
                    <li>
                        <a
                            href="/"
                            className="font-semibold transition-transform"
                            onClick={handleToggle}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/Beverages"
                            className="font-semibold transition-transform"
                            onClick={handleToggle}
                        >
                            Beverages
                        </a>
                    </li>
                    <li>
                        <a
                            href="/Snacks"
                            className="font-semibold transition-transform"
                            onClick={handleToggle}
                        >
                            Food
                        </a>
                    </li>
                    <li>
                        <a
                            href="/Household"
                            className="font-semibold transition-transform"
                            onClick={handleToggle}
                        >
                            Household
                        </a>
                    </li>
                    <li>
                        <a
                            href="/Contact"
                            className="font-semibold transition-transform"
                            onClick={handleToggle}
                        >
                            Contact & FAQ
                        </a>
                    </li>
                    <li className="mt-4">
                        <a className='bg-[#FF6D00] px-6 py-3 text-white text-xl' href="/Getquote">Get a quote</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default HamburgerMenu;

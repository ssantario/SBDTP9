import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 lg:px-20 shadow-lg bg-white z-50">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <p className='text-xl font-bold'>Rivi</p>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center space-x-12 text-lg">
                <a href="#" className="border-b-2 border-white hover:text-blue-600 ease-in-out duration-300 hover:border-b-2 hover:border-blue-600">Pribadi</a>
                <a href="#" className="border-b-2 border-white hover:text-blue-600 ease-in-out duration-300 hover:border-b-2 hover:border-blue-600">Bisnis</a>
                <a href="#" className="border-b-2 border-white hover:text-blue-600 ease-in-out duration-300 hover:border-b-2 hover:border-blue-600">Mitra</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-blue-600 focus:outline-none hover:transform hover:scale-110 transition-transform duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
                    <a href="#" className="text-lg font-bold hover:text-blue-600">Profile</a>
                    <a href="#" className="text-lg font-bold hover:text-blue-600">Home</a>
                    <a href="#" className="text-lg font-bold hover:text-blue-600">Cont</a>
                </nav>
            )}

            {/* Action Buttons */}
            <div className="hidden md:flex space-x-4">
                <a
                    href="#"
                    className="border border-blue-600 py-2 px-4 rounded-full text-blue-600 hover:bg-blue-100 ease-in-out duration-300 transform hover:scale-105"
                >
                    Daftar
                </a>
                <a
                    href="#"
                    className="text-white py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-700 ease-in-out duration-300 transform hover:scale-105"
                >
                    Login
                </a>
            </div>
        </header>
    );
};

export default Navbar;
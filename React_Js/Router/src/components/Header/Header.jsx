import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="sticky z-50 top-0 relative p-2 bg-white rounded-lg border-4 border-transparent 
            before:pointer-events-none before:absolute before:inset-0 before:border-4 
            before:border-gradient-to-r before:from-customSage before:via-customBeige 
            before:to-customOlive before:rounded-lg before:animate-borderGlow">
            
            <nav className="bg-customBlue border-customOlive px-4 lg:px-6 py-2.5 rounded-md">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://img.freepik.com/free-vector/letter-k-logo-with-abstract-shapes_1017-8744.jpg?t=st=1739889722~exp=1739893322~hmac=29d27cbabe1ea1298d6eec43324818334d9e9615abc9c301de8ba11dc67980ae&w=740"
                            className="mr-3 h-10"
                            alt="Logo"
                        />
                    </Link>

                    {/* Buttons: Log in / Get Started */}
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 font-medium 
                            rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 
                            font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/" className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/github" className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                }>
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

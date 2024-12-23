import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";


export function Header() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 px-4 py-3 flex justify-between items-center">
            <div className='object-scale-down'>
            <img src={logo} alt="Logo" className='object-scale-down' />
            </div>



            <ul className="flex space-x-4">
            
                <li>
                    <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition">
                        Treats
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-xl text-gray-800 hover:text-gray-600 transition">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="text-xl text-gray-800 hover:text-gray-600 transition">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

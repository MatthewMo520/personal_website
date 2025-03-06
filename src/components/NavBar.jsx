import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <nav className="bg-green-800 p-4 fixed w-full top-0 left-0 h-16 z-20">
            <ul className="flex justify-around">
                <li>
                    <Link to="home" smooth={true} duration={500} className="text-white hover:text-green-400 cursor-pointer">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about-me" smooth={true} duration={500} className="text-white hover:text-green-400 cursor-pointer">
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="market" smooth={true} duration={500} className="text-white hover:text-green-400 cursor-pointer">
                        Market
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" smooth={true} duration={500} className="text-white hover:text-green-400 cursor-pointer">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="news" smooth={true} duration={500} className="text-white hover:text-green-400 cursor-pointer">
                        News
                    </Link>
                </li>
                <li>
                    <Link to="contact-me" smooth={true} duration={500} className="text-white hover:text-green-400 cursor-pointer">
                        Contact Me
                    </Link>
                </li>
                <li>
                    <Link to="finance-calculator" smooth={true} duration={500} className="text-white hover:text-green-400 cursor-pointer">
                        Finance Calculator
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

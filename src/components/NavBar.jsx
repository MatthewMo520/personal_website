import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

function Navbar() {
    const navigate = useNavigate();

    const handleNavLinkClick = (to) => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById(to);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <nav className="bg-green-800 p-4 fixed w-full top-0 left-0 h-16 z-20">
            <ul className="flex justify-around">
                <li>
                    <NavLink to="/" className="text-white hover:text-green-400 cursor-pointer">
                        Home
                    </NavLink>
                </li>
                <li>
                    <span onClick={() => handleNavLinkClick('about-me')} className="text-white hover:text-green-400 cursor-pointer">
                        About Me
                    </span>
                </li>
                <li>
                    <span onClick={() => handleNavLinkClick('market')} className="text-white hover:text-green-400 cursor-pointer">
                        Market
                    </span>
                </li>
                <li>
                    <span onClick={() => handleNavLinkClick('portfolio')} className="text-white hover:text-green-400 cursor-pointer">
                        Portfolio
                    </span>
                </li>
                <li>
                    <span onClick={() => handleNavLinkClick('news')} className="text-white hover:text-green-400 cursor-pointer">
                        News
                    </span>
                </li>
                <li>
                    <span onClick={() => handleNavLinkClick('contact-me')} className="text-white hover:text-green-400 cursor-pointer">
                        Contact Me
                    </span>
                </li>
                <li>
                    <NavLink to="/finance-calculator" className="text-white hover:text-green-400 cursor-pointer">
                        Finance Calculator
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

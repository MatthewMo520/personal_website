import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleNavLinkClick = (to) => {
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById(to);
            if (element) {
                const yOffset = -80; // Adjust this value based on your navbar height
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 fixed w-full top-0 left-0 h-16 z-20 shadow-lg">
            <ul className="flex justify-around">
                <li>
                    <NavLink to="/" className="text-white hover:text-blue-300 cursor-pointer">
                        Home
                    </NavLink>
                </li>
                <li>
                    <span onClick={() => handleNavLinkClick('about-me')} className="text-white hover:text-blue-300 cursor-pointer">
                        About Me
                    </span>
                </li>
                <li>
                    <span onClick={() => handleNavLinkClick('market')} className="text-white hover:text-blue-300 cursor-pointer">
                        Market
                    </span>
                </li>
                <li>
                    <span onClick={() => handleNavLinkClick('portfolio')} className="text-white hover:text-blue-300 cursor-pointer">
                        Portfolio
                    </span>
                </li>
                <li>
                    <span onClick={() => handleNavLinkClick('news')} className="text-white hover:text-blue-300 cursor-pointer">
                        News
                    </span>
                </li>
                <li>
                    <span onClick={() => handleNavLinkClick('contact-me')} className="text-white hover:text-blue-300 cursor-pointer">
                        Contact Me
                    </span>
                </li>
                <li>
                    <NavLink to="/finance-calculator" className="text-white hover:text-blue-300 cursor-pointer">
                        Finance Calculator
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

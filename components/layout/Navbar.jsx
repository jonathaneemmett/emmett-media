import React from 'react';
import Link from 'next/link';
import {FaBars} from "react-icons/fa";

// Styles
import navStyles from '../../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navStyles.navbar}>
            <div className={navStyles.logo}><Link href="/">Emmett Media</Link></div>
            <ul className={navStyles.navLinks}>
                <input type="checkbox" name="checkboxToggle" id="checkboxToggle"/>
                <label htmlFor="checkboxToggle" className={navStyles.hamburger}><FaBars /></label>
                <div className={navStyles.menu}>
                    <li><Link href="/about">About</Link></li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
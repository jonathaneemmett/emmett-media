import React from 'react';
import Link from 'next/link';

// Styles
import footerStyles from '../../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            {new Date().getFullYear()} &copy;&nbsp; <Link href="/">Emmett Media dot com</Link>
        </div>
    );
};

export default Footer;
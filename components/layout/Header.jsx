import React from 'react';

// Styles
import headerStyles from '../../styles/Header.module.css';
import Head from "next/head";

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <Head>
                <title>Emmett Media</title>
                <meta name="description" content="development, full stack, mern stack" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
};

export default Header;
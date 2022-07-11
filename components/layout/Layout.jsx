import React from 'react';

// Components
import Meta from "./Meta";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";


// Styles
import layoutStyles from '../../styles/Layout.module.css';


const Layout = ({ children }) => {
    return (
        <>
            <Meta />

            <div className={layoutStyles.container}>
                <Navbar />
                <main className={layoutStyles.main}>
                    <Header />
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
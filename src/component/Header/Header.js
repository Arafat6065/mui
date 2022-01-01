import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Menubar></Menubar>


            <h1 className='header-title'>Team Dhaka</h1>
        </div>
    );
};

export default Header;
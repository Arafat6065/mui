import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    return (
        <div className='container'>
            <div className="menubar">
                <ul className='menu-iteam'>
                    <Link className='menu-link' to='/home'><li>Home</li></Link>
                    <Link className='menu-link' to='/contact'><li>Contact-Us</li></Link>
                    <Link className='menu-link' to='/players'><li>Players</li></Link>
                    <Link className='menu-link' to='/about'><li>Manegers</li></Link>
                </ul>
            </div>

        </div>
    );
};

export default Menubar;
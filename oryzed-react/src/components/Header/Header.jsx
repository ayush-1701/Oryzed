import React from 'react';
import { Link } from 'react-router-dom';
import className from './Header.module.css';
import logo from '../../assets/oryzed_logo.png';

// import './Header.module.css';

const Header = () => {
    return (
        <header className={className.header}>
            <div className={className.logo}>
                <img src={logo} style={{width:"140px", height:"50px", objectFit:"cover", objectPosition:"center"}} alt="Oryzed Logo" />
                    {/* Oryzed */}
            </div>
            <nav className={className.nav}>
            <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
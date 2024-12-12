import React, { useState } from 'react';
import './Navbar.scss'; // Ensure you have the correct path to your CSS file
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="left">
                <Link to='/' className='logo'>
                    <img src="./logo.png" alt="Logo" />
                    <span>FindMySpace</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/agents">Agents</Link>
            </div>
            <div className="right">
                <Link to="/signin">Sign In</Link>
                <Link to="/signup" className='register'>Sign Up</Link>
                <div className="menuIcon">
                    <img src="./menu.png" alt="Menu" onClick={() => setOpen(prev => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/agents">Agents</Link>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
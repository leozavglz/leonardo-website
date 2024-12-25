import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>Leonardo Zavala</h1>
                <button 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" onClick={toggleMenu}>Home</a>
                <a href="#skills" onClick={toggleMenu}>Skills</a>
                <a href="#projects" onClick={toggleMenu}>Projects</a>
                <a href="#contact" onClick={toggleMenu}>Contact me</a>
            </div>

            <div className="navbar-right">
                {/* Puedes agregar aquí iconos o elementos adicionales si lo deseas */}
            </div>
        </nav>
    );
};

export default Navbar;
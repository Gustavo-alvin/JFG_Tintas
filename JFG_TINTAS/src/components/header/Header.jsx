import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
    const [isShrunk, setIsShrunk] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsShrunk(true);
        } else {
            setIsShrunk(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Função para alternar o menu de navegação
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isShrunk ? 'shrink' : ''}`}>
            <nav className='nav-bar'>
                <div className='logo'>
                    <h1>JFG TINTAS</h1>
                </div>
                {/* Ícone de hambúrguer com a classe para o "X" */}
                <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                {/* Menu de navegação */}
                <div className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li className='nav-item'><a className='nav-link' href="#home">Home</a></li>
                        <li className='nav-item'><a className='nav-link' href="#about-us">Sobre</a></li>
                        <li className='nav-item'><a className='nav-link' href="#products">Produtos</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;

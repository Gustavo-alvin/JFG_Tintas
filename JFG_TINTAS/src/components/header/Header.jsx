import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
        <nav className='nav-bar'>
            <div className='logo'>
                <h1>JFG TINTAS</h1>
            </div>
            <div className='nav-list'>
                <ul>
                    <li className='nav-item'><a className='nav-link' href="#home">Home</a></li>
                    <li className='nav-item'><a className='nav-link' href="#about-us">Sobre</a></li>
                    <li className='nav-item'><a className='nav-link' href="#products">Produtos</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header
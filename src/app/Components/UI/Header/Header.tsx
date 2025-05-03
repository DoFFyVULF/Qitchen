'use client'
import { useState } from 'react';
import style from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <button 
          className={`${style.burgerButton} ${isMenuOpen ? style.active : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <a href='/'>
          <img src="/Header/Logo.svg" alt="Logo" />
        </a>
        
        <ul className={style.desktopMenu}>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/reservation">Book a table</a></li>
        </ul>
        
        <div className={`${style.mobileMenu} ${isMenuOpen ? style.active : ''}`}>
          <ul>
            <li><a href="/menu" onClick={toggleMenu}>Menu</a></li>
            <li><a href="/reservation" onClick={toggleMenu}>Reservation</a></li>
            <li><a href="/about" onClick={toggleMenu}>About</a></li>
            <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
            <li><a href="/book" onClick={toggleMenu}>Blog</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
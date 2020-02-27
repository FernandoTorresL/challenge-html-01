import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="../../resources/imgs/logo.png"
          alt="Deck Logo"
        />
      </div>
      <menu className="menu">
        <li className="menu__item">
          <a href="/">Technology</a>
        </li>
        <li className="menu__item">
          <a href="/">Ideas</a>
        </li>
        <li className="menu__item">
          <a href="/">Leadership</a>
        </li>
        <li className="menu__item">
          <a href="/">Video</a>
        </li>
        <li className="menu__item">
          <a href="/">News</a>
        </li>
        <li className="menu__item">
          <a href="/">Finance</a>
        </li>
        <li className="menu__item">
          <a href="/">Entertainment</a>
        </li>
      </menu>
      <div className="hamburger-container">
        <a className="hamburger__icon" href="/">
          &#x2630;
        </a>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__logo">
        <img
          className="footer__logo-img"
          src="../../resources/imgs/logo2.png"
          alt="Deck Logo"
        />
        <p className="footer__logo-text">&copy; 2018 Deck</p>
        <p className="footer__logo-text">Component based UI Kit</p>
      </section>
      <section className="footer__options">
        <ul className="footer__options-list">
          <li className="footer__options-item">
            <a href="/">Technology</a>
          </li>
          <li className="footer__options-item">
            <a href="/">Ideas</a>
          </li>
          <li className="footer__options-item">
            <a href="/">Leadership</a>
          </li>
          <li className="footer__options-item">
            <a href="/">Video</a>
          </li>
          <li className="footer__options-item">
            <a href="/">News</a>
          </li>
          <li className="footer__options-item">
            <a href="/">Finance</a>
          </li>
          <li className="footer__options-item">
            <a href="/">Entertainment</a>
          </li>
        </ul>
      </section>
      <section className="footer__contact">
        <div className="footer__contact-social">
          <p className="footer__contact-social-text">Follow us:</p>
          <img
            src="../../resources/imgs/instagram.png"
            alt="Instagram"
            className="footer__contact-social-icon"
          />
          <img
            src="../../resources/imgs/pinterest.png"
            alt="Pinterest"
            className="footer__contact-social-icon"
          />
          <img
            src="../../resources/imgs/twitter.png"
            alt="Twitter"
            className="footer__contact-social-icon"
          />
          <img
            src="../../resources/imgs/facebook.png"
            alt="Facebook"
            className="footer__contact-social-icon"
          />
        </div>
        <div className="footer__contact-subscribe">
          <input
            className="footer__contact-subscribe-input"
            type="text"
            placeholder="Your E-mail"
          />
          <input
            className="footer__contact-subscribe-button"
            type="button"
            value="Subscribe"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;

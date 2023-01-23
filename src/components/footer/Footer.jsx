import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Edu</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/eduandres648/" className="footer__social-link" target="_blank" rel="noreferrer" >
      <i className="uil uil-instagram-alt"></i>
      </a>
      <a href="https://www.facebook.com/eduardoandres.alvarezgamba" className="footer__social-link" target="_blank" rel="noreferrer" >
      <i className="uil uil-facebook-f"></i>      
      </a>
      <a href="https://github.com/Edu1111" className="footer__social-link" target="_blank" rel="noreferrer" >
      <i className="uil uil-github-alt"></i>
      </a>
        </div>
        <span className="footer__copy">
          Full StackDeveloper
        </span>
      </div>
    </footer>
  )
}

export default Footer
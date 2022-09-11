import React from 'react';
import linkedInIcon from '../../img/sprite/linkedIn-footer.svg';
import facebookIcon from '../../img/sprite/facebook-footer.svg';
import instagramIcon from '../../img/sprite/footer-instagram.svg';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__up-row">
        <div className="footer__description">
          <div className="headers__logo">logo</div>
          <p className="footer__description-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <ul className="footer__options">
          <li className="footer__options-item">About us</li>
          <li className="footer__options-item">Portfolio</li>
          <li className="footer__options-item">Work stages</li>
        </ul>
        <div className="footer__location">
          <p className="footer__location-loc">
            <span>Ukraine</span>, city Lviv, street Zelena 230
          </p>
          <p>(097)857-70-47</p>
        </div>
        <div className="footer__links">
          <a href="/" className="footer__links-item">
            <img src={instagramIcon} alt="linkedIn" />
          </a>
          <a href="/" className="footer__links-item">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a href="/" className="footer__links-item">
            <img src={linkedInIcon} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="footer__down-row">
        <div className="footer__copyright">
          2020 © Come Back Agency. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

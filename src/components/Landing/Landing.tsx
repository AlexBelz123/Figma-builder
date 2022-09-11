import React from 'react';
import linkedInIcon from '../../img/sprite/linkedIn.svg';
import facebookIcon from '../../img/sprite/facebook.svg';
import instagramIcon from '../../img/sprite/instagram.svg';
// big icons
import calculatorIcon from '../../img/sprite/calculator.svg';
import moneyBagIcon from '../../img/sprite/money-bag.svg';
import businessReportIcon from '../../img/sprite/business-report.svg';
import alarmIcon from '../../img/sprite/alarm.svg';
import guarenteeIcon from '../../img/sprite/guarentee.svg';
import './style.scss';

const Landing = () => {
  return (
    <div className="landing">
      {/* <!-- Navbar --> */}
      <div className="navbar">
        <div className="navbar__phones">
          <span className="navbar__phones-item"> +38 (067) 467-37-67 </span>
          <span className="navbar__phones-item"> +38 (067) 467-37-67 </span>
        </div>
        <div className="navbar__links">
          <a href="/" className="navbar__links-item">
            <img src={linkedInIcon} alt="linkedIn" />
          </a>
          <a href="/" className="navbar__links-item">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a href="/" className="navbar__links-item">
            <img src={instagramIcon} alt="instagram" />
          </a>
        </div>
      </div>
      {/* <!--  Headers--> */}
      <div className="headers">
        <div className="headers__logo">logo</div>
        <ul className="headers__sub">
          <a href="/" className="headers__sub-item">
            {' '}
            About us{' '}
          </a>
          <a href="/" className="headers__sub-item">
            {' '}
            Reviews{' '}
          </a>
          <a href="/" className="headers__sub-item">
            {' '}
            Prices{' '}
          </a>
          <a href="/" className="headers__sub-item headers__sub-item--primary">
            Our works
          </a>
          <a href="/" className="headers__sub-item">
            {' '}
            Contacts{' '}
          </a>
        </ul>
        <a href="#contact-form" className="button-primary">
          {' '}
          Order a call{' '}
        </a>
      </div>
      {/* <!-- Jumbotron --> */}
      <div className="jumbotron">
        <h1 className="heading-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <p className="jumbotron__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          condimentum eros arcu, at aliquet tortor vestibulum ut. Quisque sed
          libero nec nulla pulvinar pharetra. Aliquam porttitor justo lorem, at
          rhoncus nulla condimentum vitae. Cras vitae aliquet quam.
        </p>
        <a href="/" className="button-primary button-primary--1">
          Make request
        </a>
      </div>
      {/* <!-- Landing down row of options --> */}
      <div className="down-row">
        <div className="down-row__card">
          <img className="down-row__icon" src={calculatorIcon} alt="" />
          <span>Fixed estimate</span>
        </div>
        <div className="down-row__card">
          <img className="down-row__icon" src={moneyBagIcon} alt="" />
          <span>Weekly workflow reporting</span>
        </div>
        <div className="down-row__card">
          <img className="down-row__icon" src={businessReportIcon} alt="" />
          <span>We work without advances</span>
        </div>
        <div className="down-row__card">
          <img className="down-row__icon" src={alarmIcon} alt="" />
          <span>Work delivery in the specified terms</span>
        </div>
        <div className="down-row__card">
          <img className="down-row__icon" src={guarenteeIcon} alt="" />
          <span>Warranty on works</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import React from 'react';
import Landing from './components/Landing/Landing';
import AboutUs from './components/AboutUs/AboutUs';
import Stages from './components/Stages/Stages';
import Portfolio from './components/Portfolio/Portfolio';
import Reviews from './components/Reviews/Reviews';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';

function App() {
  return (
    <div className="container">
      <Landing />
      <AboutUs />
      <Stages />
      <Portfolio />
      <Reviews />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

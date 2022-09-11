import React from 'react';
import twoBedroomImage from '../../img/two-bedroom.png';
import './style.scss';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__image">
        <div className="about-us__experience">
          <h1 className="heading-gigant">10+</h1>
          <h3 className="heading-3">years of experience</h3>
        </div>
      </div>
      <div className="about-us__info">
        {/* <!-- Background image --> */}
        <div className="bg-image">
          <img
            className="bg-image__content"
            src={twoBedroomImage}
            alt="two-bedroom"
          />
        </div>
        <div className="information">
          <h4 className="heading-4">about us</h4>
          <h2 className="heading-2">Who we are?</h2>
          <div className="information__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            condimentum eros arcu, at aliquet tortor vestibulum ut. Quisque sed
            libero nec nulla pulvinar pharetra. Aliquam porttitor justo lorem,
            at rhoncus nulla condimentum vitae. Cras vitae aliquet quam. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus id quam nulla. Proin consequat mauris
            augue, id suscipit risus mattis non. Sed a vulputate diam. <br />
            <br />
            Mauris eget urna quis nisl lacinia convallis.Mauris ut urna sed sem
            egestas hendrerit at vel quam. Vestibulummaximus velit dui.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

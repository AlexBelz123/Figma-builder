import React from 'react';
import ImageSlide from './ImageSlide';
import thowBedRoomImg from '../../img/two-bedroom.png';
import item1Img from '../../img/slider-item-1.jpg';
import item2Img from '../../img/slider-item-2.jpg';
import item3Img from '../../img/slider-item-3.jpg';
import sliderMainImg from '../../img/slider-main.jpg';
import arrowLeftIcon from '../../img/sprite/arrow-left.png';
import arrowRightIcon from '../../img/sprite/arrow-right.png';
import './style.scss';

const IMAGES = [sliderMainImg, item1Img, item2Img, item3Img];

const Portfolio = () => {
  const [activeImage, setActiveImage] = React.useState(IMAGES[0]);
  const activeIndex = IMAGES.indexOf(activeImage);

  const handleClick = React.useCallback((i: number) => {
    setActiveImage(IMAGES[i]);
  }, []);

  const handlePrevImage = (i: number) => {
    const lastItem = IMAGES.length - 1;
    if (i === 0) setActiveImage(IMAGES[lastItem]);
    else setActiveImage(IMAGES[i - 1]);
  };

  const handleNextImage = (i: number) => {
    const lastItem = IMAGES.length - 1;
    if (i === lastItem) setActiveImage(IMAGES[0]);
    else setActiveImage(IMAGES[i + 1]);
  };

  return (
    <div className="portfolio">
      <div className="portfolio__headers">
        <h4 className="heading-4">Portfolio</h4>
        <h2 className="heading-2 heading-2--black">Our achievements</h2>
      </div>
      <div className="portfolio__blocks">
        <div className="portfolio__info">
          {/* <!-- Background image --> */}
          <div className="bg-image bg-image--outer">
            <img
              className="bg-image__content"
              src={thowBedRoomImg}
              alt="two-bedroom"
            />
          </div>
          <h3 className="heading-3 portfolio__info-header">Project name</h3>
          <div className="portfolio__info-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            condimentum eros arcu, at aliquet tortor vestibulum ut. Quisque sed
            libero nec nulla pulvinar pharetra. Aliquam porttitor justo lorem,
            at rhoncus nulla condimentum vitae. Cras vitae aliquet quam. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus id quam nulla.
          </div>
          <div className="portfolio__info-items">
            <div className="portfolio__info-item">
              <span>Work time:</span> 21 days
            </div>
            <div className="portfolio__info-item">
              <span>Square:</span> 81 m<sup>2</sup>
            </div>
          </div>
        </div>
        <div className="portfolio__gallery">
          <ul className="portfolio__images">
            {IMAGES.map((image, idx) => {
              return (
                <ImageSlide
                  key={idx + Math.random()}
                  i={idx}
                  src={image}
                  isActive={idx === activeIndex}
                  handleClick={handleClick}
                />
              );
            })}
          </ul>
          <div className="portfolio__slider">
            <ul className="slider">
              <li id="lastClone" className="slider__content">
                <img src={activeImage} alt="slider" className="slider__image" />
              </li>
            </ul>
            <div className="slider__navigation">
              <ul className="slider__bullets">
                {IMAGES.map((_, idx) => (
                  <li
                    key={idx + Math.random()}
                    className={`slider__bullets-item ${
                      idx === activeIndex ? 'slider__bullets-item--main' : ''
                    }`}
                    onClick={() => handleClick(idx)}
                  >
                    &nbsp;
                  </li>
                ))}
              </ul>
              <div className="slider__options">
                <div
                  className="slider__arrow"
                  onClick={() => handlePrevImage(activeIndex)}
                >
                  <img className="slide__icon" src={arrowLeftIcon} alt="left" />
                </div>
                <div
                  className="slider__arrow"
                  onClick={() => handleNextImage(activeIndex)}
                >
                  <img
                    className="slide__icon"
                    src={arrowRightIcon}
                    alt="left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

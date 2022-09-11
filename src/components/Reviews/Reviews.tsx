import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import arrowLeftIcon from '../../img/sprite/arrow-left.png';
import arrowRightIcon from '../../img/sprite/arrow-right.png';
import SlideContent from './SlideContent';
import './style.scss';
// fake data
import fakeData from './fakeData';

function SampleNextArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <img
      className={className}
      src={arrowRightIcon}
      style={{ height: 'auto' }}
      alt="right-arrow"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return (
    <img
      className={className}
      src={arrowLeftIcon}
      style={{ height: 'auto' }}
      alt="right-arrow"
      onClick={onClick}
    />
  );
}

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  dots: true,
  arrows: true,
  centerPadding: '0px',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews__review">
        <div className="reviews__headers">
          <h4 className="heading-4">Reviews</h4>
          <h2 className="heading-2">How customers talk about us?</h2>
        </div>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {fakeData.map((item) => (
              <SlideContent
                key={item.description}
                description={item.description}
                author={item.author}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

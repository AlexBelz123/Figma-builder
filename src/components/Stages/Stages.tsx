import React from 'react';
import './style.scss';

const Stages = () => {
  return (
    <div className="stages">
      <h4 className="heading-4">Work stages</h4>
      <h2 className="heading-2">How we work?</h2>
      <div className="chain">
        {/* <!-- Card 1 --> */}
        <div className="chain__card">
          <div className="chain__icon chain__icon--first">
            <div className="chain__icon-item chain__icon-item--1">1</div>
          </div>
          <p className="chain__paragraph">
            Departure of the master to the object for measurements
          </p>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="chain__card">
          <div className="chain__icon">
            <div className="chain__icon-item chain__icon-item--2">2</div>
          </div>
          <p className="chain__paragraph">
            Estimation according to previous agreements
          </p>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="chain__card">
          <div className="chain__icon">
            <div className="chain__icon-item chain__icon-item--3">3</div>
          </div>
          <p className="chain__paragraph">Signing the contract</p>
        </div>
        {/* <!-- Card 4 --> */}
        <div className="chain__card">
          <div className="chain__icon">
            <div className="chain__icon-item chain__icon-item--4">4</div>
          </div>
          <p className="chain__paragraph">Purchase of material</p>
        </div>
        {/* <!-- Card 5 --> */}
        <div className="chain__card">
          <div className="chain__icon">
            <div className="chain__icon-item chain__icon-item--5">5</div>
          </div>
          <p className="chain__paragraph">Completion of work in due time</p>
        </div>
        {/* <!-- Card 6 --> */}
        <div className="chain__card">
          <div className="chain__icon chain__icon--last">
            <div className="chain__icon-item chain__icon-item--6">6</div>
          </div>
          <p className="chain__paragraph">Happy customers</p>
        </div>
      </div>
    </div>
  );
};

export default Stages;

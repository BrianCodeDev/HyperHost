import React from 'react';
import './App.css';
import Header from './components/header';
import icon from '../src/images/icon.svg';
import reviews from '../src/images/fake-reviews.svg';

function App() {
  return (
    <div>
       <Header />
       <div className='header-title'>
        <div className='header-display container'>
          <div className="header-content-one">
            <h2>Everything You Need to get your idea spinning</h2>
            <h5>Up to <span className='sale'>75% </span>off Hosting + Website Builder</h5>
          </div>
          <div className="header-content-two">
          <img src={icon} alt="Logo" />
          </div>
        </div>
       </div>
       <div className="main container">
        <h2>Check out our top most reviews since 2021</h2>
        <img src={reviews} alt="Logo" width={"100%"}/>
        <div className="pricing">
          <h2>Pick Your Perfect Plan</h2>
          <div className="pricing-display">
            <div className="pricing-one pricing-card">
            <div className="pricing-card-title-one">Premium</div>
            </div>
            <div className="pricing-two pricing-card">
              <div className="pricing-card-title-two">MOST POPULAR</div>
            </div>
            <div className="pricing-three pricing-card">
            <div className="pricing-card-title-three">Premium</div>
            </div>
          </div>
        </div>
       </div>
    </div>
    

  );
}

export default App;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer-cta" data-track-location="Lower Pricing Tiers">
      <div className="footer-cta__content home-container">
        <h2 className="footer-cta__heading home-type-heading">
          Find your next designer today
        </h2>
        <div className="footer-cta__copy">
          The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated
          portfolios to find your perfect creative match.
        </div>
        <div className="footer-cta__actions">
          <a
            className="btn2 btn2--large"
            data-track-cta="Get started"
          >
            Get started now
          </a>
          <a
           
            className="btn2 btn2--secondary-alt btn2--large"
            data-track-cta="Learn about hiring"
          >
            Learn about hiring
          </a>
        </div>
        <div className="footer-cta__copy">
          Are you a designer?
          <a data-track-cta="Join Dribbble" >
            Join Dribbble
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from 'react';
/*import Countdown from 'react-countdown';*/
import './styles/DeliveryPage.css';

function DeliveryPage() {
  return (
    <div className="delivery-page">
      <div className="delivery-container">
        <h1 className="heading">Delivery Service</h1>
        <p className="message">
          Unfortunately, our delivery service is currently unavailable. But don’t worry, we’re working on it and it will be available soon! Stay tuned for updates.
        </p>
        <div className="info-container">
          <div className="info-box">
            <h3 className="info-heading">What’s Coming?</h3>
            <ul className="info-list">
              <li>Fast and reliable delivery</li>
              <li>Nationwide coverage</li>
              <li>Track your order easily</li>
              <li>Affordable shipping rates</li>
            </ul>
          </div>
          <div className="info-box">
            <h3 className="info-heading">We’re Working Hard!</h3>
            <p>
              Our team is dedicated to launching the delivery service as quickly as possible. Thanks for your patience.
            </p>
          </div>
        </div>
        <div className="cta-container">
          <button className="cta-button">Stay Updated</button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryPage;


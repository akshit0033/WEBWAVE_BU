// NewsLetter.js

import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email !== '') {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setEmail('');
      }, 3000); 
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div className="input-container">
        <input
          type="email"
          placeholder='Your email id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {showPopup && (
        <div className="popup">
          <p>Thank you for subscribing!</p>
        </div>
      )}
    </div>
  );
};

export default NewsLetter;

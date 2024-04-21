import React from 'react';
import "../Pages/CSS/thankyou.css"

export default function Thankyou() {
  return (
    <>
      <div className="thank-you-page">
      <div className="content">
        <h1 className="animated-text">Thank You!</h1>
        <p>Your payment has been successfully processed.</p>
        <div className="confetti"></div>
      </div>
    </div>
    </>
  );
}

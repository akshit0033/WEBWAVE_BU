import React from 'react';
import '../Pages/CSS/AboutUsContact.css';

const AboutUsContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="about-us-contact">
      <div className="about-us">
        <h2>About Us</h2>
        <p>
        Welcome to our platform, where digital assets find new beginnings! We specialize in facilitating the buying and selling of websites, domains, and logos, making it easy for you to embark on your next online venture or unlock the value of your existing digital properties.
        </p>
        <p>
        Our team is driven by a passion for technology and entrepreneurship, constantly innovating to provide you with a seamless experience. Whether you're a buyer or a seller, we're dedicated to helping you achieve your goals in the digital marketplace.
        </p>
        <p>
        Join us on this exciting journey, and let's create digital success together! Feel free to reach out to us with any questions or feedback – we're here to help you every step of the way.
        </p>
        <p>
        Based in India, our office is located at Bennett University, where we're immersed in an environment of innovation and learning.
        </p>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:raghavgarg.ynr@gmail.com">webwave@gmail.com</a><br />
          Phone: +1-123-456-7890
        </p>
        <p>
          If you have a website, domain, or logo to sell, or if you're interested in purchasing one of the listings on our platform, please reach out to us using the form below. We'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AboutUsContact;

import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        Welcome to our platform dedicated to buying and selling digital assets. Whether you're looking for a new website to kickstart your online venture, a memorable domain name for your brand, or a stunning logo to represent your business, we've got you covered. Our marketplace offers a diverse range of websites, domains, and logos to suit every need. Explore our collection and find the perfect digital asset for your next project.
        </p>
        <p>
        Browse through our curated selection of digital assets, each handpicked for its quality and potential. Join our community of buyers and sellers to discover the perfect match for your online presence.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

import React from "react";
import Logo from '../assets/Logo.svg'
import StarIcon from "@mui/icons-material/Star";

const Testimonial = () => {
  const myInlineStyles = {
    color: '#fe9e0d',
    fontSize: '30px',
    fontWeight: 'bold',
    // Add more styles as needed
  };
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          
"Exceptional construction review: meticulous craftsmanship, on-time delivery, exceeded expectations. Highly recommend their expertise!"
        </p>
      </div>
      <div className="testimonial-section-bottom">
      <h1 style={myInlineStyles}> Keystone Constructors</h1>
        <p>
        "Building dreams, one brick at a time, with precision and passion."
        </p>
        <div className="testimonials-stars-container">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <h2></h2>
      </div>
    </div>
  );
};

export default Testimonial;

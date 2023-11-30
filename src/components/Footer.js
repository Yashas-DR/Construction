import React from "react";
import Logo from "../assets/Logo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const myInlineStyles = {
    color: '#fe9e0d',
    fontSize: '30px',
    fontWeight: 'bold',
    // Add more styles as needed
  };
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container"><br/><br/><br/><br/>
        <h1 style={myInlineStyles}> Keystone Constructors</h1>
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com/your-twitter-profile">
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile">
            <LinkedInIcon />
          </a>
          <a href="https://www.youtube.com/">
            <YouTubeIcon />
          </a>
          <a href="https://www.facebook.com/your-facebook-page">
            <FacebookIcon />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          
          <span>yashasdrss@gmail.com</span>
          <span>keystoneconstructors.com</span>
          <span></span>
        </div>
        <div className="footer-section-columns">
          <span> Terms & Conditions</span>
          <span> Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
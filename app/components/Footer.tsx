import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="foot-head">
          <h1>WEB LOGO</h1>
        </div>
        <p>
          Some footer text about the<br />
          Agency. Just a little description to<br />
          help people understand you better.
        </p>
        <div className="social-icons">
          <div className="icon-styles">
            <FaFacebookF />
          </div>
          <div className="icon-styles">
            <FaTwitter />
          </div>
          <div className="icon-styles">
            <FaLinkedinIn />
          </div>
          <div className="icon-styles">
            <PiInstagramLogoFill />
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="foot-head">
          <h1>Quick Links</h1>
        </div>
        <ul>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <div className="foot-head">
          <h1>Address</h1>
        </div>
        <p>
          Design Agency Head Office.
          <br />
          Airport Road
          <br />
          United Arab Emirate
        </p>
      </div>

      <div className="footer-last">
        Copyright Design Agency
        <br />
        2022
      </div>
    </div>
  );
};

export default Footer;

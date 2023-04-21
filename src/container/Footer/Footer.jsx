import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h2 className="app__footer-headtext">Contact Us</h2>
        <address className="p__opensans">
          4760 Marsh Road Okemos MI 48864
        </address>
        <a href="tel: +91 517-483-2280" className="p__opensans">
          +91 517-483-2280
        </a>
        <br />
        <a href="tel: +91 517-993-6371" className="p__opensans">
          +91 517-993-6371
        </a>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.paradiselogo} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          alt="spoon"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h2 className="app__footer-headtext">Working Hours</h2>
        <span className="p__opensans">Monday-Friday:</span>
        <br />
        <span className="p__opensans">12:00 am - 10:00 pm</span>
        <br />
        <span className="p__opensans">Saturday-Sunday:</span>
        <br />
        <span className="p__opensans">12:00 am - 12:00 pm</span>
      </div>
    </div>
    <div className="footer__copyright">
      <span className="p__opensans">2021 Paradise. All Rights reserved.</span>
    </div>
  </div>
);

export default Footer;

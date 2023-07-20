import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <img src={logo} className="footer_logo_img" />
        <p>High Quality is our first priority</p>
        <p>Copyrights 2021 &copy; SarjilPatel</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/sarjil_patel29" target="_blank">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;

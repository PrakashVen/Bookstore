import React from "react";
import { Link } from "react-router-dom";
import { footerStyle } from "./style";
import logo1 from "../../assets/images/logo1.png"
const Footer = () => {
  const classes = footerStyle();
  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              <div className="footer-logo">
                <Link to="/" title="logo">
                  <img src={logo1} alt="sitelogo" />
                </Link>
              </div>
              <p className="copyright-text">
                Prakash ven
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "gatsby";
import logo from "../../static/images/logo.svg";
import facebook from "../../static/images/social-media/facebook.svg";
import linkedin from "../../static/images/social-media/linkedin.svg";
import twitter from "../../static/images/social-media/twitter.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__main">
          <div className="Footer__col_1">
            <img className="Footer__logo" alt="logo" src={logo} />
          </div>
          <div className="Footer__follow-us">
            <p>Follow us on:</p>
            <div className="Footer__social-media">
              <a href="https://www.facebook.com/inappstory/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.linkedin.com/company/inappstory">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://www.twitter.com/inappstory">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>
          <div className="Footer__col_2">
            <p className="Footer__col-heading">Resources</p>
            <div className="Footer__col-links">
              <Link to="/blog">Blog</Link>
              <Link to="/write-for-us">Write for us</Link>
              <a href="https://docs.inappstory.com/">Documentation</a>
            </div>
          </div>
          <div className="Footer__col_3">
            <p className="Footer__col-heading">About us</p>
            <div className="Footer__col-links">
              <Link to="/policy">Legal</Link>
              <Link to="/faq">Write for us</Link>
            </div>
          </div>
        </div>
        <div className="Footer__languages">
          <Link to="/" className="Footer__language" href="">
            DE
          </Link>
          <Link to="/" className="Footer__language" href="">
            FR
          </Link>
          <Link to="/" className="Footer__language" href="">
            ES
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "gatsby";
import { SVG as Logo } from "../../static/images/logo.svg";
import { SVG as Facebook } from "../../static/images/social-media/facebook.svg";
import { SVG as Linkedin } from "../../static/images/social-media/linkedin.svg";
import { SVG as Twitter } from "../../static/images/social-media/twitter.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__main">
          <div className="footer__col_1">{/* <Logo /> */}</div>
          <div className="footer__follow-us">
            <p>Follow us on:</p>
            <div className="footer__social-media">
              <a href="https://www.facebook.com/inappstory/">
                {/* <Facebook /> */}
              </a>
              <a href="https://www.linkedin.com/company/inappstory">
                {/* <Linkedin /> */}
              </a>
              <a href="https://www.twitter.com/inappstory">
                {/* <Twitter /> */}
              </a>
            </div>
          </div>
          <div className="footer__col_2">
            <p className="footer__col-heading">Resources</p>
            <div className="footer__col-links">
              <Link to="/blog">Blog</Link>
              <Link to="/write-for-us">Write for us</Link>
              <a href="https://docs.inappstory.com/">Documentation</a>
            </div>
          </div>
          <div className="footer__col_3">
            <p className="footer__col-heading">About us</p>
            <div className="footer__col-links">
              <Link to="/policy">Legal</Link>
              <Link to="/faq">Write for us</Link>
            </div>
          </div>
        </div>
        <div className="footer__languages">
          <Link to="/" className="footer__language">
            DE
          </Link>
          <Link to="/" className="footer__language">
            FR
          </Link>
          <Link to="/" className="footer__language">
            ES
          </Link>
        </div>
      </div>
    </div>
  );
}

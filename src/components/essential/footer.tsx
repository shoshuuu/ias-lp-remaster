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
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4394_43901)">
                    <path
                      d="M24.3906 12.7969C24.3906 6.375 19.1875 1.17188 12.7656 1.17188C6.34375 1.17188 1.14062 6.375 1.14062 12.7969C1.14062 18.5991 5.39172 23.4084 10.9492 24.2812V16.1573H7.99609V12.7969H10.9492V10.2356C10.9492 7.32234 12.6836 5.71312 15.34 5.71312C16.6122 5.71312 17.9425 5.94 17.9425 5.94V8.79938H16.4762C15.0325 8.79938 14.582 9.69563 14.582 10.6148V12.7969H17.8061L17.2905 16.1573H14.582V24.2812C20.1395 23.4084 24.3906 18.5991 24.3906 12.7969Z"
                      fill="#0C62F3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4394_43901">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.765625 0.796875)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/inappstory">
                <svg
                  width="23"
                  height="26"
                  viewBox="0 0 23 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4394_43904)">
                    <path
                      d="M21.1924 1.80469H2.332C1.46779 1.80469 0.765625 2.51624 0.765625 3.38972V22.204C0.765625 23.0775 1.46779 23.7891 2.332 23.7891H21.1924C22.0566 23.7891 22.7637 23.0775 22.7637 22.204V3.38972C22.7637 2.51624 22.0566 1.80469 21.1924 1.80469ZM7.41413 20.6484H4.15371V10.1568H7.41905V20.6484H7.41413ZM5.78392 8.72388C4.73804 8.72388 3.89347 7.87493 3.89347 6.83459C3.89347 5.79426 4.73804 4.94531 5.78392 4.94531C6.8249 4.94531 7.67438 5.79426 7.67438 6.83459C7.67438 7.87983 6.82981 8.72388 5.78392 8.72388ZM19.6358 20.6484H16.3754V15.5449C16.3754 14.3279 16.3508 12.7625 14.6813 12.7625C12.9824 12.7625 12.7221 14.0875 12.7221 15.4566V20.6484H9.46172V10.1568H12.5896V11.5897H12.6338C13.0708 10.7653 14.1363 9.8967 15.7223 9.8967C19.022 9.8967 19.6358 12.0706 19.6358 14.8972V20.6484Z"
                      fill="#0C62F3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4394_43904">
                      <rect
                        width="22"
                        height="25.125"
                        fill="white"
                        transform="translate(0.765625 0.234375)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.twitter.com/inappstory">
                <svg
                  width="23"
                  height="26"
                  viewBox="0 0 23 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4394_43907)">
                    <path
                      d="M20.4067 1.80469H3.12256C1.82133 1.80469 0.765625 2.85974 0.765625 4.16016V21.4336C0.765625 22.734 1.82133 23.7891 3.12256 23.7891H20.4067C21.7079 23.7891 22.7637 22.734 22.7637 21.4336V4.16016C22.7637 2.85974 21.7079 1.80469 20.4067 1.80469ZM18.0056 9.59736C18.0154 9.73477 18.0154 9.87708 18.0154 10.0145C18.0154 14.269 14.7746 19.1714 8.85285 19.1714C7.02622 19.1714 5.33218 18.6414 3.9082 17.7286C4.16844 17.7581 4.41887 17.7679 4.68402 17.7679C6.19148 17.7679 7.57617 17.2575 8.68099 16.3939C7.26683 16.3644 6.07854 15.437 5.67099 14.1611C6.16693 14.2347 6.61376 14.2347 7.12443 14.1022C5.65135 13.8029 4.54654 12.5073 4.54654 10.9419V10.9027C4.97373 11.1431 5.47458 11.2904 5.99998 11.31C5.55826 11.0164 5.19616 10.618 4.94597 10.1505C4.69579 9.68296 4.56531 9.16082 4.56618 8.63064C4.56618 8.03196 4.72331 7.48235 5.00319 7.00635C6.58921 8.95942 8.97069 10.2353 11.6419 10.3727C11.1852 8.18899 12.8203 6.41748 14.7845 6.41748C15.7125 6.41748 16.5472 6.80515 17.1365 7.43328C17.8632 7.29587 18.5605 7.02598 19.1791 6.65793C18.9385 7.40383 18.4328 8.03196 17.765 8.42944C18.4131 8.36074 19.0417 8.17917 19.6211 7.92891C19.1841 8.57175 18.6341 9.14099 18.0056 9.59736Z"
                      fill="#0C62F3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4394_43907">
                      <rect
                        width="22"
                        height="25.125"
                        fill="white"
                        transform="translate(0.765625 0.234375)"
                      />
                    </clipPath>
                  </defs>
                </svg>
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

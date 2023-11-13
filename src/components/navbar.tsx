import React from "react";
import { SVG as Logo } from "../../static/images/logo.svg";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Logo />
      <div className="Navbar__navigation">
        <span className="Navbar__dropdown">
          <p>Solutions</p>
        </span>
        <Link className="Navbar__link" to="/sales">
          Pricing
        </Link>
        <Link className="Navbar__link" to="/success-cases">
          Successes
        </Link>
        <span className="Navbar__dropdown">
          <p>Resources</p>
        </span>
      </div>
      <div className="Navbar__right">
        <div className="Navbar__auth">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.44777 5.81519C5.43973 6.30177 5.52863 6.78509 5.70928 7.23697C5.88993 7.68885 6.15872 8.10026 6.49998 8.4472C6.84125 8.79415 7.24815 9.06969 7.69699 9.25778C8.14583 9.44587 8.62761 9.54274 9.11427 9.54274C9.60092 9.54274 10.0827 9.44587 10.5315 9.25778C10.9804 9.06969 11.3873 8.79415 11.7285 8.4472C12.0698 8.10026 12.3386 7.68885 12.5193 7.23697C12.6999 6.78509 12.7888 6.30177 12.7808 5.81519C12.7649 4.85326 12.3716 3.9361 11.6857 3.26146C10.9999 2.58682 10.0763 2.20874 9.11427 2.20874C8.1522 2.20874 7.22868 2.58682 6.5428 3.26146C5.85693 3.9361 5.46365 4.85326 5.44777 5.81519ZM11.4478 5.81519C11.4478 6.43407 11.2019 7.0276 10.7643 7.46522C10.3267 7.90284 9.73315 8.14869 9.11427 8.14869C8.49538 8.14869 7.90185 7.90284 7.46423 7.46522C7.02662 7.0276 6.78077 6.43407 6.78077 5.81519C6.78077 5.1963 7.02662 4.60277 7.46423 4.16515C7.90185 3.72754 8.49538 3.48169 9.11427 3.48169C9.73315 3.48169 10.3267 3.72754 10.7643 4.16515C11.2019 4.60277 11.4478 5.1963 11.4478 5.81519Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.4876 13.4102C13.0636 14.4472 4.97162 14.3372 3.69762 13.4102C2.42462 12.4822 6.32162 9.48022 9.09262 9.48022C11.8636 9.48022 15.9116 12.3732 14.4876 13.4102ZM9.09262 10.8142C10.0816 10.8142 11.5126 11.3642 12.5826 12.1372C12.7686 12.2712 12.9316 12.4052 13.0666 12.5292C12.2226 12.6932 10.6966 12.8232 9.04362 12.8132C7.52562 12.8042 6.08162 12.6772 5.23062 12.5332C5.37265 12.4034 5.52117 12.281 5.67562 12.1662C6.74062 11.3722 8.12662 10.8142 9.09262 10.8142Z"
              fill="black"
            />
          </svg>
          <a
            href="https://console.inappstory.com/auth/signin"
            className="Navbar__auth-login"
          >
            Log in
          </a>
        </div>

        <div className="Navbar__console">
          <Link className="Navbar__trynow button-filled" to="/sales">
            Try now
          </Link>
        </div>
      </div>
    </div>
  );
}

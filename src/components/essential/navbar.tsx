import React, { useState } from "react";
import { Link } from "gatsby";
import solutionsData from "../../static-data/nav/navSolutionLinks.json";
import resourcesData from "../../static-data/nav/navResourcesLinks.json";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Navbar() {
  const [dropdownShown, setDropdownShown] = useState(false);
  const [activeDropDown, setActiveDropdown] = useState();

  const handleDropdown = () => {
    setDropdownShown(() => {
      return !dropdownShown;
    });
  };

  //modal dropdown window components
  const DropdownModalResources = () => {
    let navBlockCounter: number = 1;
    let linksCounter: number = 1;
    return (
      <div className="dropdown__container solutions">
        {resourcesData.map((data: any) => {
          navBlockCounter++;
          return (
            <div className="nav-block" key={navBlockCounter}>
              <div className="nav-block__header">
                <b className="nav-block__title">{data.title}</b>
              </div>
              <ul className="nav-block__list">
                {data.links.map((link: any) => {
                  linksCounter++;
                  return (
                    <li>
                      <Link
                        to={link.route}
                        className="nav-block__list_item"
                        key={linksCounter}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };
  const DropdownModalSolutions = () => {
    let navBlockCounter: number = 1;
    let linksCounter: number = 1;
    return (
      <div className="dropdown__container resources">
        {solutionsData.map((data: any) => {
          navBlockCounter++;
          return (
            <div className="nav-block" key={navBlockCounter}>
              <div className="nav-block__header">
                {/* <GatsbyImage logo/> */}
                <b className="nav-block__title">{data.title}</b>
              </div>
              <ul className="nav-block__list">
                {data.links.map((link: any) => {
                  linksCounter++;
                  return (
                    <li>
                      <Link
                        to={link.route}
                        className="nav-block__list_item"
                        key={linksCounter}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <header>
      <div className="Navbar">
        <div className="Navbar__brand-name">
          <Link to="/">
            <svg
              width="202"
              height="41"
              viewBox="0 0 202 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame">
                <path
                  id="Vector"
                  d="M45.0977 30.1577H51.4025V10.3846H45.0977V30.1577Z"
                  fill="#0C62F3"
                />
                <path
                  id="Vector_2"
                  d="M54.6016 30.157H60.0254V22.1647C60.0254 20.4502 60.8238 19.6481 62.1728 19.6481C63.4669 19.6481 63.9901 20.3949 63.9901 21.8605V30.157H69.4139V20.6437C69.4139 17.0487 67.5142 15.3064 64.7884 15.3064C62.3657 15.3064 60.8238 16.4956 60.0254 18.0166V15.6936H54.6016V30.157Z"
                  fill="#0C62F3"
                />
                <path
                  id="Vector_3"
                  d="M80.7001 15.4454L82.6273 22.6081H78.7452L80.7001 15.4454ZM70.8711 30.1577H76.6803L77.5613 26.8668H83.7837L84.6922 30.1577H91.3L85.1328 10.3846H77.0658L70.8711 30.1577Z"
                  fill="#0C62F3"
                />
                <path
                  id="Vector_4"
                  d="M100.655 26.3682C99.0031 26.3682 98.1221 25.2344 98.1221 22.9943V22.7732C98.1221 20.5607 99.0307 19.344 100.628 19.344C102.252 19.344 103.188 20.4502 103.188 22.7732V22.9943C103.188 25.2067 102.279 26.3682 100.655 26.3682ZM92.8359 34.9689H98.2598V28.0829C98.9755 29.4933 100.517 30.5165 102.637 30.5165C105.914 30.5165 108.694 28.1105 108.694 23.0497V22.8284C108.694 17.7677 105.941 15.3064 102.665 15.3064C100.49 15.3064 99.0582 16.4402 98.2598 17.7953V15.6936H92.8359V34.9689Z"
                  fill="#0C62F3"
                />
                <path
                  id="Vector_5"
                  d="M118.452 26.3682C116.8 26.3682 115.919 25.2344 115.919 22.9943V22.7732C115.919 20.5607 116.828 19.344 118.424 19.344C120.049 19.344 120.985 20.4502 120.985 22.7732V22.9943C120.985 25.2067 120.076 26.3682 118.452 26.3682ZM110.633 34.9689H116.057V28.0829C116.773 29.4933 118.314 30.5165 120.434 30.5165C123.711 30.5165 126.491 28.1105 126.491 23.0497V22.8284C126.491 17.7677 123.738 15.3064 120.462 15.3064C118.287 15.3064 116.855 16.4402 116.057 17.7953V15.6936H110.633V34.9689Z"
                  fill="#0C62F3"
                />
                <path
                  id="Vector_6"
                  d="M136.335 30.5164C141.621 30.5164 144.484 27.4743 144.484 23.7963C144.484 19.3992 141.731 18.1271 136.775 17.6016C134.6 17.325 134.022 16.8826 134.022 15.9423C134.022 15.085 134.683 14.5043 135.977 14.5043C137.298 14.5043 137.987 15.1956 138.124 16.4125H143.906C143.576 12.0983 140.85 10.1072 135.977 10.1072C131.076 10.1072 128.103 12.762 128.103 16.4125C128.103 20.4777 130.03 22.1369 135.702 22.7731C137.821 23.0772 138.51 23.4091 138.51 24.4599C138.51 25.4278 137.794 26.0916 136.335 26.0916C134.297 26.0916 133.692 25.0684 133.581 23.824H127.662C127.8 28.2763 130.773 30.5164 136.335 30.5164Z"
                  fill="#0C62F3"
                />
                <path
                  id="Vector_7"
                  d="M152.423 30.4904C153.607 30.4904 154.626 30.2692 155.286 30.0755V25.9827C154.818 26.1487 154.433 26.204 153.937 26.204C153.056 26.204 152.533 25.7891 152.533 24.7936V19.3456H155.286V15.6951H152.533V12.7361H147.109V15.6951H145.43V19.3456H147.109V25.3189C147.109 28.9417 149.036 30.4904 152.423 30.4904Z"
                  fill="#0C62F3"
                />
                <path
                  id="Vector_8"
                  d="M164.66 30.5165C169.149 30.5165 172.673 27.7233 172.673 22.9667V22.7456C172.673 18.0996 169.176 15.3064 164.688 15.3064C160.146 15.3064 156.648 18.1825 156.648 22.8837V23.105C156.648 27.8616 160.173 30.5165 164.66 30.5165ZM164.688 26.5065C162.954 26.5065 162.127 25.2897 162.127 22.939V22.7179C162.127 20.4502 163.036 19.3164 164.688 19.3164C166.368 19.3164 167.166 20.5332 167.166 22.8009V22.9943C167.166 25.2897 166.34 26.5065 164.688 26.5065Z"
                  fill="#0C62F3"
                />
                <path
                  id="Vector_9"
                  d="M174.57 30.1573H179.993V23.4926C179.993 21.4185 181.619 20.4229 184.619 20.5887V15.5004C182.472 15.4727 180.902 16.3853 179.993 18.6253V15.6939H174.57V30.1573Z"
                  fill="#0C62F3"
                />
                <path
                  id="Vector_10"
                  d="M189.17 34.9704H194.318L202 15.6951H196.878L194.346 22.9129L191.62 15.6951H185.756L191.51 28.7204L189.17 34.9704Z"
                  fill="#0C62F3"
                />
                <path
                  id="Vector_11"
                  d="M18.3209 38.794C28.4393 38.794 36.6419 30.4458 36.6419 20.1479C36.6419 9.84988 28.4393 1.50171 18.3209 1.50171C8.20256 1.50171 0 9.84988 0 20.1479C0 30.4458 8.20256 38.794 18.3209 38.794Z"
                  fill="#0C62F3"
                />
                <path
                  id="Vector_12"
                  d="M6.57812 20.6266C15.2035 18.9364 16.5924 17.5795 18.3223 9.1521C20.0522 17.5795 21.441 18.9364 30.0664 20.6266C21.441 22.3169 20.0522 23.6739 18.3223 32.1012C16.5924 23.6739 15.2035 22.3169 6.57812 20.6266Z"
                  fill="white"
                />
              </g>
            </svg>
          </Link>
        </div>

        <div className="Navbar__list">
          <div className="Navbar__navigation">
            <span
              className="Navbar__dropdown Navbar__item"
              onClick={handleDropdown}
            >
              Solutions
            </span>
            <Link className="Navbar__link Navbar__item" to="/sales">
              Pricing
            </Link>
            <Link className="Navbar__link Navbar__item" to="/success-cases">
              Successes
            </Link>
            <span
              className="Navbar__dropdown Navbar__item"
              onClick={handleDropdown}
            >
              Resources
            </span>
          </div>
          <div className="Navbar__controls">
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
      </div>
      <div> {dropdownShown ? <DropdownModalSolutions /> : null}</div>
    </header>
  );
}

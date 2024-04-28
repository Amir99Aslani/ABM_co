import React, { useState } from "react";
import "../css/Header.scss";
import logoheader from "../css/images/logoheader.svg";
import { IoSearchSharp } from "react-icons/io5";
import useWindowDimensions from "../wedgits/useWindowDimensions";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Header(props) {
  const { width, height } = useWindowDimensions();
  const [openDrop, setOpenDrop] = useState(false);
  return (
    <>
      <div className="navHeader">
        {width > 970 ? (
          <>
            <nav>
              <div className="navBar">
                <div className="header_items">
                  <div className="account">
                    <span>
                      <svg
                        width="26"
                        height="24"
                        viewBox="0 0 36 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_411_1577)">
                          <path
                            d="M18.0157 0C26.7095 0.0688054 34.1787 6.37057 35.7058 14.9702C36.2926 18.2759 36.0002 21.4966 34.8536 24.6425C34.6303 25.2567 34.1927 25.5632 33.6109 25.5329C33.0932 25.5066 32.6356 25.1706 32.5355 24.6435C32.4824 24.3652 32.5184 24.0364 32.6146 23.7662C33.2675 21.9327 33.6129 20.0467 33.5969 18.0989C33.5338 10.5839 28.2176 4.17892 20.8866 2.77144C12.4401 1.15148 4.28401 6.77835 2.68884 15.3214C2.15812 18.1656 2.39945 20.9391 3.35875 23.661C3.4629 23.9574 3.52398 24.3055 3.47992 24.6111C3.40382 25.1352 2.94119 25.4924 2.43049 25.5319C1.86372 25.5754 1.37806 25.3103 1.20582 24.7436C0.858351 23.6033 0.460809 22.4629 0.269549 21.2912C-0.507509 16.5325 0.400728 12.0966 3.08138 8.09779C5.99334 3.75293 10.0629 1.15957 15.1899 0.29647C16.1221 0.139635 17.0734 0.0961252 18.0157 0Z"
                            fill="white"
                          />
                          <path
                            d="M17.9935 9.52348C21.8948 9.48605 25.1642 12.7199 25.1983 16.6479C25.2333 20.7125 22.066 24.0354 18.1237 24.0708C14.1452 24.1052 10.8387 20.8976 10.8057 16.9707C10.7716 12.8029 13.8989 9.56295 17.9935 9.5245V9.52348ZM18.0035 11.9519C15.3709 11.9469 13.22 14.1102 13.204 16.7794C13.1879 19.4163 15.3669 21.6312 17.9825 21.6363C20.615 21.6413 22.787 19.4689 22.8 16.8179C22.814 14.1395 20.6611 11.956 18.0035 11.9509V11.9519Z"
                            fill="white"
                          />
                          <path
                            d="M31.2005 32.7777C31.1784 33.2887 30.9491 33.6712 30.4825 33.8796C29.9828 34.1032 29.5242 33.996 29.1397 33.6185C28.0862 32.5834 26.9256 31.695 25.6299 30.9918C23.4119 29.7877 21.0406 29.1998 18.5272 29.1472C16.3723 29.1027 14.2714 29.3648 12.2467 30.1408C10.2469 30.9078 8.48153 32.0461 6.95445 33.5568C6.60798 33.8988 6.21545 34.0789 5.73479 33.9666C5.28919 33.8624 4.97876 33.5781 4.85259 33.1278C4.72442 32.6664 4.83257 32.2566 5.17203 31.9136C6.67107 30.3999 8.38841 29.2079 10.314 28.3134C13.4032 26.8787 16.6537 26.4992 20.0012 26.8018C24.1429 27.1761 27.6997 28.8639 30.7038 31.7588C30.9942 32.038 31.2145 32.3467 31.1995 32.7777H31.2005Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_411_1577">
                            <rect width="36" height="34" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span>ورود/عضویت</span>
                  </div>
                  <div className="basket">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_135_296)">
                        <path
                          d="M24.6058 4.41675C24.301 4.05106 23.9195 3.75695 23.4883 3.5553C23.0571 3.35365 22.5868 3.24942 22.1108 3.25H4.5955L4.55 2.86975C4.45689 2.07937 4.077 1.35063 3.48236 0.821684C2.88773 0.292742 2.11968 0.000370276 1.32383 0L1.08333 0C0.796016 0 0.520465 0.114137 0.317301 0.317301C0.114137 0.520465 0 0.796016 0 1.08333C0 1.37065 0.114137 1.6462 0.317301 1.84937C0.520465 2.05253 0.796016 2.16667 1.08333 2.16667H1.32383C1.58918 2.1667 1.84528 2.26412 2.04357 2.44044C2.24186 2.61676 2.36854 2.85973 2.39958 3.12325L3.89025 15.7983C4.04501 17.1164 4.67835 18.3319 5.67007 19.214C6.66178 20.0961 7.94284 20.5834 9.27008 20.5833H20.5833C20.8707 20.5833 21.1462 20.4692 21.3494 20.266C21.5525 20.0629 21.6667 19.7873 21.6667 19.5C21.6667 19.2127 21.5525 18.9371 21.3494 18.734C21.1462 18.5308 20.8707 18.4167 20.5833 18.4167H9.27008C8.59956 18.4148 7.94603 18.2055 7.3991 17.8176C6.85216 17.4298 6.43859 16.8822 6.21508 16.25H19.1284C20.3984 16.2501 21.628 15.8039 22.6025 14.9895C23.5769 14.175 24.2342 13.0441 24.4595 11.7943L25.3099 7.07742C25.3948 6.60942 25.3757 6.12849 25.254 5.66869C25.1323 5.20889 24.911 4.78148 24.6058 4.41675ZM23.1833 6.69283L22.3318 11.4097C22.1966 12.1604 21.8015 12.8397 21.2159 13.3285C20.6302 13.8173 19.8913 14.0845 19.1284 14.0833H5.87058L4.85117 5.41667H22.1108C22.27 5.41572 22.4274 5.44984 22.5718 5.51661C22.7163 5.58338 22.8443 5.68116 22.9467 5.80299C23.049 5.92482 23.1233 6.06772 23.1642 6.22152C23.2051 6.37531 23.2117 6.53623 23.1833 6.69283Z"
                          fill="white"
                        />
                        <path
                          d="M7.58341 26C8.78003 26 9.75008 25.0299 9.75008 23.8333C9.75008 22.6367 8.78003 21.6666 7.58341 21.6666C6.3868 21.6666 5.41675 22.6367 5.41675 23.8333C5.41675 25.0299 6.3868 26 7.58341 26Z"
                          fill="white"
                        />
                        <path
                          d="M18.4167 26C19.6133 26 20.5833 25.0299 20.5833 23.8333C20.5833 22.6367 19.6133 21.6666 18.4167 21.6666C17.22 21.6666 16.25 22.6367 16.25 23.8333C16.25 25.0299 17.22 26 18.4167 26Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_135_296">
                          <rect width="26" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="basket_counter">22</span>
                  </div>
                  {/* <div className="logo_header">
                <img src={logoheader} />
              </div> */}
                  {width > 1170 && (
                    <div className="searchBox_container">
                      <div className="search_input">
                        <input placeholder="جستجو" />
                      </div>
                      <div className="search_icon">
                        <IoSearchSharp />
                      </div>
                    </div>
                  )}
                </div>

                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul className="nav-links">
                  <label htmlFor="close-btn" className="btn close-btn">
                    <i className="fas fa-times" />
                  </label>
                  <li>
                    <a href="#">سوالات متداول</a>
                  </li>
                  <li>
                    <a href="#">لوازم جانبی</a>
                  </li>
                  <li>
                    <a href="#" className="desktop-item">
                      برند ها
                    </a>
                    <input type="checkbox" id="showDrop" />
                    <label htmlFor="showDrop" className="mobile-item">
                      برند ها
                    </label>
                    <ul className="drop-menu">
                      <li>
                        <a href="#">Drop menu 1</a>
                      </li>
                      <li>
                        <a href="#">Drop menu 2</a>
                      </li>
                      <li>
                        <a href="#">Drop menu 3</a>
                      </li>
                      <li>
                        <a href="#">Drop menu 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="desktop-item">
                      دسته بندی
                    </a>
                    <input type="checkbox" id="showMega" />
                    <label htmlFor="showMega" className="mobile-item">
                      دسته بندی
                    </label>
                    <div className="mega-box">
                      <div className="content">
                        <div className="row">
                          <img
                            src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                            alt=""
                          />
                        </div>
                        <div className="row">
                          <header>Design Services</header>
                          <ul className="mega-links">
                            <li>
                              <a href="#">Graphics</a>
                            </li>
                            <li>
                              <a href="#">Vectors</a>
                            </li>
                            <li>
                              <a href="#">Business cards</a>
                            </li>
                            <li>
                              <a href="#">Custom logo</a>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <header>Email Services</header>
                          <ul className="mega-links">
                            <li>
                              <a href="#">Personal Email</a>
                            </li>
                            <li>
                              <a href="#">Business Email</a>
                            </li>
                            <li>
                              <a href="#">Mobile Email</a>
                            </li>
                            <li>
                              <a href="#">Web Marketing</a>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <header>Security services</header>
                          <ul className="mega-links">
                            <li>
                              <a href="#">Site Seal</a>
                            </li>
                            <li>
                              <a href="#">VPS Hosting</a>
                            </li>
                            <li>
                              <a href="#">Privacy Seal</a>
                            </li>
                            <li>
                              <a href="#">Website design</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn">
                  <i className="fas fa-bars" />
                </label>
              </div>
              {width < 1170 && (
                <div className="searchBox_container">
                  <div className="search_input">
                    <input placeholder="جستجو" />
                  </div>
                  <div className="search_icon">
                    <IoSearchSharp />
                  </div>
                </div>
              )}
            </nav>
          </>
        ) : (
          <>
            <nav>
              <div className="navBar">
                <div className="header_items">
                  <div className="logo_header">
                    <img src={logoheader} />
                  </div>
                </div>

                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul className="nav-links">
                  <label htmlFor="close-btn" className="btn close-btn">
                    <IoClose style={{ fontSize: "2rem" }} />
                  </label>
                  <li>
                    <a href="#" className={`desktop-item`}>
                      لوازم جانبی
                    </a>
                    <input type="checkbox" id="showDrop" />
                    <label htmlFor="showDrop" className="mobile-item">
                      لوازم جانبی
                    </label>
                    {/* <ul className="drop-menu">
                      <li>
                        <a href="#">Drop menu 1</a>
                      </li>
                      <li>
                        <a href="#">Drop menu 2</a>
                      </li>
                      <li>
                        <a href="#">Drop menu 3</a>
                      </li>
                      <li>
                        <a href="#">Drop menu 4</a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <a href="#" className="desktop-item">
                      دسته بندی
                    </a>
                    <input type="checkbox" id="showMega" />
                    <label htmlFor="showMega" className="mobile-item">
                      دسته بندی
                    </label>
                    {/* <div className={`mega-box`}>
                      <div className="content">
                        <div className="row">
                          <img
                            src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                            alt=""
                          />
                        </div>
                        <div className="row">
                          <header>Design Services</header>
                          <ul className="mega-links">
                            <li>
                              <a href="#">Graphics</a>
                            </li>
                            <li>
                              <a href="#">Vectors</a>
                            </li>
                            <li>
                              <a href="#">Business cards</a>
                            </li>
                            <li>
                              <a href="#">Custom logo</a>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <header>Email Services</header>
                          <ul className="mega-links">
                            <li>
                              <a href="#">Personal Email</a>
                            </li>
                            <li>
                              <a href="#">Business Email</a>
                            </li>
                            <li>
                              <a href="#">Mobile Email</a>
                            </li>
                            <li>
                              <a href="#">Web Marketing</a>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <header>Security services</header>
                          <ul className="mega-links">
                            <li>
                              <a href="#">Site Seal</a>
                            </li>
                            <li>
                              <a href="#">VPS Hosting</a>
                            </li>
                            <li>
                              <a href="#">Privacy Seal</a>
                            </li>
                            <li>
                              <a href="#">Website design</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </li>
                  <li onClick={() => setOpenDrop(!openDrop)}>
                    <a href="#" className={`desktop-item`}>
                      پروفایل
                    </a>
                    <input type="checkbox" id="showDrop" />
                    <label className="mobile-item">پروفایل</label>
                  </li>
                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn">
                  <GiHamburgerMenu style={{ fontSize: "2rem" }} />
                </label>
              </div>
            </nav>
            <div className="searchBox_container">
              <div className="search_input">
                <input placeholder="جستجو" />
              </div>
              <div className="search_icon">
                <IoSearchSharp />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Header;

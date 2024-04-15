import React from "react";
import "../css/Header.scss";
import logoheader from "../css/images/logoheader.svg";
import { IoSearchSharp } from "react-icons/io5";

function Header(props) {
  return (
    <>
      <div className="navHeader">
        <div className="header_items">
          <div className="basket">
            <svg
              width="39"
              height="30"
              viewBox="0 0 49 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.3188 8.49375C46.7327 7.7905 45.9991 7.2249 45.1699 6.83712C44.3407 6.44933 43.4362 6.24888 42.5208 6.25H8.8375L8.75 5.51875C8.57094 3.99879 7.84038 2.59736 6.69685 1.58016C5.55332 0.562965 4.07631 0.00071207 2.54583 0L2.08333 0C1.5308 0 1.0009 0.219493 0.610194 0.610194C0.219493 1.0009 0 1.5308 0 2.08333C0 2.63587 0.219493 3.16577 0.610194 3.55647C1.0009 3.94717 1.5308 4.16667 2.08333 4.16667H2.54583C3.05611 4.16673 3.54862 4.35408 3.92994 4.69316C4.31126 5.03224 4.55488 5.49948 4.61458 6.00625L7.48125 30.3813C7.77886 32.9162 8.99683 35.2537 10.904 36.95C12.8111 38.6463 15.2747 39.5834 17.8271 39.5833H39.5833C40.1359 39.5833 40.6658 39.3638 41.0565 38.9731C41.4472 38.5824 41.6667 38.0525 41.6667 37.5C41.6667 36.9475 41.4472 36.4176 41.0565 36.0269C40.6658 35.6362 40.1359 35.4167 39.5833 35.4167H17.8271C16.5376 35.413 15.2808 35.0107 14.229 34.2647C13.1772 33.5188 12.3819 32.4657 11.9521 31.25H36.7854C39.2277 31.2502 41.5924 30.3922 43.4663 28.8259C45.3402 27.2597 46.6042 25.0848 47.0375 22.6813L48.6729 13.6104C48.8362 12.7104 48.7995 11.7856 48.5655 10.9013C48.3314 10.0171 47.9058 9.19516 47.3188 8.49375ZM44.5833 12.8708L42.9458 21.9417C42.6857 23.3854 41.926 24.6917 40.7997 25.6317C39.6735 26.5717 38.2524 27.0856 36.7854 27.0833H11.2896L9.32917 10.4167H42.5208C42.8269 10.4148 43.1296 10.4805 43.4074 10.6089C43.6852 10.7373 43.9313 10.9253 44.1282 11.1596C44.3251 11.3939 44.4679 11.6687 44.5466 11.9645C44.6253 12.2602 44.6378 12.5697 44.5833 12.8708Z"
                fill="#AA0002"
              />
            </svg>
            <span className="basket_counter">22</span>
          </div>
          <div className="logo_header">
            <img src={logoheader} />
          </div>
          <div className="account">
            <span>
              <svg
                width="40"
                height="38"
                viewBox="0 0 50 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_31_281)">
                  <path
                    d="M25.0219 0C37.0966 0.0967851 47.4705 8.96116 49.5914 21.0579C50.4064 25.7078 50.0003 30.2382 48.4079 34.6633C48.0977 35.5273 47.4899 35.9585 46.6819 35.9158C45.9629 35.8788 45.3273 35.4063 45.1882 34.6647C45.1145 34.2733 45.1646 33.8107 45.2981 33.4307C46.2049 30.8517 46.6847 28.1986 46.6624 25.4588C46.5748 14.8878 39.1912 5.87827 29.0092 3.89845C17.278 1.61973 5.95008 9.53476 3.73456 21.5518C2.99745 25.5527 3.33262 29.454 4.66499 33.2827C4.80964 33.6997 4.89447 34.1893 4.83328 34.6192C4.72758 35.3565 4.08504 35.8589 3.37574 35.9144C2.58856 35.9756 1.91403 35.6027 1.67481 34.8056C1.19221 33.2016 0.640071 31.5975 0.374431 29.9493C-0.704815 23.2555 0.556624 17.0157 4.27975 11.3908C8.32414 5.27906 13.9763 1.63111 21.0971 0.41703C22.3919 0.196417 23.7131 0.135215 25.0219 0Z"
                    fill="#AA0002"
                  />
                  <path
                    d="M24.991 13.3962C30.4095 13.3435 34.9504 17.8924 34.9977 23.4177C35.0463 29.1352 30.6473 33.8093 25.1718 33.8591C19.6462 33.9075 15.0538 29.3956 15.008 23.8718C14.9607 18.0092 19.3041 13.4517 24.991 13.3976V13.3962ZM25.0049 16.8122C21.3485 16.805 18.3611 19.8481 18.3389 23.6028C18.3166 27.3119 21.343 30.4275 24.9757 30.4347C28.632 30.4418 31.6487 27.3859 31.6667 23.6569C31.6862 19.8893 28.696 16.8178 25.0049 16.8107V16.8122Z"
                    fill="#AA0002"
                  />
                  <path
                    d="M43.334 46.1067C43.3034 46.8255 42.985 47.3635 42.3369 47.6567C41.6429 47.9713 41.0059 47.8204 40.4718 47.2895C39.0087 45.8335 37.3968 44.5838 35.5971 43.5946C32.5165 41.9008 29.2232 41.0739 25.7323 40.9999C22.7393 40.9373 19.8215 41.3059 17.0093 42.3976C14.2319 43.4765 11.78 45.0777 9.65904 47.2027C9.17783 47.6838 8.63264 47.9371 7.96507 47.7791C7.34617 47.6325 6.91503 47.2326 6.73979 46.5992C6.56177 45.9502 6.71198 45.3737 7.18345 44.8912C9.26545 42.762 11.6506 41.0853 14.3251 39.8271C18.6157 37.8088 23.1302 37.2751 27.7795 37.7007C33.5318 38.2273 38.4719 40.6014 42.6442 44.6735C43.0475 45.0663 43.3535 45.5004 43.3327 46.1067H43.334Z"
                    fill="#AA0002"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_31_281">
                    <rect width="50" height="47.8261" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>ورود/عضویت</span>
          </div>
        </div>
        <nav>
          <div className="navBar">
            <div className="searchBox_container">
              <div className="search_input"><input  placeholder="جستوجو" /> </div>
              <div className="search_icon">
                <IoSearchSharp />
              </div>
            </div>
            <input type="radio" name="slider" id="menu-btn" />
            <input type="radio" name="slider" id="close-btn" />
            <ul className="nav-links">
              <label htmlFor="close-btn" className="btn close-btn">
                <i className="fas fa-times" />
              </label>
              <li>
                <a href="#">لوازم جانبی</a>
              </li>
              <li>
                <a href="#">لوازم جانبی</a>
              </li>
              <li>
                <a href="#" className="desktop-item">
                  لوازم جانبی
                </a>
                <input type="checkbox" id="showDrop" />
                <label htmlFor="showDrop" className="mobile-item">
                  لوازم جانبی
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
                  لوازم جانبی
                </a>
                <input type="checkbox" id="showMega" />
                <label htmlFor="showMega" className="mobile-item">
                  لوازم جانبی
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
              <li>
                <a href="#">لوازم جانبی</a>
              </li>
            </ul>
            <label htmlFor="menu-btn" className="btn menu-btn">
              <i className="fas fa-bars" />
            </label>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

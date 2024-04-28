import React, { useState } from "react";
import "../css/Footer.scss";
import logo from "../css/images/logo-01 1.svg";
import linkdin from "../css/images/linkdin.svg";
import whatsapp from "../css/images/whatsapp.svg";
import tweeter from "../css/images/tweeter.svg";
import instagram from "../css/images/instagram.svg";
import unien from "../css/images/unien.svg";
import workgroup from "../css/images/workgroup.svg";
import satisfaction from "../css/images/satisfaction.svg";
import enamad from "../css/images/enamad.svg";
import delivery from "../css/images/delivery.svg";
import garanty from "../css/images/garanty.svg";
import returnd from "../css/images/returnd.svg";
import useWindowDimensions from "../wedgits/useWindowDimensions";

function Footer(props) {
  const { width, height } = useWindowDimensions();
  const [showMore, setShowMore] = useState({
    about: false,
    guid: false,
    readable: width > 670 ? true : false,
  });
  return (
    <div className="footerBar">
      <div className="info_container">
        {width > 780 ? (
          <div className="logo">
            <img src={logo} />
          </div>
        ) : (
          <div className="product_option">
            <div className="option_item">
              <img src={delivery} />
            </div>
            <div className="option_item">
              <img src={garanty} />
            </div>
            <div className="option_item">
              <img src={returnd} />
            </div>
          </div>
        )}

        <div className="contact_info">
          <p>آدرس: مشهد، خیام جنوبی، بلوار دستغیب ، پلاک 33</p>
          <p>تماس:۲۳۲۲۲۳-۰۵۱</p>
        </div>

        <div className="social_media">
          <p className="social_media_title">شبکه‌های اجتماعی</p>
          <p className="social_media_items">
            <span className="social_media_item">
              <img src={linkdin} />
            </span>
            <span className="social_media_item">
              <img src={whatsapp} />
            </span>
            <span className="social_media_item">
              <img src={tweeter} />
            </span>
            <span className="social_media_item">
              <img src={instagram} />
            </span>
          </p>
        </div>

        {width < 671 && (
          <div className="footer_links">
            <div
              id="about"
              onClick={() =>
                setShowMore({ ...showMore, about: !showMore.about })
              }
              className={`link_item ${showMore.about ? "more" : undefined}`}
            >
              <p>
                درباره سایت{" "}
                {width < 780 && (
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.43301 5.25C4.24056 5.58333 3.75944 5.58333 3.56699 5.25L0.968911 0.749999C0.776461 0.416666 1.01702 -3.43203e-07 1.40192 -3.76852e-07L6.59808 -8.31114e-07C6.98298 -8.64763e-07 7.22354 0.416666 7.03109 0.749999L4.43301 5.25Z"
                      fill="#211EB2"
                    />
                  </svg>
                )}
              </p>
              <p>مجوز و گواهینامه‌ها</p>
              <p>قوانین و مقررات</p>
              <p>حریم خصوصی</p>
              <p>گارانتی</p>
              <p>گارانتی لپ تاپ</p>
              <p>تماس با ما</p>
              <p>درباره ما</p>
            </div>
            <div
              id="guid"
              onClick={() => setShowMore({ ...showMore, guid: !showMore.guid })}
              className={`link_item ${showMore.guid ? "more" : undefined}`}
            >
              <p>
                راهنما{" "}
                {width < 780 && (
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.43301 5.25C4.24056 5.58333 3.75944 5.58333 3.56699 5.25L0.968911 0.749999C0.776461 0.416666 1.01702 -3.43203e-07 1.40192 -3.76852e-07L6.59808 -8.31114e-07C6.98298 -8.64763e-07 7.22354 0.416666 7.03109 0.749999L4.43301 5.25Z"
                      fill="#211EB2"
                    />
                  </svg>
                )}
              </p>
              <p>تضمین اصالت کالا</p>
              <p>شرایط عودت کالا</p>
              <p>نحوه ارسال کالا</p>
              <p>راهنمای خرید</p>
              <p>تخفیف‌ها</p>
            </div>
            <div
              id="readable"
              onClick={() =>
                setShowMore({ ...showMore, readable: !showMore.readable })
              }
              className={`link_item ${
                showMore.readable ? "more_about" : undefined
              }`}
            >
              <p>
                خواندنی‌ها{" "}
                {width < 780 && (
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.43301 5.25C4.24056 5.58333 3.75944 5.58333 3.56699 5.25L0.968911 0.749999C0.776461 0.416666 1.01702 -3.43203e-07 1.40192 -3.76852e-07L6.59808 -8.31114e-07C6.98298 -8.64763e-07 7.22354 0.416666 7.03109 0.749999L4.43301 5.25Z"
                      fill="#211EB2"
                    />
                  </svg>
                )}
              </p>
              <p>قیمت گوشی سامسونگ</p>
              <p>قیمت گوشی شیائومی</p>
              <p>آیفون 13 پرو مکس</p>
              <p>آیفون 13</p>
              <p>قیمت لپ تاپ</p>
              <p>کارت گرافیک rtx 3060</p>
              <p>قیمت ساعت هوشمند</p>
              <p>لیست بهترین های تکنولوژی</p>
              <p>برندها</p>
            </div>
          </div>
        )}

        <div className="symbols">
          <span className="symbol_item">
            <img src={unien} />
          </span>
          <span className="symbol_item">
            <img src={workgroup} />
          </span>
          <span className="symbol_item">
            <img src={satisfaction} />
          </span>
          <span className="symbol_item">
            <img src={enamad} />
          </span>
        </div>
      </div>
      <div className="navbar_footer">
        {width > 780 && (
          <div className="product_option">
            <div className="option_item">
              <img src={delivery} />
            </div>
            <div className="option_item">
              <img src={garanty} />
            </div>
            <div className="option_item">
              <img src={returnd} />
            </div>
          </div>
        )}

        {width > 671 && (
          <div className="footer_links">
            <div
              id="about"
              onClick={() =>
                setShowMore({ ...showMore, about: !showMore.about })
              }
              className={`link_item ${showMore.about ? "more" : undefined}`}
            >
              <p>
                درباره سایت{" "}
                {width < 780 && (
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.43301 5.25C4.24056 5.58333 3.75944 5.58333 3.56699 5.25L0.968911 0.749999C0.776461 0.416666 1.01702 -3.43203e-07 1.40192 -3.76852e-07L6.59808 -8.31114e-07C6.98298 -8.64763e-07 7.22354 0.416666 7.03109 0.749999L4.43301 5.25Z"
                      fill="#211EB2"
                    />
                  </svg>
                )}
              </p>
              <p>مجوز و گواهینامه‌ها</p>
              <p>قوانین و مقررات</p>
              <p>حریم خصوصی</p>
              <p>گارانتی</p>
              <p>گارانتی لپ تاپ</p>
              <p>تماس با ما</p>
              <p>درباره ما</p>
            </div>
            <div
              id="guid"
              onClick={() => setShowMore({ ...showMore, guid: !showMore.guid })}
              className={`link_item ${showMore.guid ? "more" : undefined}`}
            >
              <p>
                راهنما{" "}
                {width < 780 && (
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.43301 5.25C4.24056 5.58333 3.75944 5.58333 3.56699 5.25L0.968911 0.749999C0.776461 0.416666 1.01702 -3.43203e-07 1.40192 -3.76852e-07L6.59808 -8.31114e-07C6.98298 -8.64763e-07 7.22354 0.416666 7.03109 0.749999L4.43301 5.25Z"
                      fill="#211EB2"
                    />
                  </svg>
                )}
              </p>
              <p>تضمین اصالت کالا</p>
              <p>شرایط عودت کالا</p>
              <p>نحوه ارسال کالا</p>
              <p>راهنمای خرید</p>
              <p>تخفیف‌ها</p>
            </div>
            <div
              id="readable"
              onClick={() =>
                setShowMore({ ...showMore, readable: !showMore.readable })
              }
              className={`link_item ${
                showMore.readable ? "more_about" : undefined
              }`}
            >
              <p>
                خواندنی‌ها{" "}
                {width < 780 && (
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.43301 5.25C4.24056 5.58333 3.75944 5.58333 3.56699 5.25L0.968911 0.749999C0.776461 0.416666 1.01702 -3.43203e-07 1.40192 -3.76852e-07L6.59808 -8.31114e-07C6.98298 -8.64763e-07 7.22354 0.416666 7.03109 0.749999L4.43301 5.25Z"
                      fill="#211EB2"
                    />
                  </svg>
                )}
              </p>
              <p>قیمت گوشی سامسونگ</p>
              <p>قیمت گوشی شیائومی</p>
              <p>آیفون 13 پرو مکس</p>
              <p>آیفون 13</p>
              <p>قیمت لپ تاپ</p>
              <p>کارت گرافیک rtx 3060</p>
              <p>قیمت ساعت هوشمند</p>
              <p>لیست بهترین های تکنولوژی</p>
              <p>برندها</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;

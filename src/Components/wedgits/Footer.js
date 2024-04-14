import React from "react";
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

function Footer(props) {
  return (
    <div className="footerBar">
      <div className="info_container">
        <div className="logo">
          <img src={logo} />
        </div>

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

        <div className="footer_links">

          <div className="link_item">
            <p>درباره سایت</p>
            <p>مجوز و گواهینامه‌ها</p>
            <p>قوانین و مقررات</p>
            <p>حریم خصوصی</p>
            <p>گارانتی</p>
            <p>گارانتی لپ تاپ</p>
            <p>تماس با ما</p>
            <p>درباره ما</p>
          </div>
          <div className="link_item">
            <p>راهنما</p>
            <p>تضمین اصالت کالا</p>
            <p>شرایط عودت کالا</p>
            <p>نحوه ارسال کالا</p>
            <p>راهنمای خرید</p>
            <p>تخفیف‌ها</p>
          </div>
          <div className="link_item">
            <p>خواندنی‌ها</p>
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
        
      </div>
    </div>
  );
}

export default Footer;

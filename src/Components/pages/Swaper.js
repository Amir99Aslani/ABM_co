import React from "react";
import "../css/Swaper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import imgcard from "../css/images/Frame 13 (1).png";
import imgcart from "../css/images/Vector (6).svg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import useWindowDimensions from "../wedgits/useWindowDimensions";
export default function Swaper() {

const {width , height} = useWindowDimensions()


  return (
    <>
      <div className="main-container-swaper">
        <Swiper
            loop={true}
          slidesPerView={width > 700 ? 5 : 2}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <img src={imgcard} alt="" />
              <p>
              لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>{" "}
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <img src={imgcart} alt="" />
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={imgcard} alt="" />
              <p>
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>{" "}
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <img src={imgcart} alt="" />
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={imgcard} alt="" />
              <p>
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>{" "}
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <img src={imgcart} alt="" />
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={imgcard} alt="" />
              <p>
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>{" "}
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <img src={imgcart} alt="" />
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={imgcard} alt="" />
              <p>
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>{" "}
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <img src={imgcart} alt="" />
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={imgcard} alt="" />
              <p>
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>{" "}
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <img src={imgcart} alt="" />
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={imgcard} alt="" />
              <p>
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>{" "}
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <img src={imgcart} alt="" />
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={imgcard} alt="" />
              <p>
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>{" "}
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <img src={imgcart} alt="" />
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={imgcard} alt="" />
              <p>
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>{" "}
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <img src={imgcart} alt="" />
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={imgcard} alt="" />
              <p>
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>{" "}
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <img src={imgcart} alt="" />
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

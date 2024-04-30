import React, { useEffect } from "react";
import "../css/Swaper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import imgcard from "../css/images/Frame 13.svg";
import imgcart from "../css/images/Vector (6).svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import useWindowDimensions from "./useWindowDimensions";

export default function Swaper(props) {
  const { width, height } = useWindowDimensions();

  useEffect(()=>{
    console.log(props.targetRoute)
  },[])
  return (
    <>
      <div className="main-container-swaper">
        <Swiper
          loop={true}
          slidesPerView={
            width > 1200 ? 5 : width > 800 ? 4 : width > 750 ? 3 : 2
          }
          freeMode={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {props?.imgGP?.map((e) => (
            <SwiperSlide>
              <div className="card">
                <div className="imgContainer">
                  <img src={e} alt="" />
                </div>
                <p className="merchandise">
                  لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                  11400H 16GB 512SSD RTX2050 - کاستوم شده
                </p>
                <div className="payment-bar-card">
                  <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                  <div className="add-to-cart">
                    <p>افزودن به سبد خرید</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <SwiperSlide >
            <div className="card">
              <div className="imgContainer">
                <img src={imgcard} alt="" />
              </div>
              <p className="merchandise">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="imgContainer">
                <img src={imgcard} alt="" />
              </div>
              <p className="merchandise">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="imgContainer">
                <img src={imgcard} alt="" />
              </div>
              <p className="merchandise">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="imgContainer">
                <img src={imgcard} alt="" />
              </div>
              <p className="merchandise">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="imgContainer">
                <img src={imgcard} alt="" />
              </div>
              <p className="merchandise">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="imgContainer">
                <img src={imgcard} alt="" />
              </div>
              <p className="merchandise">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="imgContainer">
                <img src={imgcard} alt="" />
              </div>
              <p className="merchandise">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="imgContainer">
                <img src={imgcard} alt="" />
              </div>
              <p className="merchandise">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
                  <p>افزودن به سبد خرید</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="imgContainer">
                <img src={imgcard} alt="" />
              </div>
              <p className="merchandise">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>
              <div className="payment-bar-card">
                <p>۴۲.۹۰۰.۰۰۰ تومان</p>
                <div className="add-to-cart">
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

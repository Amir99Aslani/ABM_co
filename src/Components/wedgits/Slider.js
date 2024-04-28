import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imgslider from "../css/images/f9f2d9c459c927461e22e5468465e638.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/Slider.scss";

// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className="main-container-slider">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard , Autoplay]}
          className="slider"
        >
  
          <SwiperSlide>
            <img className="img-slider" src={imgslider} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-slider" src={imgslider} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-slider" src={imgslider} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-slider" src={imgslider} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img-slider" src={imgslider} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

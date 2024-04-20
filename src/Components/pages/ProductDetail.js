import React, { useRef, useState } from "react";
import Swaper from "../wedgits/Swaper";
import Header from "../wedgits/Header";
import Footer from "../wedgits/Footer";
import Scrollbars from "react-custom-scrollbars-2";
import "../css/ProductDetail.scss";
import img1 from "../css/images/laptop.svg";
import { useDraggable } from "react-use-draggable-scroll";

export default function ProductDetail() {
  const [showMore, setShowMore] = useState(false);
  const ref = useRef();
  const { events } = useDraggable(ref);
  return (
    <div className="mainContainer">
      <Header />
      <div className="mainContent">
        <div className="projuct_detail">
          <div className="image_container">
            <img src={img1} />
            <div className="all_images">
              <button
                onClick={(e) => {
                  const items = ref.current;
                  items.scrollLeft += -50;
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_317_207)">
                    <rect width="18" height="18" rx="9" fill="#08124F" />
                    <path
                      d="M7.00718 4C7.18213 4.05619 7.30755 4.1857 7.4327 4.32082C8.88524 5.88871 10.3396 7.45434 11.7932 9.0211C12.012 9.2568 12.061 9.54391 11.922 9.79872C11.8873 9.86249 11.8396 9.92008 11.7909 9.97289C10.3073 11.5731 8.82293 13.1721 7.33857 14.7712C7.05385 15.078 6.73576 15.0757 6.44869 14.7676C6.3663 14.6791 6.28391 14.5909 6.20204 14.5021C5.93244 14.2093 5.93218 13.8607 6.20412 13.5666C6.6518 13.0822 7.10104 12.5996 7.54951 12.1164C8.33171 11.2736 9.11364 10.4311 9.8961 9.58886C9.92166 9.56133 9.95164 9.53801 9.98606 9.50683C9.94929 9.46469 9.92348 9.43378 9.89636 9.40457C8.66805 8.08026 7.44208 6.75454 6.20986 5.43528C5.96503 5.17289 5.95043 4.82538 6.10869 4.62283C6.30111 4.37701 6.48728 4.11293 6.7879 4H7.00718Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_317_207">
                      <rect width="18" height="18" rx="9" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              <div className="otherImages_conitainer" {...events} ref={ref}>
                <div className="otherImage_items">
                  <img src={img1} />
                </div>
                <div className="otherImage_items">
                  <img src={img1} />
                </div>
                <div className="otherImage_items">
                  <img src={img1} />
                </div>
                <div className="otherImage_items">
                  <img src={img1} />
                </div>
                <div className="otherImage_items">
                  <img src={img1} />
                </div>
              </div>

              <button
                onClick={(e) => {
                  const items = ref.current;
                  items.scrollLeft += 50;
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_317_210)">
                    <rect
                      x="18"
                      y="18"
                      width="18"
                      height="18"
                      rx="9"
                      transform="rotate(-180 18 18)"
                      fill="#08124F"
                    />
                    <path
                      d="M10.9928 14C10.8179 13.9438 10.6925 13.8143 10.5673 13.6792C9.11476 12.1113 7.66039 10.5457 6.2068 8.9789C5.98805 8.7432 5.93903 8.45609 6.078 8.20128C6.11268 8.13751 6.16039 8.07992 6.20915 8.02711C7.69272 6.42692 9.17707 4.82785 10.6614 3.22879C10.9461 2.92201 11.2642 2.92426 11.5513 3.23244C11.6337 3.32094 11.7161 3.40915 11.798 3.49792C12.0676 3.79065 12.0678 4.13929 11.7959 4.43343C11.3482 4.91775 10.899 5.40039 10.4505 5.8836C9.6683 6.72639 8.88636 7.56891 8.1039 8.41114C8.07834 8.43867 8.04836 8.46199 8.01394 8.49317C8.05071 8.53531 8.07652 8.56621 8.10364 8.59543C9.33195 9.91974 10.5579 11.2455 11.7901 12.5647C12.035 12.8271 12.0496 13.1746 11.8913 13.3772C11.6989 13.623 11.5127 13.8871 11.2121 14L10.9928 14Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_317_210">
                      <rect
                        x="18"
                        y="18"
                        width="18"
                        height="18"
                        rx="9"
                        transform="rotate(-180 18 18)"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <button className="add_shopCart_btn">افزودن به سبد خرید</button>
          </div>

          <div className="product_desc_container">
            <div className="product_desc_detail">
              <p className="desc">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </p>

              <p className="rate_container">
                <span className="rate">(امتیاز ۱۸ خریدار)</span>
                <span className="opponiens">۱۹ دیدگاه ۴۳ پرسش</span>
              </p>

              <div className="product_color">
                <p>رنگ : مشکی مات</p>
                <span></span>
                <span></span>
              </div>

              <div className="product_features">
                <p>ویژگی ها</p>

                <div className="feature_items">
                  <div className="feature_item">
                    <p className="title_desc">سری پردازنده</p>
                    <p>core i7</p>
                  </div>
                  <div className="feature_item">
                    <p className="title_desc">سری پردازنده</p>
                    <p>core i7</p>
                  </div>
                  <div className="feature_item">
                    <p className="title_desc">سری پردازنده</p>
                    <p>core i7</p>
                  </div>
                  <div className="feature_item">
                    <p className="title_desc">سری پردازنده</p>
                    <p>core i7</p>
                  </div>
                  <div className="feature_item">
                    <p className="title_desc">سری پردازنده</p>
                    <p>core i7</p>
                  </div>
                  <div className="feature_item">
                    <p className="title_desc">سری پردازنده</p>
                    <p>core i7</p>
                  </div>
                  <div className="feature_item">
                    <p className="title_desc">سری پردازنده</p>
                    <p>core i7</p>
                  </div>
                </div>
                <br />
                <br />
                <div className="show_more_BG">
                  <span></span>
                  <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? "بستن" : "  مشاهده تمام ویژگی ها"}
                  </button>
                  <span></span>
                </div>

                <div
                  className={`more_desc ${showMore ? "show_more" : undefined}`}
                >
                  <div className="more_info_items">
                    <div className="more_info_item">
                      <p>سری پردازنده</p>
                      <p>core i5</p>
                    </div>
                    <div className="more_info_item">
                      <p>ابعاد</p>
                      <p>359*256*24.5 میلی متر</p>
                    </div>
                    <div className="more_info_item">
                      <p>سازنده پردازنده</p>
                      <p>intel</p>
                    </div>
                    <div className="more_info_item">
                      <p>سازنده پردازنده گرافیکی</p>
                      <p>NVIDIA</p>
                    </div>
                    <div className="more_info_item">
                      <p>نوع حافظه RAM</p>
                      <p>DDR4</p>
                    </div>
                    <div className="more_info_item">
                      <p>قابلیت های دستگاه</p>
                      <p>
                        <p>صفحه نمایش مات</p>
                        <p>کیبورد با نور پس زمینه</p>
                        <p>وبکم</p>
                      </p>
                    </div>
                    <div className="more_info_item">
                      <p>درایو نوری</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Scrollbars
              autoHide
              autoHideTimeout={1000}
              style={{
                height: "70vh",
                maxHeight: "79vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                padding: "10px",
                margin: "auto",
                marginTop: "40px",
                direction: "ltr",
              }}
            >
              <div className="users_idea_container">
                <h3>نظرات کاربران</h3>
                <div className="user_idea_item">
                  <div className="text_rate">
                    <p className="star"></p>
                    <p className="text"></p>
                  </div>
                  <p className="like_dislike">
                    <span className="like"></span>
                    <span className="dislike"></span>
                  </p>
                </div>
                <div className="user_idea_item">
                  <div className="text_rate">
                    <p className="star">start</p>
                    <p className="text">
                      قیمتش نسبت به بازار یکی بود من قسطی خرید کردم ولی اگه نقد
                      خواستین بخرین بازار ارزون تر میده اینم پک هند
                    </p>
                  </div>
                  <p className="like_dislike">
                    <span className="like">like</span>
                    <span className="dislike">like</span>
                  </p>
                </div>
                <div className="user_idea_item">
                  <div className="text_rate">
                    <p className="star">start</p>
                    <p className="text">
                      متاسفانه پس از یک هفته انتظار گوشی به دستم رسید اما ریجستر
                      نمی شود شرکت گارانتی هم که شرکت پارس همراه خاورمیانه است
                      پاسخگو نیست و درخواست مرجوعی دادم ولی تاکنون پاسخی از دیجی
                      کالا دریافت نکردم
                    </p>
                  </div>
                  <p className="like_dislike">
                    <span className="like">like</span>
                    <span className="dislike">like</span>
                  </p>
                </div>
                <div className="user_idea_item">
                  <div className="text_rate">
                    <p className="star">start</p>
                    <p className="text">
                      به نسبت S21FE اگه بخواییم مقایسه کنیم واقعا تفاوت زیادی
                      ندارن و فقط اگه بتونین با درپوش پلاستیکی S21FEکنار بیایین
                      قطعا اون بهتره. پنل پشت شیشه ای دوربین نسبتا بهتر دوربین
                      های جزیره ای حاشیه زیاد صفحه نمایش پنل پشتی لیز
                    </p>
                  </div>
                  <p className="like_dislike">
                    <span className="like">like</span>
                    <span className="dislike">like</span>
                  </p>
                </div>
                <div className="user_idea_item">
                  <div className="text_rate">
                    <p className="star">start</p>
                    <p className="text">
                      به نسبت S21FE اگه بخواییم مقایسه کنیم واقعا تفاوت زیادی
                      ندارن و فقط اگه بتونین با درپوش پلاستیکی S21FEکنار بیایین
                      قطعا اون بهتره. پنل پشت شیشه ای دوربین نسبتا بهتر دوربین
                      های جزیره ای حاشیه زیاد صفحه نمایش پنل پشتی لیز
                    </p>
                  </div>
                  <p className="like_dislike">
                    <span className="like">like</span>
                    <span className="dislike">like</span>
                  </p>
                </div>
                <div className="user_idea_item">
                  <div className="text_rate">
                    <p className="star">start</p>
                    <p className="text">
                      به نسبت S21FE اگه بخواییم مقایسه کنیم واقعا تفاوت زیادی
                      ندارن و فقط اگه بتونین با درپوش پلاستیکی S21FEکنار بیایین
                      قطعا اون بهتره. پنل پشت شیشه ای دوربین نسبتا بهتر دوربین
                      های جزیره ای حاشیه زیاد صفحه نمایش پنل پشتی لیز
                    </p>
                  </div>
                  <p className="like_dislike">
                    <span className="like">like</span>
                    <span className="dislike">like</span>
                  </p>
                </div>
                <div className="user_idea_item">
                  <div className="text_rate">
                    <p className="star">start</p>
                    <p className="text">
                      به نسبت S21FE اگه بخواییم مقایسه کنیم واقعا تفاوت زیادی
                      ندارن و فقط اگه بتونین با درپوش پلاستیکی S21FEکنار بیایین
                      قطعا اون بهتره. پنل پشت شیشه ای دوربین نسبتا بهتر دوربین
                      های جزیره ای حاشیه زیاد صفحه نمایش پنل پشتی لیز
                    </p>
                  </div>
                  <p className="like_dislike">
                    <span className="like">like</span>
                    <span className="dislike">like</span>
                  </p>
                </div>
                <div className="user_idea_item">
                  <div className="text_rate">
                    <p className="star">start</p>
                    <p className="text">
                      متاسفانه پس از یک هفته انتظار گوشی به دستم رسید اما ریجستر
                      نمی شود شرکت گارانتی هم که شرکت پارس همراه خاورمیانه است
                      پاسخگو نیست و درخواست مرجوعی دادم ولی تاکنون پاسخی از دیجی
                      کالا دریافت نکردم
                    </p>
                  </div>
                  <p className="like_dislike">
                    <span className="like">like</span>
                    <span className="dislike">like</span>
                  </p>
                </div>
                <div className="user_idea_item">
                  <div className="text_rate">
                    <p className="star">start</p>
                    <p className="text">
                      متاسفانه پس از یک هفته انتظار گوشی به دستم رسید اما ریجستر
                      نمی شود شرکت گارانتی هم که شرکت پارس همراه خاورمیانه است
                      پاسخگو نیست و درخواست مرجوعی دادم ولی تاکنون پاسخی از دیجی
                      کالا دریافت نکردم
                    </p>
                  </div>
                  <p className="like_dislike">
                    <span className="like">like</span>
                    <span className="dislike">like</span>
                  </p>
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>

        <br />

        <div className="crucelContainer">
          <Swaper />
        </div>

        <br />
      </div>
      <Footer />
    </div>
  );
}

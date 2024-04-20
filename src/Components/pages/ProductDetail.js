import React, { useState } from "react";
import Swaper from "../wedgits/Swaper";
import Header from "../wedgits/Header";
import Footer from "../wedgits/Footer";
import Scrollbars from "react-custom-scrollbars-2";
import "../css/ProductDetail.scss";
import img1 from "../css/images/laptop.svg";

export default function ProductDetail() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mainContainer">
      <Header />
      <div className="mainContent">
        <div className="projuct_detail">
          <div className="image_container">
            <img src={img1} />
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
                    مشاهده تمام ویژگی ها
                  </button>
                  <span></span>
                </div>
                <br />
                <br />
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

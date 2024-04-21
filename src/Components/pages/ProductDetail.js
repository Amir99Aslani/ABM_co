import React, { useRef, useState } from "react";
import Swaper from "../wedgits/Swaper";
import Header from "../wedgits/Header";
import Footer from "../wedgits/Footer";
import Scrollbars from "react-custom-scrollbars-2";
import "../css/ProductDetail.scss";
import img1 from "../css/images/laptop.svg";
import img2 from "../css/images/Frame 48.png";
import img3 from "../css/images/Frame 51.png";
import { useDraggable } from "react-use-draggable-scroll";

export default function ProductDetail() {
  const [showMore, setShowMore] = useState(false);
  const ref = useRef();
  const { events } = useDraggable(ref);
  const imgs = [img1, img2, img3, img1, img2, img3];
  const [selected , setSelected] = useState(null)
  return (
    <div className="mainContainer">
      <div className="coassist">
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_29_272)">
            <rect x="4" width="62" height="62" rx="31" fill="#A78E4F" />
            <g clip-path="url(#clip0_29_272)">
              <path
                d="M53.1611 41.8179C51.7691 41.5749 50.8139 40.8677 50.4452 39.5375C50.3499 39.1959 50.34 38.8255 50.3388 38.4683C50.3301 35.9016 50.3796 33.3338 50.319 30.7684C50.2732 28.8152 51.346 27.592 53.0646 27.2673C52.9124 20.1158 46.9807 12.1706 37.5807 10.8885C26.7417 9.40915 17.4914 17.358 16.8864 27.242C17.0188 27.2817 17.1586 27.3298 17.3021 27.3659C18.6459 27.7087 19.5442 28.7069 19.6407 30.0552C19.6976 30.8622 19.6704 31.6753 19.6716 32.4859C19.6753 34.5269 19.684 36.5692 19.6691 38.6102C19.6555 40.4732 18.3798 41.8203 16.5931 41.8118C14.6691 41.8034 13.2363 40.9363 12.307 39.3006C11.9272 38.633 11.7589 37.9042 11.7589 37.1417C11.7589 35.4001 11.7366 33.6586 11.7651 31.9182C11.7935 30.1045 12.6572 28.743 14.267 27.8361C14.4983 27.7063 14.6246 27.592 14.6419 27.3021C14.9153 22.745 16.5907 18.7339 19.6827 15.3001C22.4519 12.2223 25.8768 10.1152 29.9637 9.1626C36.717 7.58822 42.8492 8.92205 48.197 13.2603C51.8929 16.2587 54.1535 20.1255 55.0542 24.7259C55.2213 25.5774 55.2571 26.4518 55.3834 27.3118C55.4081 27.4825 55.5306 27.7014 55.6766 27.7844C57.3705 28.743 58.2391 30.1586 58.2441 32.0661C58.249 33.7319 58.2552 35.3989 58.2428 37.0647C58.2292 38.9157 57.3866 40.3144 55.7385 41.2357C55.4638 41.3885 55.4019 41.5569 55.3957 41.8383C55.3735 42.946 55.4353 44.0706 55.2646 45.159C54.7931 48.1442 51.9646 50.4607 48.8466 50.5112C47.7973 50.528 46.7468 50.5208 45.6976 50.5112C45.4439 50.5088 45.2991 50.5605 45.1705 50.8107C44.553 52.0122 43.5483 52.6689 42.1501 52.6869C40.9462 52.7013 39.7423 52.7074 38.5384 52.6797C36.79 52.64 35.4166 51.2773 35.3139 49.5201C35.2211 47.9157 36.5104 46.3461 38.2031 46.2138C39.6582 46.1008 41.1331 46.1236 42.5919 46.2042C43.7908 46.2704 44.6446 46.9691 45.1618 48.0131C45.2917 48.2753 45.434 48.3547 45.7161 48.3475C46.8879 48.315 48.0646 48.3619 49.2314 48.2705C51.3447 48.1045 53.1116 46.215 53.1574 44.1536C53.1747 43.3886 53.1599 42.6237 53.1599 41.8155L53.1611 41.8179ZM17.4172 34.5353C17.4172 33.139 17.4222 31.7438 17.4147 30.3474C17.411 29.7533 17.0658 29.437 16.4595 29.4394C15.1356 29.4454 14.0195 30.5411 13.9948 31.9302C13.9651 33.6706 13.9651 35.4121 13.9948 37.1525C14.0183 38.4851 15.0675 39.5651 16.3271 39.6289C17.0745 39.6674 17.4135 39.3607 17.4147 38.6306C17.4184 37.2643 17.4147 35.8992 17.4147 34.5329L17.4172 34.5353ZM52.5858 34.5353C52.5858 35.886 52.5858 37.2367 52.5858 38.5873C52.5858 38.6174 52.5858 38.6475 52.5858 38.6775C52.5981 39.3523 52.9297 39.6566 53.6264 39.6325C54.9107 39.588 55.9785 38.514 56.0057 37.1549C56.0391 35.4145 56.0367 33.673 56.0057 31.9326C55.9835 30.659 55.105 29.6847 53.8639 29.4634C53.0349 29.3155 52.5858 29.6703 52.5845 30.4834C52.582 31.834 52.5845 33.1847 52.5845 34.5353H52.5858ZM40.3919 50.528C40.9475 50.528 41.503 50.534 42.0586 50.5268C42.7738 50.5172 43.2575 50.0698 43.2575 49.4287C43.2575 48.7756 42.796 48.3475 42.0611 48.3427C40.9648 48.3354 39.8685 48.3354 38.7735 48.3427C38.0298 48.3475 37.572 48.7708 37.5745 49.4251C37.577 50.0698 38.0558 50.516 38.771 50.5256C39.3117 50.534 39.8512 50.5268 40.3919 50.5268V50.528Z"
                fill="white"
              />
              <path
                d="M27.8786 37.5709C25.613 37.3929 24.0441 36.391 23.3264 34.3223C23.1532 33.822 23.0901 33.2639 23.0864 32.7323C23.0641 29.7604 23.0691 26.7884 23.0777 23.8165C23.0852 21.0129 25.1329 19.0236 28.0073 19.02C32.6683 19.0152 37.3305 19.0164 41.9915 19.02C44.8696 19.0224 46.9186 21.0057 46.9285 23.8081C46.9384 26.78 46.9359 29.752 46.9285 32.7239C46.921 35.5563 44.8807 37.5372 41.9767 37.542C40.1244 37.5456 38.2721 37.5492 36.4198 37.536C36.1031 37.5336 35.8767 37.6154 35.6502 37.8367C34.3795 39.0839 33.1075 40.3324 31.8059 41.5483C30.6452 42.6332 28.8288 42.3349 28.1471 40.953C27.98 40.615 27.9107 40.2085 27.8909 39.8284C27.8526 39.0827 27.8798 38.3346 27.8798 37.5697L27.8786 37.5709ZM30.1466 40.0654C30.3569 39.8753 30.4819 39.7683 30.5995 39.654C31.8925 38.4056 33.1941 37.1668 34.4698 35.9027C34.8559 35.5215 35.2728 35.3519 35.8222 35.3567C37.8749 35.3747 39.9289 35.3699 41.9816 35.3615C43.6582 35.3543 44.6617 34.3813 44.6654 32.7564C44.6716 29.7688 44.6716 26.7812 44.6654 23.7948C44.6617 22.182 43.6681 21.2222 42.0126 21.221C39.2026 21.2186 36.3939 21.221 33.5839 21.221C31.6537 21.221 29.7247 21.2102 27.7944 21.2258C26.4495 21.2366 25.3693 22.188 25.3569 23.4461C25.326 26.673 25.3297 29.9011 25.3569 33.128C25.3656 34.2466 26.2898 35.1811 27.4344 35.3122C27.9231 35.3687 28.4193 35.3483 28.913 35.3663C29.7024 35.394 30.1033 35.7752 30.1144 36.5486C30.1293 37.5396 30.1181 38.5307 30.1194 39.5205C30.1194 39.6648 30.133 39.8092 30.1454 40.0666L30.1466 40.0654Z"
                fill="white"
              />
              <path
                d="M36.6561 28.4374C36.6673 29.2998 35.91 30.0515 35.0192 30.0635C34.1332 30.0755 33.3587 29.3383 33.3475 28.4723C33.3364 27.6087 34.0912 26.8582 34.9833 26.8474C35.8717 26.8366 36.6438 27.5715 36.6561 28.4374Z"
                fill="white"
              />
              <path
                d="M29.596 26.8462C30.4881 26.8426 31.2478 27.5775 31.2527 28.4482C31.2577 29.3154 30.4992 30.0587 29.6071 30.0623C28.7063 30.0659 27.9664 29.3431 27.9639 28.4591C27.9627 27.5715 28.6927 26.8498 29.596 26.8462Z"
                fill="white"
              />
              <path
                d="M42.0398 28.4591C42.0385 29.3431 41.2974 30.0659 40.3966 30.0635C39.5045 30.0611 38.746 29.3178 38.7497 28.4507C38.7534 27.5799 39.5119 26.845 40.4053 26.8474C41.3073 26.8498 42.041 27.5739 42.0398 28.4591Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_29_272"
              x="0"
              y="0"
              width="70"
              height="70"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_29_272"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_29_272"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_29_272">
              <rect
                width="46.5"
                height="44.175"
                fill="white"
                transform="translate(11.75 8.52502)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_29_267)">
            <rect x="4" width="62" height="62" rx="31" fill="#BC0006" />
            <path
              d="M16.4 37.5624C16.59 36.9523 17.028 36.5149 17.485 36.0784C22.7873 31.0127 28.082 25.9406 33.3805 20.8712C34.1776 20.1083 35.1485 19.9373 36.0102 20.422C36.2259 20.5429 36.4207 20.7093 36.5993 20.8794C42.0108 26.0533 47.4186 31.23 52.8263 36.4067C53.8638 37.3996 53.8562 38.509 52.8139 39.5101C52.5147 39.7975 52.2164 40.0848 51.9161 40.3703C50.9262 41.3106 49.7472 41.3115 48.7524 40.3631C47.1145 38.8018 45.4823 37.2351 43.8482 35.671C40.998 32.9431 38.1488 30.2161 35.3005 27.4873C35.2074 27.3982 35.1286 27.2936 35.0231 27.1736C34.8806 27.3018 34.7761 27.3918 34.6773 27.4864C30.1987 31.7701 25.7154 36.0457 21.2539 40.3431C20.3665 41.1969 19.1913 41.2478 18.5063 40.6959C17.675 40.0248 16.7819 39.3756 16.4 38.3271L16.4 37.5624Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_29_267"
              x="0"
              y="0"
              width="70"
              height="70"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_29_267"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_29_267"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <Header />
      <div className="mainContent">
        <div className="projuct_detail">
          <div className="image_container">
            <img src={selected ?? imgs[0]} />
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
                {imgs.map((e) => (
                  <div className="otherImage_items" onClick={()=>setSelected(e)}>
                    <img src={e} />
                  </div>
                ))}
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

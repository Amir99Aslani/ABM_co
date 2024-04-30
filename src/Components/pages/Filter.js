import React, { useEffect, useState } from "react";
import Header from "../wedgits/Header";
import Footer from "../wedgits/Footer";
import "../css/Filter.scss";
import Swaper from "../wedgits/Swaper";
import { Scrollbars } from "react-custom-scrollbars-2";
import laptop from "../css/images/laptop.svg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { NumericFormat } from "react-number-format";
import NativeSelect from "@mui/material/NativeSelect";
import Switch from "@mui/material/Switch";
import { BiColor } from "react-icons/bi";
import useWindowDimensions from "../wedgits/useWindowDimensions";
import { LuFilter } from "react-icons/lu";
import { CenterModal } from "react-spring-modal";

const AddInput = styled(FormControl)(({ theme }) => ({
  direction: "rtl",
  fontFamily: "revert-layer",
  border: "none",
  fontFamily: "IRANSansMedium",
  "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
    left: "0",
    right: "90%",
  },
  "& .css-1mf6u8l-MuiSvgIcon-root-MuiSelect-icon": {
    left: "0",
    right: "90%",
  },
  "& .css-1mf6u8l-MuiSvgIcon-root-MuiSelect-icon ": {
    left: "0",
  },
  "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused ": {
    width: "100%",
    transformOrigin: "top right",
  },
  "& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root ": {
    right: "0",
    transformOrigin: "top right",
    fontFamily: "IRANSansMedium",
    fontSize: "0.9rem",
  },
  "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root  ": {
    right: "0",
    transformOrigin: "top right",
  },
}));

const AddSwitch = styled(Switch)(({ theme }) => ({
  color: "red",
  "& .css-byenzh-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked ": {
    color: "#AA0002",
  },
  "& .css-byenzh-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track":
    {
      backgroundColor: "gray",
      // color:"red !important"
    },
  "& .css-byenzh-MuiButtonBase-root-MuiSwitch-switchBase": {
    color: "gray",
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Filter() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const dummy = ["Twenty", "red", "blue"];

  const [value, setValue] = useState([1000, 9000000]);
  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChangeRadio = (event, newValue) => {
    setValue(newValue);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    console.log(e.target.selector.value);
  };
  const { width, height } = useWindowDimensions();
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="mainContainer">
      <CenterModal
        isOpen={openFilter}
        onDismiss={() => {
          setOpenFilter(false);
        }}
        overlayProps={{
          style: {
            zIndex: 1000,
            background: "#D9D9D991",
          },
        }}
        contentProps={{
          style: {
            padding: 0,
            borderRadius: "20px",
            background: "#FFFFFFE5",
            height: "70vh",
            width: "60vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "#AA0002 solid 2px ",
          },
        }}
      >
           <form className="filter_box" onSubmit={handleFilter}>
            <div className="filte_brand" style={{ direction: "rtl" }}>
              <AddInput
                style={{ direction: "rtl" }}
                variant="standard"
                sx={{ m: 1, width: "100%" }}
              >
                <InputLabel
                  style={{ direction: "rtl" }}
                  id="demo-simple-select-standard-label"
                >
                  برند
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="رنگ"
                  name="selector"
                >
                  <MenuItem value="" dir="rtl">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem dir="rtl" value={10}>
                    Ten
                  </MenuItem>
                  <MenuItem dir="rtl" value={20}>
                    Twenty
                  </MenuItem>
                  <MenuItem dir="rtl" value={30}>
                    Thirty
                  </MenuItem>
                </Select>
              </AddInput>
            </div>
            <div className="filte_color">
              <AddInput
                style={{ direction: "rtl" }}
                variant="standard"
                sx={{ m: 1, width: "100%" }}
              >
                <InputLabel
                  style={{ direction: "rtl" }}
                  id="demo-simple-select-standard-label"
                >
                  رنگ
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="رنگ"
                >
                  <MenuItem dir="rtl" value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem dir="rtl" value={10}>
                    Ten
                  </MenuItem>
                  <MenuItem dir="rtl" value={20}>
                    Twenty
                  </MenuItem>
                  <MenuItem dir="rtl" value={30}>
                    Thirty
                  </MenuItem>
                </Select>
              </AddInput>
            </div>
            <div className="filter_price_range">
              <p className="filter_price_range_title">محدوده قیمت</p>
              <div className="filter_min_price">
                <span>از</span>
                <span>
                  <NumericFormat
                    value={value[0]}
                    thousandSeparator=","
                    displayType="input"
                    renderText={(value) => value}
                    className="input_price"
                  />
                </span>
                <span>تومان</span>
              </div>
              <div className="filter_max_price">
                <span>تا</span>
                <span>
                  <NumericFormat
                    value={value[1]}
                    thousandSeparator=","
                    displayType="input"
                    renderText={(value) => value}
                    className="input_price"
                  />
                </span>
                <span>تومان</span>
              </div>
              <div className="filter_radio_price">
                <Box sx={{ width: "90%", margin: "auto" }}>
                  <Slider
                    getAriaLabel={() => " range"}
                    value={value}
                    onChange={handleChangeRadio}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={10000000}
                    step={100000}
                  />
                </Box>
              </div>
            </div>
            <div className="amount_filter_product">
              <span>نمایش موجودی</span>
              <span>
                <AddSwitch {...label} defaultChecked />
              </span>
            </div>
            <div className="filter_type_product">نوع</div>
            <div className="OS">سیستم عامل</div>
            <div className="submit_filter_container">
              <button className="submit_filter" type="submit">
                اعمال فیلتر
              </button>
            </div>
          </form>
      </CenterModal>
      {width > 800 && (
        <div className="coassist">
          <svg
            width="50"
            height="50"
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
            width="50"
            height="50"
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
      )}
      <Header />
      <div className="filter_icon" onClick={() => setOpenFilter(true)}>
        <LuFilter />
      </div>
      <br />
      <br />
      <br />
      <div className="mainContent">
        <div className="filterd_product_container">
          <div className="product_container">
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
            <div className="product_item">
              <div className="product_img">
                <img src={laptop} />
              </div>
              <br />
              <div className="product_description">
                لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506HF-HN014-i5
                11400H 16GB 512SSD RTX2050 - کاستوم شده
              </div>
              <br />
              <div className="product_add">
                <span>42,900,000 تومان</span>
                <div className="add_shop_list">
                  <span>افزودن به سبد خرید</span>
                  <span className="add_shopList_icon">
                    <svg
                      width="26"
                      height="26"
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
                  </span>
                </div>
              </div>
            </div>
          </div>
          <form className="filter_box" onSubmit={handleFilter}>
            <div className="filte_brand" style={{ direction: "rtl" }}>
              <AddInput
                style={{ direction: "rtl" }}
                variant="standard"
                sx={{ m: 1, width: "100%" }}
              >
                <InputLabel
                  style={{ direction: "rtl" }}
                  id="demo-simple-select-standard-label"
                >
                  برند
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="رنگ"
                  name="selector"
                >
                  <MenuItem value="" dir="rtl">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem dir="rtl" value={10}>
                    Ten
                  </MenuItem>
                  <MenuItem dir="rtl" value={20}>
                    Twenty
                  </MenuItem>
                  <MenuItem dir="rtl" value={30}>
                    Thirty
                  </MenuItem>
                </Select>
              </AddInput>
            </div>
            <div className="filte_color">
              <AddInput
                style={{ direction: "rtl" }}
                variant="standard"
                sx={{ m: 1, width: "100%" }}
              >
                <InputLabel
                  style={{ direction: "rtl" }}
                  id="demo-simple-select-standard-label"
                >
                  رنگ
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="رنگ"
                >
                  <MenuItem dir="rtl" value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem dir="rtl" value={10}>
                    Ten
                  </MenuItem>
                  <MenuItem dir="rtl" value={20}>
                    Twenty
                  </MenuItem>
                  <MenuItem dir="rtl" value={30}>
                    Thirty
                  </MenuItem>
                </Select>
              </AddInput>
            </div>
            <div className="filter_price_range">
              <p className="filter_price_range_title">محدوده قیمت</p>
              <div className="filter_min_price">
                <span>از</span>
                <span>
                  <NumericFormat
                    value={value[0]}
                    thousandSeparator=","
                    displayType="input"
                    renderText={(value) => value}
                    className="input_price"
                  />
                </span>
                <span>تومان</span>
              </div>
              <div className="filter_max_price">
                <span>تا</span>
                <span>
                  <NumericFormat
                    value={value[1]}
                    thousandSeparator=","
                    displayType="input"
                    renderText={(value) => value}
                    className="input_price"
                  />
                </span>
                <span>تومان</span>
              </div>
              <div className="filter_radio_price">
                <Box sx={{ width: "90%", margin: "auto" }}>
                  <Slider
                    getAriaLabel={() => " range"}
                    value={value}
                    onChange={handleChangeRadio}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={10000000}
                    step={100000}
                  />
                </Box>
              </div>
            </div>
            <div className="amount_filter_product">
              <span>نمایش موجودی</span>
              <span>
                <AddSwitch {...label} defaultChecked />
              </span>
            </div>
            <div className="filter_type_product">نوع</div>
            <div className="OS">سیستم عامل</div>
            <div className="submit_filter_container">
              <button className="submit_filter" type="submit">
                اعمال فیلتر
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="product_description">
        مروزه یک تلفن همراه عالی جای دوربین را می‌گیرد، افراد را در حین رانندگی
        مطلع و سرگرم می‌کند و تا هنگامی که به خانه برسند باتری کافی دارد و خاموش
        نمی‌شود. اما یافتن مدلی که بتواند از همه نظر موفق باشد آسان نیست. با
        افزایش قیمت‌ها، انتخاب موبایل هوشمند بیش از هر زمان دیگر سخت شده است و
        مهم است که پول خود را عاقلانه صرف یک گوشی بادوام کرد. برندهای معتبر
        تولیدکننده انواع گوشی موبایل تلفن‌های ممتاز موجود در بازار ایران در حال
        حاضر شامل گوشی‌های برندهای اپل، سامسونگ، شیائومی و هواوی هستند که برای
        ساده‌ترین یکی از آن‌ها هم باید حداقل چند میلیون هزینه کرد. گوشی‌های این
        برندها با صفحه نمایش بزرگ، ساخت ممتاز و آخرین ویژگی‌ها - ازجمله تشخیص
        چهره، شارژ سریع، شارژ بی‌سیم و ضد آب بودن - ارائه می‌شوند. برندهای اپل و
        سامسونگ هر ساله بهترین گوشی‌های خود را با عنوان پرچم‌دار راهی بازار
        می‌کنند که از بهترین امکانات پشتیبانی می‌کنند و دوربین‌های بسیار خوبی
        دارند. دوربین‌های گوشی‌های پرچم‌دار قابل رقابت و مقایسه با دوربین‌های
        شرکت‌های تولیدکننده‌ی دوربین عکاسی و فیلم‌برداری هستند. اگر برای فردی
        دوربین چندان مهم نباشد، گوشی‌های میان رده بهترین انتخاب هستند مانند گوشی
        موبایل هواوی که دارای صفحه نمایش خوب، عمر باتری بالا و طیف وسیعی از
        ویژگی‌های مفید. ضمن اینکه قیمت بسیار بالایی هم ندارند. iOS یا Android؟
        بهتر است پیش از خرید به میزان بودجه، نیازهای خود از خرید گوشی موبایل و
        امکانات هر گوشی بسیار توجه کرد. یکی از سؤال‌هایی که باید پیش از خرید
        گوشی موبایل از خود پرسید این است که کدام سیستم‌عامل بهتر است؟ iOS یا
        Android؟ سیستم‌عامل (iOS) نرم‌افزاری است
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="merchandiseDataContainer">
        <div style={{ display: "flex" }}>
          <button className="merchandiseDataBtn">خواندنی‌ها</button>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <div className="merchandiseDataIssues">
            <div className="DataIssue">
              <div className="imgContainer">
                <img src="./60138a1dd9c377e966222e080da79199.jpeg" alt="" />
              </div>
              <div className="textContainer">
                <h4>بررسی لپ‌تاپ ایسر Swift Go 14؛ به شدت پرتابل و قدرتمند</h4>
                <p>
                  این لپ‌تاپ با وجود استفاده از نمایشگر ۱۴ اینچی، بسیار کوچک و
                  پرتابل محسوب می‌شود. بیشتر نمایشگرهای لپ‌تاپ‌ها مبتنی بر پنل
                  IPS هستند ولی لپ‌تاپ ایسر Swift Go 14 از نمایشگر OLED با
                  رزولوشن ۲۸۸۰ در ۱۸۰۰ بهره می‌برد. رفرش‌ریت نمایشگر به ۹۰ هرتز
                  می‌رسد و روشنایی ۵۰۰ نیت می‌تواند برای بسیاری از محیط‌ها کافی
                  باشد. این مدل از لپ‌تاپ، از پردازنده اینتل اولترا ۵ ۱۲۵H بهره
                  می‌برد و در کنار آن ۱۶ گیگابایت رم DDR5 استفاده شده است. با
                  وجود اینکه از گرافیک جداگانه برای آن استفاده نشده، ولی گرافیک
                  داخلی پردازنده به حدی قدرتمند است که می‌توانید بیشتر بازی‌ها
                  را اجرا کنید. این لپ‌تاپ مناسب کاربرانی است که می‌خواهند
                  ساعت‌های زیادی از لپ‌تاپ قدرتمند و پرتابل با خیال راحت استفاده
                  کنند.
                </p>
              </div>
            </div>
            <div className="DataIssue">
              <div className="imgContainer">
                <img src="./60138a1dd9c377e966222e080da79199.jpeg" alt="" />
              </div>
              <div className="textContainer">
                <h4>بررسی لپ‌تاپ ایسر Swift Go 14؛ به شدت پرتابل و قدرتمند</h4>
                <p>
                  این لپ‌تاپ با وجود استفاده از نمایشگر ۱۴ اینچی، بسیار کوچک و
                  پرتابل محسوب می‌شود. بیشتر نمایشگرهای لپ‌تاپ‌ها مبتنی بر پنل
                  IPS هستند ولی لپ‌تاپ ایسر Swift Go 14 از نمایشگر OLED با
                  رزولوشن ۲۸۸۰ در ۱۸۰۰ بهره می‌برد. رفرش‌ریت نمایشگر به ۹۰ هرتز
                  می‌رسد و روشنایی ۵۰۰ نیت می‌تواند برای بسیاری از محیط‌ها کافی
                  باشد. این مدل از لپ‌تاپ، از پردازنده اینتل اولترا ۵ ۱۲۵H بهره
                  می‌برد و در کنار آن ۱۶ گیگابایت رم DDR5 استفاده شده است. با
                  وجود اینکه از گرافیک جداگانه برای آن استفاده نشده، ولی گرافیک
                  داخلی پردازنده به حدی قدرتمند است که می‌توانید بیشتر بازی‌ها
                  را اجرا کنید. این لپ‌تاپ مناسب کاربرانی است که می‌خواهند
                  ساعت‌های زیادی از لپ‌تاپ قدرتمند و پرتابل با خیال راحت استفاده
                  کنند.
                </p>
              </div>
            </div>
            <div className="DataIssue">
              <div className="imgContainer">
                <img src="./60138a1dd9c377e966222e080da79199.jpeg" alt="" />
              </div>
              <div className="textContainer">
                <h4>بررسی لپ‌تاپ ایسر Swift Go 14؛ به شدت پرتابل و قدرتمند</h4>
                <p>
                  این لپ‌تاپ با وجود استفاده از نمایشگر ۱۴ اینچی، بسیار کوچک و
                  پرتابل محسوب می‌شود. بیشتر نمایشگرهای لپ‌تاپ‌ها مبتنی بر پنل
                  IPS هستند ولی لپ‌تاپ ایسر Swift Go 14 از نمایشگر OLED با
                  رزولوشن ۲۸۸۰ در ۱۸۰۰ بهره می‌برد. رفرش‌ریت نمایشگر به ۹۰ هرتز
                  می‌رسد و روشنایی ۵۰۰ نیت می‌تواند برای بسیاری از محیط‌ها کافی
                  باشد. این مدل از لپ‌تاپ، از پردازنده اینتل اولترا ۵ ۱۲۵H بهره
                  می‌برد و در کنار آن ۱۶ گیگابایت رم DDR5 استفاده شده است. با
                  وجود اینکه از گرافیک جداگانه برای آن استفاده نشده، ولی گرافیک
                  داخلی پردازنده به حدی قدرتمند است که می‌توانید بیشتر بازی‌ها
                  را اجرا کنید. این لپ‌تاپ مناسب کاربرانی است که می‌خواهند
                  ساعت‌های زیادی از لپ‌تاپ قدرتمند و پرتابل با خیال راحت استفاده
                  کنند.
                </p>
              </div>
            </div>
          </div>
          <div className="merchandiseDataImg">
            <div style={{ margin: "auto auto 0 auto", zIndex: 10 }}>
              <h5>بررسی لپ‌تاپ ایسر Swift Go 14؛ به شدت پرتابل و قدرتمند</h5>
              <p>
                این لپ‌تاپ با وجود استفاده از نمایشگر ۱۴ اینچی، بسیار کوچک و
                پرتابل محسوب می‌شود. بیشتر نمایشگرهای لپ‌تاپ‌ها مبتنی بر پنل IPS
                هستند ولی لپ‌تاپ ایسر Swift Go 14 از نمایشگر OLED با رزولوشن
                ۲۸۸۰ در ۱۸۰۰ بهره می‌برد. رفرش‌ریت نمایشگر به ۹۰ هرتز می‌رسد و
                روشنایی ۵۰۰ نیت می‌تواند برای بسیاری از محیط‌ها کافی باشد. این
                مدل از لپ‌تاپ، از پردازنده اینتل اولترا ۵ ۱۲۵H بهره می‌برد و در
                کنار آن ۱۶ گیگابایت رم DDR5 استفاده شده است. با وجود اینکه از
                گرافیک جداگانه برای آن استفاده نشده، ولی گرافیک داخلی پردازنده
                به حدی قدرتمند است که می‌توانید بیشتر بازی‌ها را اجرا کنید. این
                لپ‌تاپ مناسب کاربرانی است که می‌خواهند ساعت‌های زیادی از لپ‌تاپ
                قدرتمند و پرتابل با خیال راحت استفاده کنند.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React, { useState } from "react";
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
const AddInput = styled(FormControl)(({ theme }) => ({
  direction: "rtl",
  fontFamily: "revert-layer",
  border: "none",
  "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
    left: "0",
    right:"90%"
  },
    "& .css-1mf6u8l-MuiSvgIcon-root-MuiSelect-icon": {
    left: "0",
    right:"90%"
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
  },
    "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root  ": {
    right: "0",
    transformOrigin: "top right",
  },
}));


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


const handleFilter = (e)=>{
e.preventDefault()
console.log(e.target.selector.value)
}

  return (
    <div className="mainContainer">
      <Header />
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
                      <g clip-path="url(#clip0_198_119)">
                        <path
                          d="M24.6058 4.41675C24.301 4.05106 23.9195 3.75695 23.4883 3.5553C23.0571 3.35365 22.5868 3.24942 22.1108 3.25H4.5955L4.55 2.86975C4.45689 2.07937 4.077 1.35063 3.48236 0.821684C2.88773 0.292742 2.11968 0.000370276 1.32383 0L1.08333 0C0.796016 0 0.520465 0.114137 0.317301 0.317301C0.114137 0.520465 0 0.796016 0 1.08333C0 1.37065 0.114137 1.6462 0.317301 1.84937C0.520465 2.05253 0.796016 2.16667 1.08333 2.16667H1.32383C1.58918 2.1667 1.84528 2.26412 2.04357 2.44044C2.24186 2.61676 2.36854 2.85973 2.39958 3.12325L3.89025 15.7983C4.04501 17.1164 4.67835 18.3319 5.67007 19.214C6.66178 20.0961 7.94284 20.5834 9.27008 20.5833H20.5833C20.8707 20.5833 21.1462 20.4692 21.3494 20.266C21.5525 20.0629 21.6667 19.7873 21.6667 19.5C21.6667 19.2127 21.5525 18.9371 21.3494 18.734C21.1462 18.5308 20.8707 18.4167 20.5833 18.4167H9.27008C8.59956 18.4148 7.94603 18.2055 7.3991 17.8176C6.85216 17.4298 6.43859 16.8822 6.21508 16.25H19.1284C20.3984 16.2501 21.628 15.8039 22.6025 14.9895C23.5769 14.175 24.2342 13.0441 24.4595 11.7943L25.3099 7.07742C25.3948 6.60942 25.3757 6.12849 25.254 5.66869C25.1323 5.20889 24.911 4.78148 24.6058 4.41675ZM23.1833 6.69283L22.3318 11.4097C22.1966 12.1604 21.8015 12.8397 21.2159 13.3285C20.6302 13.8173 19.8913 14.0845 19.1284 14.0833H5.87058L4.85117 5.41667H22.1108C22.27 5.41572 22.4274 5.44984 22.5718 5.51661C22.7163 5.58338 22.8443 5.68116 22.9467 5.80299C23.049 5.92482 23.1233 6.06772 23.1642 6.22152C23.2051 6.37531 23.2117 6.53623 23.1833 6.69283Z"
                          fill="black"
                        />
                        <path
                          d="M7.58341 26.0001C8.78003 26.0001 9.75008 25.03 9.75008 23.8334C9.75008 22.6368 8.78003 21.6667 7.58341 21.6667C6.3868 21.6667 5.41675 22.6368 5.41675 23.8334C5.41675 25.03 6.3868 26.0001 7.58341 26.0001Z"
                          fill="black"
                        />
                        <path
                          d="M18.4167 26.0001C19.6133 26.0001 20.5833 25.03 20.5833 23.8334C20.5833 22.6368 19.6133 21.6667 18.4167 21.6667C17.22 21.6667 16.25 22.6368 16.25 23.8334C16.25 25.03 17.22 26.0001 18.4167 26.0001Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_198_119">
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
                      <g clip-path="url(#clip0_198_119)">
                        <path
                          d="M24.6058 4.41675C24.301 4.05106 23.9195 3.75695 23.4883 3.5553C23.0571 3.35365 22.5868 3.24942 22.1108 3.25H4.5955L4.55 2.86975C4.45689 2.07937 4.077 1.35063 3.48236 0.821684C2.88773 0.292742 2.11968 0.000370276 1.32383 0L1.08333 0C0.796016 0 0.520465 0.114137 0.317301 0.317301C0.114137 0.520465 0 0.796016 0 1.08333C0 1.37065 0.114137 1.6462 0.317301 1.84937C0.520465 2.05253 0.796016 2.16667 1.08333 2.16667H1.32383C1.58918 2.1667 1.84528 2.26412 2.04357 2.44044C2.24186 2.61676 2.36854 2.85973 2.39958 3.12325L3.89025 15.7983C4.04501 17.1164 4.67835 18.3319 5.67007 19.214C6.66178 20.0961 7.94284 20.5834 9.27008 20.5833H20.5833C20.8707 20.5833 21.1462 20.4692 21.3494 20.266C21.5525 20.0629 21.6667 19.7873 21.6667 19.5C21.6667 19.2127 21.5525 18.9371 21.3494 18.734C21.1462 18.5308 20.8707 18.4167 20.5833 18.4167H9.27008C8.59956 18.4148 7.94603 18.2055 7.3991 17.8176C6.85216 17.4298 6.43859 16.8822 6.21508 16.25H19.1284C20.3984 16.2501 21.628 15.8039 22.6025 14.9895C23.5769 14.175 24.2342 13.0441 24.4595 11.7943L25.3099 7.07742C25.3948 6.60942 25.3757 6.12849 25.254 5.66869C25.1323 5.20889 24.911 4.78148 24.6058 4.41675ZM23.1833 6.69283L22.3318 11.4097C22.1966 12.1604 21.8015 12.8397 21.2159 13.3285C20.6302 13.8173 19.8913 14.0845 19.1284 14.0833H5.87058L4.85117 5.41667H22.1108C22.27 5.41572 22.4274 5.44984 22.5718 5.51661C22.7163 5.58338 22.8443 5.68116 22.9467 5.80299C23.049 5.92482 23.1233 6.06772 23.1642 6.22152C23.2051 6.37531 23.2117 6.53623 23.1833 6.69283Z"
                          fill="black"
                        />
                        <path
                          d="M7.58341 26.0001C8.78003 26.0001 9.75008 25.03 9.75008 23.8334C9.75008 22.6368 8.78003 21.6667 7.58341 21.6667C6.3868 21.6667 5.41675 22.6368 5.41675 23.8334C5.41675 25.03 6.3868 26.0001 7.58341 26.0001Z"
                          fill="black"
                        />
                        <path
                          d="M18.4167 26.0001C19.6133 26.0001 20.5833 25.03 20.5833 23.8334C20.5833 22.6368 19.6133 21.6667 18.4167 21.6667C17.22 21.6667 16.25 22.6368 16.25 23.8334C16.25 25.03 17.22 26.0001 18.4167 26.0001Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_198_119">
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
                      <g clip-path="url(#clip0_198_119)">
                        <path
                          d="M24.6058 4.41675C24.301 4.05106 23.9195 3.75695 23.4883 3.5553C23.0571 3.35365 22.5868 3.24942 22.1108 3.25H4.5955L4.55 2.86975C4.45689 2.07937 4.077 1.35063 3.48236 0.821684C2.88773 0.292742 2.11968 0.000370276 1.32383 0L1.08333 0C0.796016 0 0.520465 0.114137 0.317301 0.317301C0.114137 0.520465 0 0.796016 0 1.08333C0 1.37065 0.114137 1.6462 0.317301 1.84937C0.520465 2.05253 0.796016 2.16667 1.08333 2.16667H1.32383C1.58918 2.1667 1.84528 2.26412 2.04357 2.44044C2.24186 2.61676 2.36854 2.85973 2.39958 3.12325L3.89025 15.7983C4.04501 17.1164 4.67835 18.3319 5.67007 19.214C6.66178 20.0961 7.94284 20.5834 9.27008 20.5833H20.5833C20.8707 20.5833 21.1462 20.4692 21.3494 20.266C21.5525 20.0629 21.6667 19.7873 21.6667 19.5C21.6667 19.2127 21.5525 18.9371 21.3494 18.734C21.1462 18.5308 20.8707 18.4167 20.5833 18.4167H9.27008C8.59956 18.4148 7.94603 18.2055 7.3991 17.8176C6.85216 17.4298 6.43859 16.8822 6.21508 16.25H19.1284C20.3984 16.2501 21.628 15.8039 22.6025 14.9895C23.5769 14.175 24.2342 13.0441 24.4595 11.7943L25.3099 7.07742C25.3948 6.60942 25.3757 6.12849 25.254 5.66869C25.1323 5.20889 24.911 4.78148 24.6058 4.41675ZM23.1833 6.69283L22.3318 11.4097C22.1966 12.1604 21.8015 12.8397 21.2159 13.3285C20.6302 13.8173 19.8913 14.0845 19.1284 14.0833H5.87058L4.85117 5.41667H22.1108C22.27 5.41572 22.4274 5.44984 22.5718 5.51661C22.7163 5.58338 22.8443 5.68116 22.9467 5.80299C23.049 5.92482 23.1233 6.06772 23.1642 6.22152C23.2051 6.37531 23.2117 6.53623 23.1833 6.69283Z"
                          fill="black"
                        />
                        <path
                          d="M7.58341 26.0001C8.78003 26.0001 9.75008 25.03 9.75008 23.8334C9.75008 22.6368 8.78003 21.6667 7.58341 21.6667C6.3868 21.6667 5.41675 22.6368 5.41675 23.8334C5.41675 25.03 6.3868 26.0001 7.58341 26.0001Z"
                          fill="black"
                        />
                        <path
                          d="M18.4167 26.0001C19.6133 26.0001 20.5833 25.03 20.5833 23.8334C20.5833 22.6368 19.6133 21.6667 18.4167 21.6667C17.22 21.6667 16.25 22.6368 16.25 23.8334C16.25 25.03 17.22 26.0001 18.4167 26.0001Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_198_119">
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
                      <g clip-path="url(#clip0_198_119)">
                        <path
                          d="M24.6058 4.41675C24.301 4.05106 23.9195 3.75695 23.4883 3.5553C23.0571 3.35365 22.5868 3.24942 22.1108 3.25H4.5955L4.55 2.86975C4.45689 2.07937 4.077 1.35063 3.48236 0.821684C2.88773 0.292742 2.11968 0.000370276 1.32383 0L1.08333 0C0.796016 0 0.520465 0.114137 0.317301 0.317301C0.114137 0.520465 0 0.796016 0 1.08333C0 1.37065 0.114137 1.6462 0.317301 1.84937C0.520465 2.05253 0.796016 2.16667 1.08333 2.16667H1.32383C1.58918 2.1667 1.84528 2.26412 2.04357 2.44044C2.24186 2.61676 2.36854 2.85973 2.39958 3.12325L3.89025 15.7983C4.04501 17.1164 4.67835 18.3319 5.67007 19.214C6.66178 20.0961 7.94284 20.5834 9.27008 20.5833H20.5833C20.8707 20.5833 21.1462 20.4692 21.3494 20.266C21.5525 20.0629 21.6667 19.7873 21.6667 19.5C21.6667 19.2127 21.5525 18.9371 21.3494 18.734C21.1462 18.5308 20.8707 18.4167 20.5833 18.4167H9.27008C8.59956 18.4148 7.94603 18.2055 7.3991 17.8176C6.85216 17.4298 6.43859 16.8822 6.21508 16.25H19.1284C20.3984 16.2501 21.628 15.8039 22.6025 14.9895C23.5769 14.175 24.2342 13.0441 24.4595 11.7943L25.3099 7.07742C25.3948 6.60942 25.3757 6.12849 25.254 5.66869C25.1323 5.20889 24.911 4.78148 24.6058 4.41675ZM23.1833 6.69283L22.3318 11.4097C22.1966 12.1604 21.8015 12.8397 21.2159 13.3285C20.6302 13.8173 19.8913 14.0845 19.1284 14.0833H5.87058L4.85117 5.41667H22.1108C22.27 5.41572 22.4274 5.44984 22.5718 5.51661C22.7163 5.58338 22.8443 5.68116 22.9467 5.80299C23.049 5.92482 23.1233 6.06772 23.1642 6.22152C23.2051 6.37531 23.2117 6.53623 23.1833 6.69283Z"
                          fill="black"
                        />
                        <path
                          d="M7.58341 26.0001C8.78003 26.0001 9.75008 25.03 9.75008 23.8334C9.75008 22.6368 8.78003 21.6667 7.58341 21.6667C6.3868 21.6667 5.41675 22.6368 5.41675 23.8334C5.41675 25.03 6.3868 26.0001 7.58341 26.0001Z"
                          fill="black"
                        />
                        <path
                          d="M18.4167 26.0001C19.6133 26.0001 20.5833 25.03 20.5833 23.8334C20.5833 22.6368 19.6133 21.6667 18.4167 21.6667C17.22 21.6667 16.25 22.6368 16.25 23.8334C16.25 25.03 17.22 26.0001 18.4167 26.0001Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_198_119">
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
                      <g clip-path="url(#clip0_198_119)">
                        <path
                          d="M24.6058 4.41675C24.301 4.05106 23.9195 3.75695 23.4883 3.5553C23.0571 3.35365 22.5868 3.24942 22.1108 3.25H4.5955L4.55 2.86975C4.45689 2.07937 4.077 1.35063 3.48236 0.821684C2.88773 0.292742 2.11968 0.000370276 1.32383 0L1.08333 0C0.796016 0 0.520465 0.114137 0.317301 0.317301C0.114137 0.520465 0 0.796016 0 1.08333C0 1.37065 0.114137 1.6462 0.317301 1.84937C0.520465 2.05253 0.796016 2.16667 1.08333 2.16667H1.32383C1.58918 2.1667 1.84528 2.26412 2.04357 2.44044C2.24186 2.61676 2.36854 2.85973 2.39958 3.12325L3.89025 15.7983C4.04501 17.1164 4.67835 18.3319 5.67007 19.214C6.66178 20.0961 7.94284 20.5834 9.27008 20.5833H20.5833C20.8707 20.5833 21.1462 20.4692 21.3494 20.266C21.5525 20.0629 21.6667 19.7873 21.6667 19.5C21.6667 19.2127 21.5525 18.9371 21.3494 18.734C21.1462 18.5308 20.8707 18.4167 20.5833 18.4167H9.27008C8.59956 18.4148 7.94603 18.2055 7.3991 17.8176C6.85216 17.4298 6.43859 16.8822 6.21508 16.25H19.1284C20.3984 16.2501 21.628 15.8039 22.6025 14.9895C23.5769 14.175 24.2342 13.0441 24.4595 11.7943L25.3099 7.07742C25.3948 6.60942 25.3757 6.12849 25.254 5.66869C25.1323 5.20889 24.911 4.78148 24.6058 4.41675ZM23.1833 6.69283L22.3318 11.4097C22.1966 12.1604 21.8015 12.8397 21.2159 13.3285C20.6302 13.8173 19.8913 14.0845 19.1284 14.0833H5.87058L4.85117 5.41667H22.1108C22.27 5.41572 22.4274 5.44984 22.5718 5.51661C22.7163 5.58338 22.8443 5.68116 22.9467 5.80299C23.049 5.92482 23.1233 6.06772 23.1642 6.22152C23.2051 6.37531 23.2117 6.53623 23.1833 6.69283Z"
                          fill="black"
                        />
                        <path
                          d="M7.58341 26.0001C8.78003 26.0001 9.75008 25.03 9.75008 23.8334C9.75008 22.6368 8.78003 21.6667 7.58341 21.6667C6.3868 21.6667 5.41675 22.6368 5.41675 23.8334C5.41675 25.03 6.3868 26.0001 7.58341 26.0001Z"
                          fill="black"
                        />
                        <path
                          d="M18.4167 26.0001C19.6133 26.0001 20.5833 25.03 20.5833 23.8334C20.5833 22.6368 19.6133 21.6667 18.4167 21.6667C17.22 21.6667 16.25 22.6368 16.25 23.8334C16.25 25.03 17.22 26.0001 18.4167 26.0001Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_198_119">
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
                      <g clip-path="url(#clip0_198_119)">
                        <path
                          d="M24.6058 4.41675C24.301 4.05106 23.9195 3.75695 23.4883 3.5553C23.0571 3.35365 22.5868 3.24942 22.1108 3.25H4.5955L4.55 2.86975C4.45689 2.07937 4.077 1.35063 3.48236 0.821684C2.88773 0.292742 2.11968 0.000370276 1.32383 0L1.08333 0C0.796016 0 0.520465 0.114137 0.317301 0.317301C0.114137 0.520465 0 0.796016 0 1.08333C0 1.37065 0.114137 1.6462 0.317301 1.84937C0.520465 2.05253 0.796016 2.16667 1.08333 2.16667H1.32383C1.58918 2.1667 1.84528 2.26412 2.04357 2.44044C2.24186 2.61676 2.36854 2.85973 2.39958 3.12325L3.89025 15.7983C4.04501 17.1164 4.67835 18.3319 5.67007 19.214C6.66178 20.0961 7.94284 20.5834 9.27008 20.5833H20.5833C20.8707 20.5833 21.1462 20.4692 21.3494 20.266C21.5525 20.0629 21.6667 19.7873 21.6667 19.5C21.6667 19.2127 21.5525 18.9371 21.3494 18.734C21.1462 18.5308 20.8707 18.4167 20.5833 18.4167H9.27008C8.59956 18.4148 7.94603 18.2055 7.3991 17.8176C6.85216 17.4298 6.43859 16.8822 6.21508 16.25H19.1284C20.3984 16.2501 21.628 15.8039 22.6025 14.9895C23.5769 14.175 24.2342 13.0441 24.4595 11.7943L25.3099 7.07742C25.3948 6.60942 25.3757 6.12849 25.254 5.66869C25.1323 5.20889 24.911 4.78148 24.6058 4.41675ZM23.1833 6.69283L22.3318 11.4097C22.1966 12.1604 21.8015 12.8397 21.2159 13.3285C20.6302 13.8173 19.8913 14.0845 19.1284 14.0833H5.87058L4.85117 5.41667H22.1108C22.27 5.41572 22.4274 5.44984 22.5718 5.51661C22.7163 5.58338 22.8443 5.68116 22.9467 5.80299C23.049 5.92482 23.1233 6.06772 23.1642 6.22152C23.2051 6.37531 23.2117 6.53623 23.1833 6.69283Z"
                          fill="black"
                        />
                        <path
                          d="M7.58341 26.0001C8.78003 26.0001 9.75008 25.03 9.75008 23.8334C9.75008 22.6368 8.78003 21.6667 7.58341 21.6667C6.3868 21.6667 5.41675 22.6368 5.41675 23.8334C5.41675 25.03 6.3868 26.0001 7.58341 26.0001Z"
                          fill="black"
                        />
                        <path
                          d="M18.4167 26.0001C19.6133 26.0001 20.5833 25.03 20.5833 23.8334C20.5833 22.6368 19.6133 21.6667 18.4167 21.6667C17.22 21.6667 16.25 22.6368 16.25 23.8334C16.25 25.03 17.22 26.0001 18.4167 26.0001Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_198_119">
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
                      <g clip-path="url(#clip0_198_119)">
                        <path
                          d="M24.6058 4.41675C24.301 4.05106 23.9195 3.75695 23.4883 3.5553C23.0571 3.35365 22.5868 3.24942 22.1108 3.25H4.5955L4.55 2.86975C4.45689 2.07937 4.077 1.35063 3.48236 0.821684C2.88773 0.292742 2.11968 0.000370276 1.32383 0L1.08333 0C0.796016 0 0.520465 0.114137 0.317301 0.317301C0.114137 0.520465 0 0.796016 0 1.08333C0 1.37065 0.114137 1.6462 0.317301 1.84937C0.520465 2.05253 0.796016 2.16667 1.08333 2.16667H1.32383C1.58918 2.1667 1.84528 2.26412 2.04357 2.44044C2.24186 2.61676 2.36854 2.85973 2.39958 3.12325L3.89025 15.7983C4.04501 17.1164 4.67835 18.3319 5.67007 19.214C6.66178 20.0961 7.94284 20.5834 9.27008 20.5833H20.5833C20.8707 20.5833 21.1462 20.4692 21.3494 20.266C21.5525 20.0629 21.6667 19.7873 21.6667 19.5C21.6667 19.2127 21.5525 18.9371 21.3494 18.734C21.1462 18.5308 20.8707 18.4167 20.5833 18.4167H9.27008C8.59956 18.4148 7.94603 18.2055 7.3991 17.8176C6.85216 17.4298 6.43859 16.8822 6.21508 16.25H19.1284C20.3984 16.2501 21.628 15.8039 22.6025 14.9895C23.5769 14.175 24.2342 13.0441 24.4595 11.7943L25.3099 7.07742C25.3948 6.60942 25.3757 6.12849 25.254 5.66869C25.1323 5.20889 24.911 4.78148 24.6058 4.41675ZM23.1833 6.69283L22.3318 11.4097C22.1966 12.1604 21.8015 12.8397 21.2159 13.3285C20.6302 13.8173 19.8913 14.0845 19.1284 14.0833H5.87058L4.85117 5.41667H22.1108C22.27 5.41572 22.4274 5.44984 22.5718 5.51661C22.7163 5.58338 22.8443 5.68116 22.9467 5.80299C23.049 5.92482 23.1233 6.06772 23.1642 6.22152C23.2051 6.37531 23.2117 6.53623 23.1833 6.69283Z"
                          fill="black"
                        />
                        <path
                          d="M7.58341 26.0001C8.78003 26.0001 9.75008 25.03 9.75008 23.8334C9.75008 22.6368 8.78003 21.6667 7.58341 21.6667C6.3868 21.6667 5.41675 22.6368 5.41675 23.8334C5.41675 25.03 6.3868 26.0001 7.58341 26.0001Z"
                          fill="black"
                        />
                        <path
                          d="M18.4167 26.0001C19.6133 26.0001 20.5833 25.03 20.5833 23.8334C20.5833 22.6368 19.6133 21.6667 18.4167 21.6667C17.22 21.6667 16.25 22.6368 16.25 23.8334C16.25 25.03 17.22 26.0001 18.4167 26.0001Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_198_119">
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
                      <g clip-path="url(#clip0_198_119)">
                        <path
                          d="M24.6058 4.41675C24.301 4.05106 23.9195 3.75695 23.4883 3.5553C23.0571 3.35365 22.5868 3.24942 22.1108 3.25H4.5955L4.55 2.86975C4.45689 2.07937 4.077 1.35063 3.48236 0.821684C2.88773 0.292742 2.11968 0.000370276 1.32383 0L1.08333 0C0.796016 0 0.520465 0.114137 0.317301 0.317301C0.114137 0.520465 0 0.796016 0 1.08333C0 1.37065 0.114137 1.6462 0.317301 1.84937C0.520465 2.05253 0.796016 2.16667 1.08333 2.16667H1.32383C1.58918 2.1667 1.84528 2.26412 2.04357 2.44044C2.24186 2.61676 2.36854 2.85973 2.39958 3.12325L3.89025 15.7983C4.04501 17.1164 4.67835 18.3319 5.67007 19.214C6.66178 20.0961 7.94284 20.5834 9.27008 20.5833H20.5833C20.8707 20.5833 21.1462 20.4692 21.3494 20.266C21.5525 20.0629 21.6667 19.7873 21.6667 19.5C21.6667 19.2127 21.5525 18.9371 21.3494 18.734C21.1462 18.5308 20.8707 18.4167 20.5833 18.4167H9.27008C8.59956 18.4148 7.94603 18.2055 7.3991 17.8176C6.85216 17.4298 6.43859 16.8822 6.21508 16.25H19.1284C20.3984 16.2501 21.628 15.8039 22.6025 14.9895C23.5769 14.175 24.2342 13.0441 24.4595 11.7943L25.3099 7.07742C25.3948 6.60942 25.3757 6.12849 25.254 5.66869C25.1323 5.20889 24.911 4.78148 24.6058 4.41675ZM23.1833 6.69283L22.3318 11.4097C22.1966 12.1604 21.8015 12.8397 21.2159 13.3285C20.6302 13.8173 19.8913 14.0845 19.1284 14.0833H5.87058L4.85117 5.41667H22.1108C22.27 5.41572 22.4274 5.44984 22.5718 5.51661C22.7163 5.58338 22.8443 5.68116 22.9467 5.80299C23.049 5.92482 23.1233 6.06772 23.1642 6.22152C23.2051 6.37531 23.2117 6.53623 23.1833 6.69283Z"
                          fill="black"
                        />
                        <path
                          d="M7.58341 26.0001C8.78003 26.0001 9.75008 25.03 9.75008 23.8334C9.75008 22.6368 8.78003 21.6667 7.58341 21.6667C6.3868 21.6667 5.41675 22.6368 5.41675 23.8334C5.41675 25.03 6.3868 26.0001 7.58341 26.0001Z"
                          fill="black"
                        />
                        <path
                          d="M18.4167 26.0001C19.6133 26.0001 20.5833 25.03 20.5833 23.8334C20.5833 22.6368 19.6133 21.6667 18.4167 21.6667C17.22 21.6667 16.25 22.6368 16.25 23.8334C16.25 25.03 17.22 26.0001 18.4167 26.0001Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_198_119">
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
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
            <div className="amount_filter_product">نمایش موجودی</div>
            <div className="filter_type_product">نوع</div>
            <div className="">سیستم عامل</div>
            <div className="submit_filter_container">
              <button className="submit_filter" type="submit">اعمال فیلتر</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import React, { useEffect, useRef, useState } from "react";
import "../css/Profile.scss";
import defaultImg from "../css/images/Ellipse 13.svg";
import map_img from "../css/images/image 1.svg";
import Scrollbars from "react-custom-scrollbars-2";
import { CenterModal } from "react-spring-modal";
import useWindowDimensions from "../wedgits/useWindowDimensions";
import Maping from "../wedgits/Maping";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { alpha, styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { baseicSchema } from "../wedgits/schemas";
import sample from "../css/images/Frame 13 (1).png";
import { NumericFormat } from "react-number-format";

const CompleteField = styled(Autocomplete)(({ theme }) => ({
  direction: "rtl",
  boxShadow: "0px 0px 17.3px 0px #0000001a",
  outline: "none !important",
  borderRadius: "5px",
  "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {},
  "& input": {
    padding: "0 !important",
    boxShadow: "none !important",
    fontSize: "0.8rem",
  },
  "& .MuiOutlinedInput-root": {
    padding: "0",
  },
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

export default function () {
  const { width, height } = useWindowDimensions();
  const selectNav = useRef(null);
  const [selectedNav, setSelectedNav] = useState("orders");
  const [selectedOrder, setSelectedOrder] = useState("current");
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [LocationData, setLocationData] = useState(null);
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const [openInputs, setOpenInputs] = useState(false);
  const [slectedProvince, setSelectedProvince] = useState(null);
  const [slectedCity, setSelectedCity] = useState(null);

  const onSubmit = () => {
    console.log("first");
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      provinces: "",
      city: "",
      neighbourhood: "",
      street: "",
      block: "",
      floor: "",
      post_code: "",
      phone_number: "",
      resiver: "",
    },
    validationSchema: baseicSchema,
    onSubmit,
  });

  let iranCity = require("iran-city");
  let AllCities = iranCity.allCities();
  let AllProvinces = iranCity.allProvinces();
  let CitiesOfProvince = iranCity.citiesOfProvince(11);
  // console.log(AllCities);
  // console.log(AllProvinces);
  // console.log(CitiesOfProvince);

  useEffect(() => {});
  return (
    <>
      <CenterModal
        isOpen={openAddressModal}
        onDismiss={() => {
          setOpenAddressModal(false);
        }}
        overlayProps={{
          style: {
            zIndex: 1000,
            background: "#D9D9D991",
            backdropFilter: "blur(3.549999952316284px)",
          },
        }}
        contentProps={{
          style: {
            padding: 0,
            borderRadius: "20px",
            background: "#FFFFFFE5",
            width: "80vw",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "0px 0px 25.7px 0px #00000040",
            height: "60vh",
          },
        }}
      >
        <div className="map_container">
          <h4>انتخاب آدرس از روی نقشه</h4>
          <div className="map_box">
            <Maping
              onsetLocationData={setLocationData}
              onSetOpenAddressModal={setOpenAddressModal}
              onSetOpenInputs={setOpenInputs}
            />
          </div>
        </div>
      </CenterModal>

      <CenterModal
        isOpen={openInputs}
        onDismiss={() => {
          setOpenInputs(false);
        }}
        overlayProps={{
          style: {
            zIndex: 1000,
            background: "#D9D9D991",
            backdropFilter: "blur(3.549999952316284px)",
          },
        }}
        contentProps={{
          style: {
            padding: 20,
            borderRadius: "20px",
            background: "#FFFFFFE5",
            width: "80vw",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "0px 0px 25.7px 0px #00000040",
            height: "auto",
          },
        }}
      >
        <form className="addressInput_container" onSubmit={handleSubmit}>
          <div className="addressInput">
            <label>استان</label>
            <CompleteField
              id="country-select-demo"
              autoComplete="true"
              sx={{ width: "100%", border: "none" }}
              options={AllProvinces}
              autoHighlight
              getOptionLabel={(option) => option.name}
              onChange={(event, value) => setSelectedProvince(value)}
              renderOption={(props, option, value) => (
                <>
                  <Box
                    component="li"
                    sx={{
                      "& > img": { mr: 2, flexShrink: 0 },
                      direction: "rtl",
                    }}
                    {...props}
                  >
                    {option.name}
                    {/* {option.id} */}
                  </Box>
                </>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    autoComplete: "autofill",
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </div>
          <div className="addressInput">
            <label>شهر</label>
            <CompleteField
              onChange={(event, value) => setSelectedCity(value)}
              id="country-select-demo"
              autoComplete="true"
              sx={{ width: "100%" }}
              options={iranCity?.citiesOfProvince(slectedProvince?.id)}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Box
                  onClick={() => {
                    console.log("first");
                  }}
                  component="li"
                  sx={{
                    "& > img": { mr: 2, flexShrink: 0 },
                    direction: "rtl",
                  }}
                  {...props}
                >
                  {option.name}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    autoComplete: "autofill",
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </div>
          <div className="addressInput">
            <label>محله</label>

            <input
              className={
                errors.neighbourhood && touched.neighbourhood
                  ? "error"
                  : undefined
              }
              id="neighbourhood"
              onChange={handleChange}
              value={values.neighbourhood}
            />
          </div>
          <div className="addressInput">
            <label>خیابان</label>
            <input
              className={errors.street && touched.street ? "error" : undefined}
              id="street"
              onChange={handleChange}
              value={values.street}
            />
          </div>
          <div className="addressInput">
            <label>پلاک</label>
            <input
              className={errors.block && touched.block ? "error" : undefined}
              id="block"
              value={values.block}
              onChange={handleChange}
            />
          </div>
          <div className="addressInput">
            <label>واحد</label>
            <input
              className={errors.floor && touched.floor ? "error" : undefined}
              id="floor"
              onChange={handleChange}
              value={values.floor}
            />
          </div>
          <div className="addressInput">
            <label>کدپستی</label>
            <input
              className={
                errors.post_code && touched.post_code ? "error" : undefined
              }
              id="post_code"
              onChange={handleChange}
              value={values.post_code}
            />
          </div>
          <div className="addressInput">
            <label>شماره همراه گیرنده</label>
            <input
              className={
                errors.phone_number && touched.phone_number
                  ? "error"
                  : undefined
              }
              id="phone_number"
              onChange={handleChange}
              value={values.phone_number}
            />
          </div>
          <div className="addressInput resiver">
            <label>نام گیرنده</label>
            <input
              className={`resiver ${
                errors.resiver && touched.resiver ? "error" : undefined
              }`}
              id="resiver"
              onChange={handleChange}
              value={values.resiver}
            />
          </div>
        </form>
        <button className="submitInfo" onClick={() => {}}>
          ثبت
        </button>
      </CenterModal>

      <CenterModal
        isOpen={showMoreModal}
        onDismiss={() => {
          setShowMoreModal(false);
        }}
        overlayProps={{
          style: {
            zIndex: 1000,
            background: "#D9D9D991",
            backdropFilter: "blur(3.549999952316284px)",
          },
        }}
        contentProps={{
          style: {
            padding: 20,
            borderRadius: "20px",
            background: "#FFFFFFE5",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "0px 0px 25.7px 0px #00000040",
            height: "100vh",
            minWidth: "80%",
          },
        }}
      >
        <div className="more_details">
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            style={{
              height: "100%",
              maxHeight: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
              padding: "10px",
              margin: "auto",
              marginTop: "40px",
              direction: "ltr",
            }}
          >
            <div className="order_products_container">
              <div className="order_products">
                <div className="order_product_item">
                  <img src={sample} alt="عکس محصول" />
                  <div className="order_pr_desc">
                    <p className="order_pr_price">
                      <NumericFormat
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                        value={1231231}
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) => <b>{value}</b>}
                      />
                      تومان
                    </p>
                    <p className="order_desc">
                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                      FX506HF-HN014-i5 11400H 16GB 512SSD RTX2050 - کاستوم شده
                    </p>
                  </div>
                </div>
              </div>

              <div className="order_products">
                <div className="order_product_item">
                  <img src={sample} alt="عکس محصول" />
                  <div className="order_pr_desc">
                    <p className="order_pr_price">
                      <NumericFormat
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                        value={1231231}
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) => <b>{value}</b>}
                      />
                      تومان
                    </p>
                    <p className="order_desc">
                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                      FX506HF-HN014-i5 11400H 16GB 512SSD RTX2050 - کاستوم شده
                    </p>
                  </div>
                </div>
              </div>

              <div className="order_products">
                <div className="order_product_item">
                  <img src={sample} alt="عکس محصول" />
                  <div className="order_pr_desc">
                    <p className="order_pr_price">
                      <NumericFormat
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                        value={1231231}
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) => <b>{value}</b>}
                      />
                      تومان
                    </p>
                    <p className="order_desc">
                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                      FX506HF-HN014-i5 11400H 16GB 512SSD RTX2050 - کاستوم شده
                    </p>
                  </div>
                </div>
              </div>

              <div className="order_products">
                <div className="order_product_item">
                  <img src={sample} alt="عکس محصول" />
                  <div className="order_pr_desc">
                    <p className="order_pr_price">
                      <NumericFormat
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                        value={1231231}
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) => <b>{value}</b>}
                      />
                      تومان
                    </p>
                    <p className="order_desc">
                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                      FX506HF-HN014-i5 11400H 16GB 512SSD RTX2050 - کاستوم شده
                    </p>
                  </div>
                </div>
              </div>

              <div className="order_products">
                <div className="order_product_item">
                  <img src={sample} alt="عکس محصول" />
                  <div className="order_pr_desc">
                    <p className="order_pr_price">
                      <NumericFormat
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                        value={1231231}
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) => <b>{value}</b>}
                      />
                      تومان
                    </p>
                    <p className="order_desc">
                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                      FX506HF-HN014-i5 11400H 16GB 512SSD RTX2050 - کاستوم شده
                    </p>
                  </div>
                </div>
              </div>

              <div className="order_products">
                <div className="order_product_item">
                  <img src={sample} alt="عکس محصول" />
                  <div className="order_pr_desc">
                    <p className="order_pr_price">
                      <NumericFormat
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                        value={1231231}
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) => <b>{value}</b>}
                      />
                      تومان
                    </p>
                    <p className="order_desc">
                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                      FX506HF-HN014-i5 11400H 16GB 512SSD RTX2050 - کاستوم شده
                    </p>
                  </div>
                </div>
              </div>

              <div className="order_products">
                <div className="order_product_item">
                  <img src={sample} alt="عکس محصول" />
                  <div className="order_pr_desc">
                    <p className="order_pr_price">
                      <NumericFormat
                        style={{
                          fontFamily: "inherit",
                          color: "inherit",
                          fontSize: "inherit",
                        }}
                        value={1231231}
                        thousandSeparator=","
                        displayType="text"
                        renderText={(value) => <b>{value}</b>}
                      />
                      تومان
                    </p>
                    <p className="order_desc">
                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                      FX506HF-HN014-i5 11400H 16GB 512SSD RTX2050 - کاستوم شده
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail_desc_container">
              <div className="detail_desc_item">
                <p>وضعیت:</p>
                <p>ارسال شده</p>
              </div>
              <div className="detail_desc_item">
                <p>تحویل گرینده:</p>
                <p>سجاد حسین زاده</p>
              </div>
              <div className="detail_desc_item">
                <p>آدرس:</p>
                <p>بل نلسون ماندلا، بعد از چهارراه جهان کودک، خ. کیش</p>
              </div>
              <div className="detail_desc_item">
                <p>مبلغ سفارش:</p>
                <p>
                  <NumericFormat
                    style={{
                      fontFamily: "inherit",
                      color: "inherit",
                      fontSize: "inherit",
                    }}
                    value={1231231}
                    thousandSeparator=","
                    displayType="text"
                    renderText={(value) => <b>{value}</b>}
                  />
                  تومان
                </p>
              </div>
              <div className="detail_desc_item">
                <p>تخفیف:</p>
                <p>
                  <NumericFormat
                    style={{
                      fontFamily: "inherit",
                      color: "inherit",
                      fontSize: "inherit",
                    }}
                    value={1231231}
                    thousandSeparator=","
                    displayType="text"
                    renderText={(value) => <b>{value}</b>}
                  />
                  تومان
                </p>
              </div>
              <div className="detail_desc_item">
                <p>هزینه ارسال:</p>
                <p>
                  <NumericFormat
                    style={{
                      fontFamily: "inherit",
                      color: "inherit",
                      fontSize: "inherit",
                    }}
                    value={1231231}
                    thousandSeparator=","
                    displayType="text"
                    renderText={(value) => <b>{value}</b>}
                  />
                  تومان
                </p>
              </div>
            </div>
          </Scrollbars>
        </div>
      </CenterModal>

      <div className="mainContainer">
        <div className="mainContent">
          <div className="profile_container">
            <div className="profile_sideBar">
              <div className="avatar">
                <img src={defaultImg} />
                <p>نام کاربری</p>
              </div>
              <div className="navItem">
                <ul ref={selectNav}>
                  <li
                    id="personal"
                    onClick={(e) => setSelectedNav(e.currentTarget.id)}
                    className={selectedNav == "personal" ? "active" : null}
                  >
                    اطلاعات شخصی
                  </li>
                  <li
                    id="wallet"
                    onClick={(e) => setSelectedNav(e.currentTarget.id)}
                    className={selectedNav == "wallet" ? "active" : null}
                  >
                    کیف پول
                  </li>
                  <li
                    id="address"
                    onClick={(e) => setSelectedNav(e.currentTarget.id)}
                    className={selectedNav == "address" ? "active" : null}
                  >
                    مدیریت آدرس ها
                  </li>
                  <li
                    id="orders"
                    onClick={(e) => setSelectedNav(e.currentTarget.id)}
                    className={selectedNav == "orders" ? "active" : null}
                  >
                    سفارشات
                  </li>
                  <li
                    id="contact"
                    onClick={(e) => setSelectedNav(e.currentTarget.id)}
                    className={selectedNav == "contact" ? "active" : null}
                  >
                    تماس با ما
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile_box">
              {selectedNav == "personal" && (
                <div className="personalInfo">
                  <div className="avatar">
                    <img src={defaultImg} />
                    <p>انتخاب نمایه</p>
                  </div>
                  <div className="personalInfo_inputs">
                    <div className="personalInfo_input">
                      <label>نام کاربری</label>
                      <input />
                    </div>
                    <div className="personalInfo_input">
                      <label>نام و نام خانوادگی</label>
                      <input />
                    </div>
                    <div className="personalInfo_input">
                      <label>شماره همراه</label>
                      <input />
                    </div>
                    <div className="personalInfo_input">
                      <label>ایمیل(اختیاری)</label>
                      <input />
                    </div>
                  </div>
                  <button className="submit_profile_edit">ثبت</button>
                </div>
              )}
              {selectedNav == "wallet" && (
                <div className="wallet_container">
                  <div className="wallet_amount">
                    <span>موجودی حساب : </span>
                    <span>23,000,000 تومان</span>
                  </div>
                  <div className="paid_history">
                    <h4>تراکنش ها</h4>
                    <div className="paid_history_title">
                      <p>تاریخ</p>
                      <p>ساعت</p>
                      <p>مبلغ</p>
                      <p>توضیحات</p>
                    </div>

                    <Scrollbars
                      autoHide
                      autoHideTimeout={1000}
                      style={{
                        height: "100%",
                        maxHeight: "70%",
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
                      <div className="paid_history_detail_container">
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                        <div className="paid_history_detail">
                          <p>1403/02/21</p>
                          <p>23:50</p>
                          <p>250,000</p>
                          <p>رسید دیجیتال : 12523654</p>
                        </div>
                      </div>
                    </Scrollbars>
                  </div>
                </div>
              )}
              {selectedNav == "address" && (
                <div className="address_container">
                  <button
                    onClick={() => setOpenAddressModal(true)}
                    className="add_newAddress"
                  >
                    ثبت آدرس جدید
                  </button>
                  <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    style={{
                      height: "100%",
                      maxHeight: "100%",
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
                    <div className="address_box">
                      <div className="address_detail">
                        <h5>عنوان آدرس</h5>
                        <p className="address_text">
                          بل نلسون ماندلا، بعد از چهارراه جهان کودک، خ. کیش
                        </p>
                        <br />

                        <p className="post_code">
                          <span>
                            <svg
                              width="20"
                              height="13"
                              viewBox="0 0 25 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_613_408)">
                                <path
                                  d="M12.4995 17.5663C9.39479 17.5663 6.28891 17.5696 3.18416 17.5663C1.02646 17.563 0.00233869 16.5533 0.00122187 14.4327C0.000105049 10.6465 0.000105049 6.86028 0.00233869 3.07296C0.00345551 1.03372 1.05327 0.0020144 3.13167 0.000915671C9.37915 -0.00128179 15.6266 -0.00128179 21.8741 0.000915671C23.9503 0.000915671 24.9979 1.03372 24.999 3.07736C25.0012 6.88225 25.0012 10.6871 24.999 14.492C24.9979 16.5335 23.9481 17.5641 21.8708 17.5663C18.747 17.5696 15.6233 17.5663 12.4995 17.5663ZM12.475 15.8083C15.6367 15.8083 18.7984 15.8127 21.9601 15.8061C22.9184 15.8039 23.2065 15.527 23.2087 14.5986C23.2165 10.9388 23.2132 7.27889 23.2098 3.62013C23.2098 3.42565 23.2802 3.17185 23.0848 3.05868C22.8446 2.91914 22.6805 3.17185 22.5074 3.28501C19.4707 5.26932 16.4307 7.24813 13.412 9.2588C12.762 9.6917 12.2326 9.6884 11.5849 9.2566C8.59738 7.26571 5.58867 5.30667 2.58107 3.34544C2.37893 3.2136 2.18125 2.90046 1.91545 3.06637C1.68203 3.2125 1.79148 3.54102 1.79037 3.78933C1.78478 7.30306 1.7859 10.8157 1.78702 14.3294C1.78702 15.6127 1.99363 15.8105 3.32264 15.8105C6.37267 15.8116 9.42271 15.8105 12.4739 15.8105L12.475 15.8083ZM3.63647 1.88084C3.76602 1.98082 3.84643 2.05334 3.93578 2.11157C6.56588 3.83548 9.20269 5.5484 11.8205 7.29098C12.3108 7.6173 12.6816 7.62499 13.1752 7.29537C15.6825 5.62201 18.2121 3.98051 20.7305 2.32143C20.9081 2.20496 21.2465 2.11047 21.1828 1.90062C21.1046 1.64351 20.7629 1.76108 20.5373 1.75998C15.1464 1.75449 9.75552 1.75449 4.36463 1.75778C4.14797 1.75778 3.91902 1.71054 3.63758 1.87974L3.63647 1.88084Z"
                                  fill="black"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_613_408">
                                  <rect
                                    width="25"
                                    height="17.5676"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span>کدپستی : 1234567890</span>
                        </p>
                        <p className="phoneNumber">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.8371 25.9333C18.7252 25.9458 17.6483 25.7691 16.6027 25.425C15.6599 25.1147 14.8157 24.6413 13.9778 24.1529C11.7453 22.8513 9.82602 21.2303 8.08413 19.4255C7.11662 18.4232 6.1649 17.4094 5.30357 16.3287C4.18457 14.9248 3.17083 13.4633 2.36717 11.888C1.87495 10.9232 1.4587 9.93371 1.21911 8.88856C1.04336 8.12293 0.951371 7.35231 1.0262 6.56944C1.17082 5.05686 1.74932 3.7156 2.91591 2.604C3.63262 1.92102 4.5118 1.49719 5.50403 1.24343C6.3546 1.0258 7.21594 0.947307 8.09466 1.03556C8.51938 1.07813 8.8553 1.26918 9.1251 1.55948C9.46515 1.92538 9.64593 2.3625 9.76492 2.81976C10.1059 4.13112 10.4533 5.44165 10.699 6.7717C10.7482 7.0375 10.7947 7.30372 10.8404 7.57014C10.8926 7.87457 10.7976 8.13684 10.5645 8.36049C10.3034 8.61072 9.99124 8.79304 9.64593 8.93072C9.20702 9.10598 8.76675 9.27875 8.32876 9.45588C8.24226 9.49077 8.16056 9.53708 8.08116 9.58484C7.8466 9.72605 7.77269 9.91938 7.80724 10.1752C7.89374 10.8127 8.19237 11.3794 8.48757 11.9488C9.31549 13.5451 10.3798 14.9952 11.7352 16.2648C12.5578 17.0354 13.4656 17.714 14.432 18.3304C14.697 18.4994 14.9558 18.6767 15.2176 18.8501C15.4819 19.0252 15.775 19.1446 16.0865 19.2339C16.392 19.3213 16.6473 19.2509 16.8746 19.0586C17.0945 18.8725 17.2645 18.6528 17.411 18.4161C17.6563 18.0195 17.9284 17.6401 18.3052 17.3332C18.4043 17.2526 18.5107 17.1787 18.6197 17.1091C18.8842 16.9401 19.1732 16.9104 19.4798 16.9966C20.2075 17.2011 20.927 17.4227 21.6231 17.7086C22.4865 18.0631 23.3703 18.3775 24.2291 18.7407C24.7174 18.9471 25.1838 19.2017 25.641 19.4621C26.0062 19.6702 26.1737 19.9918 26.1801 20.3926C26.1927 21.1919 25.9767 21.9413 25.6025 22.6555C25.0055 23.7951 24.1284 24.7073 22.9027 25.3245C22.1281 25.7145 21.2899 25.898 20.4094 25.9325C20.2192 25.94 20.0284 25.9335 19.8377 25.9335L19.8371 25.9333Z"
                                stroke="black"
                                stroke-width="1.5"
                              />
                            </svg>
                          </span>
                          <span>شماره تماس : 09363072505</span>
                        </p>
                        <p className="resiver">
                          <span>
                            <svg
                              width="22"
                              height="21"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_615_415)">
                                <path
                                  d="M12.4954 6.6135C15.2046 6.58751 17.4751 8.83324 17.4987 11.561C17.523 14.3836 15.3235 16.6912 12.5858 16.7158C9.82298 16.7397 7.5268 14.5122 7.50385 11.7852C7.48021 8.89086 9.65192 6.64091 12.4954 6.61421V6.6135ZM12.5023 8.29991C10.6741 8.2964 9.18044 9.79871 9.16931 11.6523C9.15819 13.4835 10.6714 15.0217 12.4877 15.0252C14.3159 15.0287 15.8242 13.52 15.8332 11.6791C15.843 9.81908 14.3479 8.30272 12.5023 8.29921V8.29991Z"
                                  fill="black"
                                />
                                <path
                                  d="M21.6669 22.7622C21.6516 23.117 21.4924 23.3826 21.1683 23.5274C20.8213 23.6827 20.5028 23.6082 20.2358 23.3461C19.5042 22.6273 18.6983 22.0103 17.7984 21.522C16.2581 20.6858 14.6115 20.2776 12.866 20.241C11.3696 20.2101 9.91062 20.3921 8.50454 20.931C7.11584 21.4637 5.88987 22.2542 4.8294 23.3032C4.58879 23.5408 4.3162 23.6658 3.98241 23.5878C3.67296 23.5155 3.45739 23.318 3.36977 23.0053C3.28076 22.6849 3.35587 22.4003 3.5916 22.1621C4.6326 21.1109 5.8252 20.2832 7.16244 19.662C9.30772 18.6656 11.565 18.4021 13.8896 18.6122C16.7658 18.8722 19.2358 20.0443 21.322 22.0546C21.5236 22.2485 21.6766 22.4629 21.6662 22.7622H21.6669Z"
                                  fill="black"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_615_415">
                                  <rect
                                    width="25"
                                    height="23.6111"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span>تحویل گیرنده : سجاد حسین زاده</span>
                        </p>
                      </div>
                      <div className="address_map">
                        <button>
                          <span>
                            <svg
                              width="18"
                              height="17"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.5581 0C16.3593 0.0121386 17.039 0.279189 17.6095 0.837567C18.2893 1.51733 18.9691 2.18496 19.6488 2.87686C20.7777 4.01789 20.7899 5.74158 19.661 6.89475C18.9084 7.67162 18.1315 8.42422 17.3789 9.18896C14.3564 12.2115 11.3217 15.2219 8.32348 18.2687C7.70441 18.8877 7.0125 19.2762 6.15066 19.3976C4.96107 19.5675 3.77148 19.786 2.5819 19.9802C1.44086 20.1623 0.336247 19.0577 0.518327 17.9166C0.724684 16.6057 0.955318 15.2826 1.17381 13.9716C1.28306 13.3282 1.59867 12.8063 2.0478 12.3571C5.14315 9.26179 8.23851 6.16643 11.346 3.05894C12.0743 2.33062 12.8026 1.6023 13.531 0.873983C14.1015 0.303466 14.7934 0.0242773 15.5824 0.0121386L15.5581 0ZM12.1714 4.73407C12.1107 4.8069 12.0379 4.90401 11.9651 4.97684C9.08821 7.8537 6.21135 10.7306 3.33449 13.6074C3.116 13.8138 2.97033 14.0566 2.93392 14.36C2.88536 14.7242 2.81253 15.0883 2.75184 15.4525C2.60617 16.3143 2.46051 17.1883 2.31485 18.0744C2.41196 18.0744 2.48479 18.0744 2.55762 18.0623C3.57727 17.9045 4.59691 17.7346 5.6287 17.6132C6.21135 17.5403 6.67262 17.3218 7.08533 16.897C9.9015 14.0566 12.7298 11.2404 15.5581 8.41208C15.6067 8.36353 15.6674 8.32711 15.7159 8.2907C14.5263 7.10111 13.361 5.9358 12.1714 4.74621V4.73407ZM17.039 6.91903C17.4882 6.48204 17.9494 6.03291 18.3986 5.5595C18.7749 5.17106 18.7749 4.60055 18.3986 4.21211C17.6824 3.48379 16.9662 2.75547 16.2257 2.05143C15.8737 1.71155 15.3396 1.67513 14.9876 2.00288C14.4899 2.46414 14.0408 2.98611 13.5795 3.45951C14.7084 4.58841 15.8737 5.75372 17.039 6.91903Z"
                                fill="white"
                              />
                              <path
                                d="M15.0359 18.1594C16.5289 18.1594 18.022 18.1594 19.5029 18.1594C20.0734 18.1594 20.474 18.5357 20.4861 19.0577C20.4861 19.5796 20.0734 19.9924 19.5029 19.9924C16.5168 19.9924 13.5307 19.9924 10.5446 19.9924C10.0348 19.9924 9.64633 19.6646 9.58564 19.2033C9.52494 18.7178 9.80413 18.3051 10.2654 18.1958C10.3625 18.1716 10.4596 18.1716 10.5567 18.1716C12.0498 18.1716 13.5428 18.1716 15.0238 18.1716L15.0359 18.1594Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span> تغییر آدرس</span>
                        </button>
                        <button>
                          <span>
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 19 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.23048 5.44903C1.87854 5.44903 1.563 5.46117 1.24747 5.44903C0.834848 5.42476 0.507178 5.10922 0.434363 4.72087C0.361547 4.28398 0.567858 3.87136 0.968343 3.71359C1.11397 3.65291 1.28388 3.64078 1.44164 3.64078C2.52174 3.64078 3.60184 3.64078 4.68194 3.64078C4.76689 3.64078 4.85184 3.64078 4.94893 3.64078C4.94893 3.34951 4.94893 3.09466 4.94893 2.82767C4.94893 1.18932 6.13825 0 7.78873 0C8.95378 0 10.131 0 11.296 0C12.6188 0 13.7111 0.89806 13.9781 2.1966C14.0266 2.41505 14.0266 2.64563 14.0387 2.87622C14.0387 3.11894 14.0387 3.37379 14.0387 3.64078C14.148 3.64078 14.2329 3.64078 14.3179 3.64078C15.4222 3.64078 16.5145 3.64078 17.6188 3.64078C18.2135 3.64078 18.614 4.0534 18.5776 4.62379C18.5412 5.06068 18.2135 5.41262 17.7766 5.44903C17.4489 5.4733 17.1213 5.44903 16.7815 5.44903C16.7815 5.57039 16.7815 5.65534 16.7815 5.75243C16.7815 9.57524 16.7815 13.3859 16.7815 17.2087C16.7815 18.568 15.8955 19.6723 14.5848 19.9393C14.3907 19.9757 14.1722 20 13.9781 20C10.9926 20 8.01931 20 5.03388 20C3.43194 20 2.23048 18.7985 2.23048 17.1966C2.23048 13.3859 2.23048 9.57524 2.23048 5.76456C2.23048 5.66748 2.23048 5.58253 2.23048 5.44903ZM4.05087 5.4733V5.70388C4.05087 9.5267 4.05087 13.3374 4.05087 17.1602C4.05087 17.8155 4.41495 18.1796 5.08242 18.1796C8.03145 18.1796 10.9683 18.1796 13.9174 18.1796C14.597 18.1796 14.9611 17.8155 14.9611 17.1359C14.9611 13.3252 14.9611 9.51456 14.9611 5.70388C14.9611 5.63107 14.9611 5.55825 14.9611 5.46117H4.05087V5.4733ZM12.2305 3.64078C12.2305 3.30097 12.2426 2.98544 12.2305 2.68204C12.2062 2.20874 11.83 1.84466 11.3446 1.83253C10.1188 1.83253 8.8931 1.83253 7.65524 1.83253C7.23048 1.83253 6.8664 2.12379 6.81786 2.53641C6.76932 2.88835 6.81786 3.26456 6.81786 3.64078H12.2426H12.2305Z"
                                fill="white"
                              />
                              <path
                                d="M9.49979 13.0946C9.00222 13.5922 8.52892 14.0655 8.05562 14.5388C7.84931 14.7451 7.643 14.9514 7.43669 15.1577C7.04834 15.5339 6.49009 15.5339 6.12601 15.1577C5.77407 14.7936 5.7862 14.2354 6.16241 13.8592C6.78135 13.2281 7.41242 12.597 8.04348 11.9781C8.09203 11.9296 8.17698 11.8932 8.23766 11.8568C8.23766 11.8203 8.23766 11.7839 8.23766 11.7475C8.16484 11.7111 8.09203 11.6747 8.04348 11.6262C7.41242 10.9951 6.78135 10.364 6.15028 9.73297C5.88329 9.46598 5.81047 9.15044 5.9197 8.7985C6.04106 8.44656 6.29591 8.24025 6.65999 8.17957C6.96339 8.13103 7.23038 8.25238 7.44882 8.47083C8.06776 9.08976 8.69882 9.72083 9.31776 10.3398C9.37844 10.4004 9.41484 10.4611 9.47552 10.5461C9.56047 10.4733 9.60902 10.4126 9.6697 10.364C10.3008 9.73297 10.9318 9.1019 11.5629 8.47083C12.0241 8.0218 12.7279 8.11889 13.0192 8.665C13.2134 9.02908 13.1406 9.45384 12.825 9.76937C12.2061 10.3883 11.5872 11.0194 10.9561 11.6383C10.8954 11.6869 10.8347 11.7354 10.7619 11.7839C10.8469 11.881 10.9076 11.9296 10.9561 11.9902C11.5872 12.6335 12.2304 13.2645 12.8614 13.9077C13.1891 14.2475 13.2134 14.7572 12.9221 15.1092C12.6309 15.4733 12.1212 15.5582 11.7328 15.3155C11.6357 15.2548 11.5508 15.1699 11.4658 15.0849C10.8105 14.4296 10.1673 13.7864 9.48766 13.1068L9.49979 13.0946Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span>حذف آدرس</span>
                        </button>
                        <img src={map_img} />
                      </div>
                    </div>
                    <div className="address_box">
                      <div className="address_detail">
                        <h5>عنوان آدرس</h5>
                        <p className="address_text">
                          بل نلسون ماندلا، بعد از چهارراه جهان کودک، خ. کیش
                        </p>
                        <br />

                        <p className="post_code">
                          <span>
                            <svg
                              width="20"
                              height="13"
                              viewBox="0 0 25 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_613_408)">
                                <path
                                  d="M12.4995 17.5663C9.39479 17.5663 6.28891 17.5696 3.18416 17.5663C1.02646 17.563 0.00233869 16.5533 0.00122187 14.4327C0.000105049 10.6465 0.000105049 6.86028 0.00233869 3.07296C0.00345551 1.03372 1.05327 0.0020144 3.13167 0.000915671C9.37915 -0.00128179 15.6266 -0.00128179 21.8741 0.000915671C23.9503 0.000915671 24.9979 1.03372 24.999 3.07736C25.0012 6.88225 25.0012 10.6871 24.999 14.492C24.9979 16.5335 23.9481 17.5641 21.8708 17.5663C18.747 17.5696 15.6233 17.5663 12.4995 17.5663ZM12.475 15.8083C15.6367 15.8083 18.7984 15.8127 21.9601 15.8061C22.9184 15.8039 23.2065 15.527 23.2087 14.5986C23.2165 10.9388 23.2132 7.27889 23.2098 3.62013C23.2098 3.42565 23.2802 3.17185 23.0848 3.05868C22.8446 2.91914 22.6805 3.17185 22.5074 3.28501C19.4707 5.26932 16.4307 7.24813 13.412 9.2588C12.762 9.6917 12.2326 9.6884 11.5849 9.2566C8.59738 7.26571 5.58867 5.30667 2.58107 3.34544C2.37893 3.2136 2.18125 2.90046 1.91545 3.06637C1.68203 3.2125 1.79148 3.54102 1.79037 3.78933C1.78478 7.30306 1.7859 10.8157 1.78702 14.3294C1.78702 15.6127 1.99363 15.8105 3.32264 15.8105C6.37267 15.8116 9.42271 15.8105 12.4739 15.8105L12.475 15.8083ZM3.63647 1.88084C3.76602 1.98082 3.84643 2.05334 3.93578 2.11157C6.56588 3.83548 9.20269 5.5484 11.8205 7.29098C12.3108 7.6173 12.6816 7.62499 13.1752 7.29537C15.6825 5.62201 18.2121 3.98051 20.7305 2.32143C20.9081 2.20496 21.2465 2.11047 21.1828 1.90062C21.1046 1.64351 20.7629 1.76108 20.5373 1.75998C15.1464 1.75449 9.75552 1.75449 4.36463 1.75778C4.14797 1.75778 3.91902 1.71054 3.63758 1.87974L3.63647 1.88084Z"
                                  fill="black"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_613_408">
                                  <rect
                                    width="25"
                                    height="17.5676"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span>کدپستی : 1234567890</span>
                        </p>
                        <p className="phoneNumber">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.8371 25.9333C18.7252 25.9458 17.6483 25.7691 16.6027 25.425C15.6599 25.1147 14.8157 24.6413 13.9778 24.1529C11.7453 22.8513 9.82602 21.2303 8.08413 19.4255C7.11662 18.4232 6.1649 17.4094 5.30357 16.3287C4.18457 14.9248 3.17083 13.4633 2.36717 11.888C1.87495 10.9232 1.4587 9.93371 1.21911 8.88856C1.04336 8.12293 0.951371 7.35231 1.0262 6.56944C1.17082 5.05686 1.74932 3.7156 2.91591 2.604C3.63262 1.92102 4.5118 1.49719 5.50403 1.24343C6.3546 1.0258 7.21594 0.947307 8.09466 1.03556C8.51938 1.07813 8.8553 1.26918 9.1251 1.55948C9.46515 1.92538 9.64593 2.3625 9.76492 2.81976C10.1059 4.13112 10.4533 5.44165 10.699 6.7717C10.7482 7.0375 10.7947 7.30372 10.8404 7.57014C10.8926 7.87457 10.7976 8.13684 10.5645 8.36049C10.3034 8.61072 9.99124 8.79304 9.64593 8.93072C9.20702 9.10598 8.76675 9.27875 8.32876 9.45588C8.24226 9.49077 8.16056 9.53708 8.08116 9.58484C7.8466 9.72605 7.77269 9.91938 7.80724 10.1752C7.89374 10.8127 8.19237 11.3794 8.48757 11.9488C9.31549 13.5451 10.3798 14.9952 11.7352 16.2648C12.5578 17.0354 13.4656 17.714 14.432 18.3304C14.697 18.4994 14.9558 18.6767 15.2176 18.8501C15.4819 19.0252 15.775 19.1446 16.0865 19.2339C16.392 19.3213 16.6473 19.2509 16.8746 19.0586C17.0945 18.8725 17.2645 18.6528 17.411 18.4161C17.6563 18.0195 17.9284 17.6401 18.3052 17.3332C18.4043 17.2526 18.5107 17.1787 18.6197 17.1091C18.8842 16.9401 19.1732 16.9104 19.4798 16.9966C20.2075 17.2011 20.927 17.4227 21.6231 17.7086C22.4865 18.0631 23.3703 18.3775 24.2291 18.7407C24.7174 18.9471 25.1838 19.2017 25.641 19.4621C26.0062 19.6702 26.1737 19.9918 26.1801 20.3926C26.1927 21.1919 25.9767 21.9413 25.6025 22.6555C25.0055 23.7951 24.1284 24.7073 22.9027 25.3245C22.1281 25.7145 21.2899 25.898 20.4094 25.9325C20.2192 25.94 20.0284 25.9335 19.8377 25.9335L19.8371 25.9333Z"
                                stroke="black"
                                stroke-width="1.5"
                              />
                            </svg>
                          </span>
                          <span>شماره تماس : 09363072505</span>
                        </p>
                        <p className="resiver">
                          <span>
                            <svg
                              width="22"
                              height="21"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_615_415)">
                                <path
                                  d="M12.4954 6.6135C15.2046 6.58751 17.4751 8.83324 17.4987 11.561C17.523 14.3836 15.3235 16.6912 12.5858 16.7158C9.82298 16.7397 7.5268 14.5122 7.50385 11.7852C7.48021 8.89086 9.65192 6.64091 12.4954 6.61421V6.6135ZM12.5023 8.29991C10.6741 8.2964 9.18044 9.79871 9.16931 11.6523C9.15819 13.4835 10.6714 15.0217 12.4877 15.0252C14.3159 15.0287 15.8242 13.52 15.8332 11.6791C15.843 9.81908 14.3479 8.30272 12.5023 8.29921V8.29991Z"
                                  fill="black"
                                />
                                <path
                                  d="M21.6669 22.7622C21.6516 23.117 21.4924 23.3826 21.1683 23.5274C20.8213 23.6827 20.5028 23.6082 20.2358 23.3461C19.5042 22.6273 18.6983 22.0103 17.7984 21.522C16.2581 20.6858 14.6115 20.2776 12.866 20.241C11.3696 20.2101 9.91062 20.3921 8.50454 20.931C7.11584 21.4637 5.88987 22.2542 4.8294 23.3032C4.58879 23.5408 4.3162 23.6658 3.98241 23.5878C3.67296 23.5155 3.45739 23.318 3.36977 23.0053C3.28076 22.6849 3.35587 22.4003 3.5916 22.1621C4.6326 21.1109 5.8252 20.2832 7.16244 19.662C9.30772 18.6656 11.565 18.4021 13.8896 18.6122C16.7658 18.8722 19.2358 20.0443 21.322 22.0546C21.5236 22.2485 21.6766 22.4629 21.6662 22.7622H21.6669Z"
                                  fill="black"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_615_415">
                                  <rect
                                    width="25"
                                    height="23.6111"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span>تحویل گیرنده : سجاد حسین زاده</span>
                        </p>
                      </div>
                      <div className="address_map">
                        <button>
                          <span>
                            <svg
                              width="18"
                              height="17"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.5581 0C16.3593 0.0121386 17.039 0.279189 17.6095 0.837567C18.2893 1.51733 18.9691 2.18496 19.6488 2.87686C20.7777 4.01789 20.7899 5.74158 19.661 6.89475C18.9084 7.67162 18.1315 8.42422 17.3789 9.18896C14.3564 12.2115 11.3217 15.2219 8.32348 18.2687C7.70441 18.8877 7.0125 19.2762 6.15066 19.3976C4.96107 19.5675 3.77148 19.786 2.5819 19.9802C1.44086 20.1623 0.336247 19.0577 0.518327 17.9166C0.724684 16.6057 0.955318 15.2826 1.17381 13.9716C1.28306 13.3282 1.59867 12.8063 2.0478 12.3571C5.14315 9.26179 8.23851 6.16643 11.346 3.05894C12.0743 2.33062 12.8026 1.6023 13.531 0.873983C14.1015 0.303466 14.7934 0.0242773 15.5824 0.0121386L15.5581 0ZM12.1714 4.73407C12.1107 4.8069 12.0379 4.90401 11.9651 4.97684C9.08821 7.8537 6.21135 10.7306 3.33449 13.6074C3.116 13.8138 2.97033 14.0566 2.93392 14.36C2.88536 14.7242 2.81253 15.0883 2.75184 15.4525C2.60617 16.3143 2.46051 17.1883 2.31485 18.0744C2.41196 18.0744 2.48479 18.0744 2.55762 18.0623C3.57727 17.9045 4.59691 17.7346 5.6287 17.6132C6.21135 17.5403 6.67262 17.3218 7.08533 16.897C9.9015 14.0566 12.7298 11.2404 15.5581 8.41208C15.6067 8.36353 15.6674 8.32711 15.7159 8.2907C14.5263 7.10111 13.361 5.9358 12.1714 4.74621V4.73407ZM17.039 6.91903C17.4882 6.48204 17.9494 6.03291 18.3986 5.5595C18.7749 5.17106 18.7749 4.60055 18.3986 4.21211C17.6824 3.48379 16.9662 2.75547 16.2257 2.05143C15.8737 1.71155 15.3396 1.67513 14.9876 2.00288C14.4899 2.46414 14.0408 2.98611 13.5795 3.45951C14.7084 4.58841 15.8737 5.75372 17.039 6.91903Z"
                                fill="white"
                              />
                              <path
                                d="M15.0359 18.1594C16.5289 18.1594 18.022 18.1594 19.5029 18.1594C20.0734 18.1594 20.474 18.5357 20.4861 19.0577C20.4861 19.5796 20.0734 19.9924 19.5029 19.9924C16.5168 19.9924 13.5307 19.9924 10.5446 19.9924C10.0348 19.9924 9.64633 19.6646 9.58564 19.2033C9.52494 18.7178 9.80413 18.3051 10.2654 18.1958C10.3625 18.1716 10.4596 18.1716 10.5567 18.1716C12.0498 18.1716 13.5428 18.1716 15.0238 18.1716L15.0359 18.1594Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span> تغییر آدرس</span>
                        </button>
                        <button>
                          <span>
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 19 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.23048 5.44903C1.87854 5.44903 1.563 5.46117 1.24747 5.44903C0.834848 5.42476 0.507178 5.10922 0.434363 4.72087C0.361547 4.28398 0.567858 3.87136 0.968343 3.71359C1.11397 3.65291 1.28388 3.64078 1.44164 3.64078C2.52174 3.64078 3.60184 3.64078 4.68194 3.64078C4.76689 3.64078 4.85184 3.64078 4.94893 3.64078C4.94893 3.34951 4.94893 3.09466 4.94893 2.82767C4.94893 1.18932 6.13825 0 7.78873 0C8.95378 0 10.131 0 11.296 0C12.6188 0 13.7111 0.89806 13.9781 2.1966C14.0266 2.41505 14.0266 2.64563 14.0387 2.87622C14.0387 3.11894 14.0387 3.37379 14.0387 3.64078C14.148 3.64078 14.2329 3.64078 14.3179 3.64078C15.4222 3.64078 16.5145 3.64078 17.6188 3.64078C18.2135 3.64078 18.614 4.0534 18.5776 4.62379C18.5412 5.06068 18.2135 5.41262 17.7766 5.44903C17.4489 5.4733 17.1213 5.44903 16.7815 5.44903C16.7815 5.57039 16.7815 5.65534 16.7815 5.75243C16.7815 9.57524 16.7815 13.3859 16.7815 17.2087C16.7815 18.568 15.8955 19.6723 14.5848 19.9393C14.3907 19.9757 14.1722 20 13.9781 20C10.9926 20 8.01931 20 5.03388 20C3.43194 20 2.23048 18.7985 2.23048 17.1966C2.23048 13.3859 2.23048 9.57524 2.23048 5.76456C2.23048 5.66748 2.23048 5.58253 2.23048 5.44903ZM4.05087 5.4733V5.70388C4.05087 9.5267 4.05087 13.3374 4.05087 17.1602C4.05087 17.8155 4.41495 18.1796 5.08242 18.1796C8.03145 18.1796 10.9683 18.1796 13.9174 18.1796C14.597 18.1796 14.9611 17.8155 14.9611 17.1359C14.9611 13.3252 14.9611 9.51456 14.9611 5.70388C14.9611 5.63107 14.9611 5.55825 14.9611 5.46117H4.05087V5.4733ZM12.2305 3.64078C12.2305 3.30097 12.2426 2.98544 12.2305 2.68204C12.2062 2.20874 11.83 1.84466 11.3446 1.83253C10.1188 1.83253 8.8931 1.83253 7.65524 1.83253C7.23048 1.83253 6.8664 2.12379 6.81786 2.53641C6.76932 2.88835 6.81786 3.26456 6.81786 3.64078H12.2426H12.2305Z"
                                fill="white"
                              />
                              <path
                                d="M9.49979 13.0946C9.00222 13.5922 8.52892 14.0655 8.05562 14.5388C7.84931 14.7451 7.643 14.9514 7.43669 15.1577C7.04834 15.5339 6.49009 15.5339 6.12601 15.1577C5.77407 14.7936 5.7862 14.2354 6.16241 13.8592C6.78135 13.2281 7.41242 12.597 8.04348 11.9781C8.09203 11.9296 8.17698 11.8932 8.23766 11.8568C8.23766 11.8203 8.23766 11.7839 8.23766 11.7475C8.16484 11.7111 8.09203 11.6747 8.04348 11.6262C7.41242 10.9951 6.78135 10.364 6.15028 9.73297C5.88329 9.46598 5.81047 9.15044 5.9197 8.7985C6.04106 8.44656 6.29591 8.24025 6.65999 8.17957C6.96339 8.13103 7.23038 8.25238 7.44882 8.47083C8.06776 9.08976 8.69882 9.72083 9.31776 10.3398C9.37844 10.4004 9.41484 10.4611 9.47552 10.5461C9.56047 10.4733 9.60902 10.4126 9.6697 10.364C10.3008 9.73297 10.9318 9.1019 11.5629 8.47083C12.0241 8.0218 12.7279 8.11889 13.0192 8.665C13.2134 9.02908 13.1406 9.45384 12.825 9.76937C12.2061 10.3883 11.5872 11.0194 10.9561 11.6383C10.8954 11.6869 10.8347 11.7354 10.7619 11.7839C10.8469 11.881 10.9076 11.9296 10.9561 11.9902C11.5872 12.6335 12.2304 13.2645 12.8614 13.9077C13.1891 14.2475 13.2134 14.7572 12.9221 15.1092C12.6309 15.4733 12.1212 15.5582 11.7328 15.3155C11.6357 15.2548 11.5508 15.1699 11.4658 15.0849C10.8105 14.4296 10.1673 13.7864 9.48766 13.1068L9.49979 13.0946Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span>حذف آدرس</span>
                        </button>
                        <img src={map_img} />
                      </div>
                    </div>
                    <div className="address_box">
                      <div className="address_detail">
                        <h5>عنوان آدرس</h5>
                        <p className="address_text">
                          بل نلسون ماندلا، بعد از چهارراه جهان کودک، خ. کیش
                        </p>
                        <br />

                        <p className="post_code">
                          <span>
                            <svg
                              width="20"
                              height="13"
                              viewBox="0 0 25 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_613_408)">
                                <path
                                  d="M12.4995 17.5663C9.39479 17.5663 6.28891 17.5696 3.18416 17.5663C1.02646 17.563 0.00233869 16.5533 0.00122187 14.4327C0.000105049 10.6465 0.000105049 6.86028 0.00233869 3.07296C0.00345551 1.03372 1.05327 0.0020144 3.13167 0.000915671C9.37915 -0.00128179 15.6266 -0.00128179 21.8741 0.000915671C23.9503 0.000915671 24.9979 1.03372 24.999 3.07736C25.0012 6.88225 25.0012 10.6871 24.999 14.492C24.9979 16.5335 23.9481 17.5641 21.8708 17.5663C18.747 17.5696 15.6233 17.5663 12.4995 17.5663ZM12.475 15.8083C15.6367 15.8083 18.7984 15.8127 21.9601 15.8061C22.9184 15.8039 23.2065 15.527 23.2087 14.5986C23.2165 10.9388 23.2132 7.27889 23.2098 3.62013C23.2098 3.42565 23.2802 3.17185 23.0848 3.05868C22.8446 2.91914 22.6805 3.17185 22.5074 3.28501C19.4707 5.26932 16.4307 7.24813 13.412 9.2588C12.762 9.6917 12.2326 9.6884 11.5849 9.2566C8.59738 7.26571 5.58867 5.30667 2.58107 3.34544C2.37893 3.2136 2.18125 2.90046 1.91545 3.06637C1.68203 3.2125 1.79148 3.54102 1.79037 3.78933C1.78478 7.30306 1.7859 10.8157 1.78702 14.3294C1.78702 15.6127 1.99363 15.8105 3.32264 15.8105C6.37267 15.8116 9.42271 15.8105 12.4739 15.8105L12.475 15.8083ZM3.63647 1.88084C3.76602 1.98082 3.84643 2.05334 3.93578 2.11157C6.56588 3.83548 9.20269 5.5484 11.8205 7.29098C12.3108 7.6173 12.6816 7.62499 13.1752 7.29537C15.6825 5.62201 18.2121 3.98051 20.7305 2.32143C20.9081 2.20496 21.2465 2.11047 21.1828 1.90062C21.1046 1.64351 20.7629 1.76108 20.5373 1.75998C15.1464 1.75449 9.75552 1.75449 4.36463 1.75778C4.14797 1.75778 3.91902 1.71054 3.63758 1.87974L3.63647 1.88084Z"
                                  fill="black"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_613_408">
                                  <rect
                                    width="25"
                                    height="17.5676"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span>کدپستی : 1234567890</span>
                        </p>
                        <p className="phoneNumber">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.8371 25.9333C18.7252 25.9458 17.6483 25.7691 16.6027 25.425C15.6599 25.1147 14.8157 24.6413 13.9778 24.1529C11.7453 22.8513 9.82602 21.2303 8.08413 19.4255C7.11662 18.4232 6.1649 17.4094 5.30357 16.3287C4.18457 14.9248 3.17083 13.4633 2.36717 11.888C1.87495 10.9232 1.4587 9.93371 1.21911 8.88856C1.04336 8.12293 0.951371 7.35231 1.0262 6.56944C1.17082 5.05686 1.74932 3.7156 2.91591 2.604C3.63262 1.92102 4.5118 1.49719 5.50403 1.24343C6.3546 1.0258 7.21594 0.947307 8.09466 1.03556C8.51938 1.07813 8.8553 1.26918 9.1251 1.55948C9.46515 1.92538 9.64593 2.3625 9.76492 2.81976C10.1059 4.13112 10.4533 5.44165 10.699 6.7717C10.7482 7.0375 10.7947 7.30372 10.8404 7.57014C10.8926 7.87457 10.7976 8.13684 10.5645 8.36049C10.3034 8.61072 9.99124 8.79304 9.64593 8.93072C9.20702 9.10598 8.76675 9.27875 8.32876 9.45588C8.24226 9.49077 8.16056 9.53708 8.08116 9.58484C7.8466 9.72605 7.77269 9.91938 7.80724 10.1752C7.89374 10.8127 8.19237 11.3794 8.48757 11.9488C9.31549 13.5451 10.3798 14.9952 11.7352 16.2648C12.5578 17.0354 13.4656 17.714 14.432 18.3304C14.697 18.4994 14.9558 18.6767 15.2176 18.8501C15.4819 19.0252 15.775 19.1446 16.0865 19.2339C16.392 19.3213 16.6473 19.2509 16.8746 19.0586C17.0945 18.8725 17.2645 18.6528 17.411 18.4161C17.6563 18.0195 17.9284 17.6401 18.3052 17.3332C18.4043 17.2526 18.5107 17.1787 18.6197 17.1091C18.8842 16.9401 19.1732 16.9104 19.4798 16.9966C20.2075 17.2011 20.927 17.4227 21.6231 17.7086C22.4865 18.0631 23.3703 18.3775 24.2291 18.7407C24.7174 18.9471 25.1838 19.2017 25.641 19.4621C26.0062 19.6702 26.1737 19.9918 26.1801 20.3926C26.1927 21.1919 25.9767 21.9413 25.6025 22.6555C25.0055 23.7951 24.1284 24.7073 22.9027 25.3245C22.1281 25.7145 21.2899 25.898 20.4094 25.9325C20.2192 25.94 20.0284 25.9335 19.8377 25.9335L19.8371 25.9333Z"
                                stroke="black"
                                stroke-width="1.5"
                              />
                            </svg>
                          </span>
                          <span>شماره تماس : 09363072505</span>
                        </p>
                        <p className="resiver">
                          <span>
                            <svg
                              width="22"
                              height="21"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_615_415)">
                                <path
                                  d="M12.4954 6.6135C15.2046 6.58751 17.4751 8.83324 17.4987 11.561C17.523 14.3836 15.3235 16.6912 12.5858 16.7158C9.82298 16.7397 7.5268 14.5122 7.50385 11.7852C7.48021 8.89086 9.65192 6.64091 12.4954 6.61421V6.6135ZM12.5023 8.29991C10.6741 8.2964 9.18044 9.79871 9.16931 11.6523C9.15819 13.4835 10.6714 15.0217 12.4877 15.0252C14.3159 15.0287 15.8242 13.52 15.8332 11.6791C15.843 9.81908 14.3479 8.30272 12.5023 8.29921V8.29991Z"
                                  fill="black"
                                />
                                <path
                                  d="M21.6669 22.7622C21.6516 23.117 21.4924 23.3826 21.1683 23.5274C20.8213 23.6827 20.5028 23.6082 20.2358 23.3461C19.5042 22.6273 18.6983 22.0103 17.7984 21.522C16.2581 20.6858 14.6115 20.2776 12.866 20.241C11.3696 20.2101 9.91062 20.3921 8.50454 20.931C7.11584 21.4637 5.88987 22.2542 4.8294 23.3032C4.58879 23.5408 4.3162 23.6658 3.98241 23.5878C3.67296 23.5155 3.45739 23.318 3.36977 23.0053C3.28076 22.6849 3.35587 22.4003 3.5916 22.1621C4.6326 21.1109 5.8252 20.2832 7.16244 19.662C9.30772 18.6656 11.565 18.4021 13.8896 18.6122C16.7658 18.8722 19.2358 20.0443 21.322 22.0546C21.5236 22.2485 21.6766 22.4629 21.6662 22.7622H21.6669Z"
                                  fill="black"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_615_415">
                                  <rect
                                    width="25"
                                    height="23.6111"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span>تحویل گیرنده : سجاد حسین زاده</span>
                        </p>
                      </div>
                      <div className="address_map">
                        <button>
                          <span>
                            <svg
                              width="18"
                              height="17"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.5581 0C16.3593 0.0121386 17.039 0.279189 17.6095 0.837567C18.2893 1.51733 18.9691 2.18496 19.6488 2.87686C20.7777 4.01789 20.7899 5.74158 19.661 6.89475C18.9084 7.67162 18.1315 8.42422 17.3789 9.18896C14.3564 12.2115 11.3217 15.2219 8.32348 18.2687C7.70441 18.8877 7.0125 19.2762 6.15066 19.3976C4.96107 19.5675 3.77148 19.786 2.5819 19.9802C1.44086 20.1623 0.336247 19.0577 0.518327 17.9166C0.724684 16.6057 0.955318 15.2826 1.17381 13.9716C1.28306 13.3282 1.59867 12.8063 2.0478 12.3571C5.14315 9.26179 8.23851 6.16643 11.346 3.05894C12.0743 2.33062 12.8026 1.6023 13.531 0.873983C14.1015 0.303466 14.7934 0.0242773 15.5824 0.0121386L15.5581 0ZM12.1714 4.73407C12.1107 4.8069 12.0379 4.90401 11.9651 4.97684C9.08821 7.8537 6.21135 10.7306 3.33449 13.6074C3.116 13.8138 2.97033 14.0566 2.93392 14.36C2.88536 14.7242 2.81253 15.0883 2.75184 15.4525C2.60617 16.3143 2.46051 17.1883 2.31485 18.0744C2.41196 18.0744 2.48479 18.0744 2.55762 18.0623C3.57727 17.9045 4.59691 17.7346 5.6287 17.6132C6.21135 17.5403 6.67262 17.3218 7.08533 16.897C9.9015 14.0566 12.7298 11.2404 15.5581 8.41208C15.6067 8.36353 15.6674 8.32711 15.7159 8.2907C14.5263 7.10111 13.361 5.9358 12.1714 4.74621V4.73407ZM17.039 6.91903C17.4882 6.48204 17.9494 6.03291 18.3986 5.5595C18.7749 5.17106 18.7749 4.60055 18.3986 4.21211C17.6824 3.48379 16.9662 2.75547 16.2257 2.05143C15.8737 1.71155 15.3396 1.67513 14.9876 2.00288C14.4899 2.46414 14.0408 2.98611 13.5795 3.45951C14.7084 4.58841 15.8737 5.75372 17.039 6.91903Z"
                                fill="white"
                              />
                              <path
                                d="M15.0359 18.1594C16.5289 18.1594 18.022 18.1594 19.5029 18.1594C20.0734 18.1594 20.474 18.5357 20.4861 19.0577C20.4861 19.5796 20.0734 19.9924 19.5029 19.9924C16.5168 19.9924 13.5307 19.9924 10.5446 19.9924C10.0348 19.9924 9.64633 19.6646 9.58564 19.2033C9.52494 18.7178 9.80413 18.3051 10.2654 18.1958C10.3625 18.1716 10.4596 18.1716 10.5567 18.1716C12.0498 18.1716 13.5428 18.1716 15.0238 18.1716L15.0359 18.1594Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span> تغییر آدرس</span>
                        </button>
                        <button>
                          <span>
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 19 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.23048 5.44903C1.87854 5.44903 1.563 5.46117 1.24747 5.44903C0.834848 5.42476 0.507178 5.10922 0.434363 4.72087C0.361547 4.28398 0.567858 3.87136 0.968343 3.71359C1.11397 3.65291 1.28388 3.64078 1.44164 3.64078C2.52174 3.64078 3.60184 3.64078 4.68194 3.64078C4.76689 3.64078 4.85184 3.64078 4.94893 3.64078C4.94893 3.34951 4.94893 3.09466 4.94893 2.82767C4.94893 1.18932 6.13825 0 7.78873 0C8.95378 0 10.131 0 11.296 0C12.6188 0 13.7111 0.89806 13.9781 2.1966C14.0266 2.41505 14.0266 2.64563 14.0387 2.87622C14.0387 3.11894 14.0387 3.37379 14.0387 3.64078C14.148 3.64078 14.2329 3.64078 14.3179 3.64078C15.4222 3.64078 16.5145 3.64078 17.6188 3.64078C18.2135 3.64078 18.614 4.0534 18.5776 4.62379C18.5412 5.06068 18.2135 5.41262 17.7766 5.44903C17.4489 5.4733 17.1213 5.44903 16.7815 5.44903C16.7815 5.57039 16.7815 5.65534 16.7815 5.75243C16.7815 9.57524 16.7815 13.3859 16.7815 17.2087C16.7815 18.568 15.8955 19.6723 14.5848 19.9393C14.3907 19.9757 14.1722 20 13.9781 20C10.9926 20 8.01931 20 5.03388 20C3.43194 20 2.23048 18.7985 2.23048 17.1966C2.23048 13.3859 2.23048 9.57524 2.23048 5.76456C2.23048 5.66748 2.23048 5.58253 2.23048 5.44903ZM4.05087 5.4733V5.70388C4.05087 9.5267 4.05087 13.3374 4.05087 17.1602C4.05087 17.8155 4.41495 18.1796 5.08242 18.1796C8.03145 18.1796 10.9683 18.1796 13.9174 18.1796C14.597 18.1796 14.9611 17.8155 14.9611 17.1359C14.9611 13.3252 14.9611 9.51456 14.9611 5.70388C14.9611 5.63107 14.9611 5.55825 14.9611 5.46117H4.05087V5.4733ZM12.2305 3.64078C12.2305 3.30097 12.2426 2.98544 12.2305 2.68204C12.2062 2.20874 11.83 1.84466 11.3446 1.83253C10.1188 1.83253 8.8931 1.83253 7.65524 1.83253C7.23048 1.83253 6.8664 2.12379 6.81786 2.53641C6.76932 2.88835 6.81786 3.26456 6.81786 3.64078H12.2426H12.2305Z"
                                fill="white"
                              />
                              <path
                                d="M9.49979 13.0946C9.00222 13.5922 8.52892 14.0655 8.05562 14.5388C7.84931 14.7451 7.643 14.9514 7.43669 15.1577C7.04834 15.5339 6.49009 15.5339 6.12601 15.1577C5.77407 14.7936 5.7862 14.2354 6.16241 13.8592C6.78135 13.2281 7.41242 12.597 8.04348 11.9781C8.09203 11.9296 8.17698 11.8932 8.23766 11.8568C8.23766 11.8203 8.23766 11.7839 8.23766 11.7475C8.16484 11.7111 8.09203 11.6747 8.04348 11.6262C7.41242 10.9951 6.78135 10.364 6.15028 9.73297C5.88329 9.46598 5.81047 9.15044 5.9197 8.7985C6.04106 8.44656 6.29591 8.24025 6.65999 8.17957C6.96339 8.13103 7.23038 8.25238 7.44882 8.47083C8.06776 9.08976 8.69882 9.72083 9.31776 10.3398C9.37844 10.4004 9.41484 10.4611 9.47552 10.5461C9.56047 10.4733 9.60902 10.4126 9.6697 10.364C10.3008 9.73297 10.9318 9.1019 11.5629 8.47083C12.0241 8.0218 12.7279 8.11889 13.0192 8.665C13.2134 9.02908 13.1406 9.45384 12.825 9.76937C12.2061 10.3883 11.5872 11.0194 10.9561 11.6383C10.8954 11.6869 10.8347 11.7354 10.7619 11.7839C10.8469 11.881 10.9076 11.9296 10.9561 11.9902C11.5872 12.6335 12.2304 13.2645 12.8614 13.9077C13.1891 14.2475 13.2134 14.7572 12.9221 15.1092C12.6309 15.4733 12.1212 15.5582 11.7328 15.3155C11.6357 15.2548 11.5508 15.1699 11.4658 15.0849C10.8105 14.4296 10.1673 13.7864 9.48766 13.1068L9.49979 13.0946Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span>حذف آدرس</span>
                        </button>
                        <img src={map_img} />
                      </div>
                    </div>
                    <div className="address_box">
                      <div className="address_detail">
                        <h5>عنوان آدرس</h5>
                        <p className="address_text">
                          بل نلسون ماندلا، بعد از چهارراه جهان کودک، خ. کیش
                        </p>
                        <br />

                        <p className="post_code">
                          <span>
                            <svg
                              width="20"
                              height="13"
                              viewBox="0 0 25 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_613_408)">
                                <path
                                  d="M12.4995 17.5663C9.39479 17.5663 6.28891 17.5696 3.18416 17.5663C1.02646 17.563 0.00233869 16.5533 0.00122187 14.4327C0.000105049 10.6465 0.000105049 6.86028 0.00233869 3.07296C0.00345551 1.03372 1.05327 0.0020144 3.13167 0.000915671C9.37915 -0.00128179 15.6266 -0.00128179 21.8741 0.000915671C23.9503 0.000915671 24.9979 1.03372 24.999 3.07736C25.0012 6.88225 25.0012 10.6871 24.999 14.492C24.9979 16.5335 23.9481 17.5641 21.8708 17.5663C18.747 17.5696 15.6233 17.5663 12.4995 17.5663ZM12.475 15.8083C15.6367 15.8083 18.7984 15.8127 21.9601 15.8061C22.9184 15.8039 23.2065 15.527 23.2087 14.5986C23.2165 10.9388 23.2132 7.27889 23.2098 3.62013C23.2098 3.42565 23.2802 3.17185 23.0848 3.05868C22.8446 2.91914 22.6805 3.17185 22.5074 3.28501C19.4707 5.26932 16.4307 7.24813 13.412 9.2588C12.762 9.6917 12.2326 9.6884 11.5849 9.2566C8.59738 7.26571 5.58867 5.30667 2.58107 3.34544C2.37893 3.2136 2.18125 2.90046 1.91545 3.06637C1.68203 3.2125 1.79148 3.54102 1.79037 3.78933C1.78478 7.30306 1.7859 10.8157 1.78702 14.3294C1.78702 15.6127 1.99363 15.8105 3.32264 15.8105C6.37267 15.8116 9.42271 15.8105 12.4739 15.8105L12.475 15.8083ZM3.63647 1.88084C3.76602 1.98082 3.84643 2.05334 3.93578 2.11157C6.56588 3.83548 9.20269 5.5484 11.8205 7.29098C12.3108 7.6173 12.6816 7.62499 13.1752 7.29537C15.6825 5.62201 18.2121 3.98051 20.7305 2.32143C20.9081 2.20496 21.2465 2.11047 21.1828 1.90062C21.1046 1.64351 20.7629 1.76108 20.5373 1.75998C15.1464 1.75449 9.75552 1.75449 4.36463 1.75778C4.14797 1.75778 3.91902 1.71054 3.63758 1.87974L3.63647 1.88084Z"
                                  fill="black"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_613_408">
                                  <rect
                                    width="25"
                                    height="17.5676"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span>کدپستی : 1234567890</span>
                        </p>
                        <p className="phoneNumber">
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.8371 25.9333C18.7252 25.9458 17.6483 25.7691 16.6027 25.425C15.6599 25.1147 14.8157 24.6413 13.9778 24.1529C11.7453 22.8513 9.82602 21.2303 8.08413 19.4255C7.11662 18.4232 6.1649 17.4094 5.30357 16.3287C4.18457 14.9248 3.17083 13.4633 2.36717 11.888C1.87495 10.9232 1.4587 9.93371 1.21911 8.88856C1.04336 8.12293 0.951371 7.35231 1.0262 6.56944C1.17082 5.05686 1.74932 3.7156 2.91591 2.604C3.63262 1.92102 4.5118 1.49719 5.50403 1.24343C6.3546 1.0258 7.21594 0.947307 8.09466 1.03556C8.51938 1.07813 8.8553 1.26918 9.1251 1.55948C9.46515 1.92538 9.64593 2.3625 9.76492 2.81976C10.1059 4.13112 10.4533 5.44165 10.699 6.7717C10.7482 7.0375 10.7947 7.30372 10.8404 7.57014C10.8926 7.87457 10.7976 8.13684 10.5645 8.36049C10.3034 8.61072 9.99124 8.79304 9.64593 8.93072C9.20702 9.10598 8.76675 9.27875 8.32876 9.45588C8.24226 9.49077 8.16056 9.53708 8.08116 9.58484C7.8466 9.72605 7.77269 9.91938 7.80724 10.1752C7.89374 10.8127 8.19237 11.3794 8.48757 11.9488C9.31549 13.5451 10.3798 14.9952 11.7352 16.2648C12.5578 17.0354 13.4656 17.714 14.432 18.3304C14.697 18.4994 14.9558 18.6767 15.2176 18.8501C15.4819 19.0252 15.775 19.1446 16.0865 19.2339C16.392 19.3213 16.6473 19.2509 16.8746 19.0586C17.0945 18.8725 17.2645 18.6528 17.411 18.4161C17.6563 18.0195 17.9284 17.6401 18.3052 17.3332C18.4043 17.2526 18.5107 17.1787 18.6197 17.1091C18.8842 16.9401 19.1732 16.9104 19.4798 16.9966C20.2075 17.2011 20.927 17.4227 21.6231 17.7086C22.4865 18.0631 23.3703 18.3775 24.2291 18.7407C24.7174 18.9471 25.1838 19.2017 25.641 19.4621C26.0062 19.6702 26.1737 19.9918 26.1801 20.3926C26.1927 21.1919 25.9767 21.9413 25.6025 22.6555C25.0055 23.7951 24.1284 24.7073 22.9027 25.3245C22.1281 25.7145 21.2899 25.898 20.4094 25.9325C20.2192 25.94 20.0284 25.9335 19.8377 25.9335L19.8371 25.9333Z"
                                stroke="black"
                                stroke-width="1.5"
                              />
                            </svg>
                          </span>
                          <span>شماره تماس : 09363072505</span>
                        </p>
                        <p className="resiver">
                          <span>
                            <svg
                              width="22"
                              height="21"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_615_415)">
                                <path
                                  d="M12.4954 6.6135C15.2046 6.58751 17.4751 8.83324 17.4987 11.561C17.523 14.3836 15.3235 16.6912 12.5858 16.7158C9.82298 16.7397 7.5268 14.5122 7.50385 11.7852C7.48021 8.89086 9.65192 6.64091 12.4954 6.61421V6.6135ZM12.5023 8.29991C10.6741 8.2964 9.18044 9.79871 9.16931 11.6523C9.15819 13.4835 10.6714 15.0217 12.4877 15.0252C14.3159 15.0287 15.8242 13.52 15.8332 11.6791C15.843 9.81908 14.3479 8.30272 12.5023 8.29921V8.29991Z"
                                  fill="black"
                                />
                                <path
                                  d="M21.6669 22.7622C21.6516 23.117 21.4924 23.3826 21.1683 23.5274C20.8213 23.6827 20.5028 23.6082 20.2358 23.3461C19.5042 22.6273 18.6983 22.0103 17.7984 21.522C16.2581 20.6858 14.6115 20.2776 12.866 20.241C11.3696 20.2101 9.91062 20.3921 8.50454 20.931C7.11584 21.4637 5.88987 22.2542 4.8294 23.3032C4.58879 23.5408 4.3162 23.6658 3.98241 23.5878C3.67296 23.5155 3.45739 23.318 3.36977 23.0053C3.28076 22.6849 3.35587 22.4003 3.5916 22.1621C4.6326 21.1109 5.8252 20.2832 7.16244 19.662C9.30772 18.6656 11.565 18.4021 13.8896 18.6122C16.7658 18.8722 19.2358 20.0443 21.322 22.0546C21.5236 22.2485 21.6766 22.4629 21.6662 22.7622H21.6669Z"
                                  fill="black"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_615_415">
                                  <rect
                                    width="25"
                                    height="23.6111"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span>تحویل گیرنده : سجاد حسین زاده</span>
                        </p>
                      </div>
                      <div className="address_map">
                        <button>
                          <span>
                            <svg
                              width="18"
                              height="17"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.5581 0C16.3593 0.0121386 17.039 0.279189 17.6095 0.837567C18.2893 1.51733 18.9691 2.18496 19.6488 2.87686C20.7777 4.01789 20.7899 5.74158 19.661 6.89475C18.9084 7.67162 18.1315 8.42422 17.3789 9.18896C14.3564 12.2115 11.3217 15.2219 8.32348 18.2687C7.70441 18.8877 7.0125 19.2762 6.15066 19.3976C4.96107 19.5675 3.77148 19.786 2.5819 19.9802C1.44086 20.1623 0.336247 19.0577 0.518327 17.9166C0.724684 16.6057 0.955318 15.2826 1.17381 13.9716C1.28306 13.3282 1.59867 12.8063 2.0478 12.3571C5.14315 9.26179 8.23851 6.16643 11.346 3.05894C12.0743 2.33062 12.8026 1.6023 13.531 0.873983C14.1015 0.303466 14.7934 0.0242773 15.5824 0.0121386L15.5581 0ZM12.1714 4.73407C12.1107 4.8069 12.0379 4.90401 11.9651 4.97684C9.08821 7.8537 6.21135 10.7306 3.33449 13.6074C3.116 13.8138 2.97033 14.0566 2.93392 14.36C2.88536 14.7242 2.81253 15.0883 2.75184 15.4525C2.60617 16.3143 2.46051 17.1883 2.31485 18.0744C2.41196 18.0744 2.48479 18.0744 2.55762 18.0623C3.57727 17.9045 4.59691 17.7346 5.6287 17.6132C6.21135 17.5403 6.67262 17.3218 7.08533 16.897C9.9015 14.0566 12.7298 11.2404 15.5581 8.41208C15.6067 8.36353 15.6674 8.32711 15.7159 8.2907C14.5263 7.10111 13.361 5.9358 12.1714 4.74621V4.73407ZM17.039 6.91903C17.4882 6.48204 17.9494 6.03291 18.3986 5.5595C18.7749 5.17106 18.7749 4.60055 18.3986 4.21211C17.6824 3.48379 16.9662 2.75547 16.2257 2.05143C15.8737 1.71155 15.3396 1.67513 14.9876 2.00288C14.4899 2.46414 14.0408 2.98611 13.5795 3.45951C14.7084 4.58841 15.8737 5.75372 17.039 6.91903Z"
                                fill="white"
                              />
                              <path
                                d="M15.0359 18.1594C16.5289 18.1594 18.022 18.1594 19.5029 18.1594C20.0734 18.1594 20.474 18.5357 20.4861 19.0577C20.4861 19.5796 20.0734 19.9924 19.5029 19.9924C16.5168 19.9924 13.5307 19.9924 10.5446 19.9924C10.0348 19.9924 9.64633 19.6646 9.58564 19.2033C9.52494 18.7178 9.80413 18.3051 10.2654 18.1958C10.3625 18.1716 10.4596 18.1716 10.5567 18.1716C12.0498 18.1716 13.5428 18.1716 15.0238 18.1716L15.0359 18.1594Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span> تغییر آدرس</span>
                        </button>
                        <button>
                          <span>
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 19 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.23048 5.44903C1.87854 5.44903 1.563 5.46117 1.24747 5.44903C0.834848 5.42476 0.507178 5.10922 0.434363 4.72087C0.361547 4.28398 0.567858 3.87136 0.968343 3.71359C1.11397 3.65291 1.28388 3.64078 1.44164 3.64078C2.52174 3.64078 3.60184 3.64078 4.68194 3.64078C4.76689 3.64078 4.85184 3.64078 4.94893 3.64078C4.94893 3.34951 4.94893 3.09466 4.94893 2.82767C4.94893 1.18932 6.13825 0 7.78873 0C8.95378 0 10.131 0 11.296 0C12.6188 0 13.7111 0.89806 13.9781 2.1966C14.0266 2.41505 14.0266 2.64563 14.0387 2.87622C14.0387 3.11894 14.0387 3.37379 14.0387 3.64078C14.148 3.64078 14.2329 3.64078 14.3179 3.64078C15.4222 3.64078 16.5145 3.64078 17.6188 3.64078C18.2135 3.64078 18.614 4.0534 18.5776 4.62379C18.5412 5.06068 18.2135 5.41262 17.7766 5.44903C17.4489 5.4733 17.1213 5.44903 16.7815 5.44903C16.7815 5.57039 16.7815 5.65534 16.7815 5.75243C16.7815 9.57524 16.7815 13.3859 16.7815 17.2087C16.7815 18.568 15.8955 19.6723 14.5848 19.9393C14.3907 19.9757 14.1722 20 13.9781 20C10.9926 20 8.01931 20 5.03388 20C3.43194 20 2.23048 18.7985 2.23048 17.1966C2.23048 13.3859 2.23048 9.57524 2.23048 5.76456C2.23048 5.66748 2.23048 5.58253 2.23048 5.44903ZM4.05087 5.4733V5.70388C4.05087 9.5267 4.05087 13.3374 4.05087 17.1602C4.05087 17.8155 4.41495 18.1796 5.08242 18.1796C8.03145 18.1796 10.9683 18.1796 13.9174 18.1796C14.597 18.1796 14.9611 17.8155 14.9611 17.1359C14.9611 13.3252 14.9611 9.51456 14.9611 5.70388C14.9611 5.63107 14.9611 5.55825 14.9611 5.46117H4.05087V5.4733ZM12.2305 3.64078C12.2305 3.30097 12.2426 2.98544 12.2305 2.68204C12.2062 2.20874 11.83 1.84466 11.3446 1.83253C10.1188 1.83253 8.8931 1.83253 7.65524 1.83253C7.23048 1.83253 6.8664 2.12379 6.81786 2.53641C6.76932 2.88835 6.81786 3.26456 6.81786 3.64078H12.2426H12.2305Z"
                                fill="white"
                              />
                              <path
                                d="M9.49979 13.0946C9.00222 13.5922 8.52892 14.0655 8.05562 14.5388C7.84931 14.7451 7.643 14.9514 7.43669 15.1577C7.04834 15.5339 6.49009 15.5339 6.12601 15.1577C5.77407 14.7936 5.7862 14.2354 6.16241 13.8592C6.78135 13.2281 7.41242 12.597 8.04348 11.9781C8.09203 11.9296 8.17698 11.8932 8.23766 11.8568C8.23766 11.8203 8.23766 11.7839 8.23766 11.7475C8.16484 11.7111 8.09203 11.6747 8.04348 11.6262C7.41242 10.9951 6.78135 10.364 6.15028 9.73297C5.88329 9.46598 5.81047 9.15044 5.9197 8.7985C6.04106 8.44656 6.29591 8.24025 6.65999 8.17957C6.96339 8.13103 7.23038 8.25238 7.44882 8.47083C8.06776 9.08976 8.69882 9.72083 9.31776 10.3398C9.37844 10.4004 9.41484 10.4611 9.47552 10.5461C9.56047 10.4733 9.60902 10.4126 9.6697 10.364C10.3008 9.73297 10.9318 9.1019 11.5629 8.47083C12.0241 8.0218 12.7279 8.11889 13.0192 8.665C13.2134 9.02908 13.1406 9.45384 12.825 9.76937C12.2061 10.3883 11.5872 11.0194 10.9561 11.6383C10.8954 11.6869 10.8347 11.7354 10.7619 11.7839C10.8469 11.881 10.9076 11.9296 10.9561 11.9902C11.5872 12.6335 12.2304 13.2645 12.8614 13.9077C13.1891 14.2475 13.2134 14.7572 12.9221 15.1092C12.6309 15.4733 12.1212 15.5582 11.7328 15.3155C11.6357 15.2548 11.5508 15.1699 11.4658 15.0849C10.8105 14.4296 10.1673 13.7864 9.48766 13.1068L9.49979 13.0946Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <span>حذف آدرس</span>
                        </button>
                        <img src={map_img} />
                      </div>
                    </div>
                  </Scrollbars>
                </div>
              )}
              {selectedNav == "orders" && (
                <div className="orders_container">
                  <div className="orders_titles">
                    <div
                      onClick={() => setSelectedOrder("current")}
                      className={`orders_title_item ${
                        selectedOrder == "current" ? "selected" : undefined
                      }`}
                    >
                      <p className="order_title">سفارشات جاری</p>
                      <span className="order_num">2</span>
                    </div>

                    <div
                      onClick={() => setSelectedOrder("success")}
                      className={`orders_title_item ${
                        selectedOrder == "success" ? "selected" : undefined
                      }`}
                    >
                      <p className="order_title">سفارشات تحویل شده</p>
                      <span className="order_num">4</span>
                    </div>

                    <div
                      onClick={() => setSelectedOrder("canceled")}
                      className={`orders_title_item ${
                        selectedOrder == "canceled" ? "selected" : undefined
                      }`}
                    >
                      <p className="order_title">سفارشات لغو شده</p>
                      <span className="order_num">3</span>
                    </div>

                    <div
                      onClick={() => setSelectedOrder("returned")}
                      className={`orders_title_item ${
                        selectedOrder == "returned" ? "selected" : undefined
                      }`}
                    >
                      <p className="order_title">سفارشات مرجوعی</p>
                      <span className="order_num">3</span>
                    </div>
                  </div>

                  <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    style={{
                      height: "100%",
                      maxHeight: "100%",
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
                    <div className="order_items_desc">
                      {selectedOrder == "current" && (
                        <>
                          <div className="current_order">
                            <div className="order_info">
                              <p>کد پیگیری : 98765456789</p>
                              <p>تاریخ : 02/03/1403</p>
                              <p>وضعیت : ارسال شده</p>
                              <p>
                                <svg
                                  width="27"
                                  height="26"
                                  viewBox="0 0 27 26"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00562 17.5972V1L9.74705 1.92207L11.4885 1L13.2267 1.92207L14.9882 1L16.7128 1.92207L18.4428 1L20.1804 1.92207L21.9371 1L23.6791 1.92207L25.42 1V13.9089"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M25.4202 13.8152V20.3105C25.4202 21.541 24.9607 22.721 24.1429 23.5911C23.3251 24.4612 22.216 24.95 21.0594 24.95M21.0594 24.95C19.9029 24.95 18.7937 24.4612 17.9759 23.5911C17.1581 22.721 16.6987 21.541 16.6987 20.3105V17.5268H1.87218C1.75737 17.5257 1.6435 17.549 1.53722 17.5952C1.43095 17.6415 1.3344 17.7098 1.25321 17.7962C1.17202 17.8825 1.10782 17.9853 1.06435 18.0983C1.02088 18.2114 0.999016 18.3325 1.00003 18.4547C1.00003 22.1663 1.36743 24.95 5.36077 24.95H21.0594Z"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M11.4084 6.67212H22.0172"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M15.0117 11.0847H22.0175"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <span onClick={() => setShowMoreModal(true)}>
                                  مشاهده بیشتر...
                                </span>
                              </p>
                            </div>
                            <div className="order_products_container">
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="current_order">
                            <div className="order_info">
                              <p>کد پیگیری : 98765456789</p>
                              <p>تاریخ : 02/03/1403</p>
                              <p>وضعیت : ارسال شده</p>
                              <p>
                                <svg
                                  width="27"
                                  height="26"
                                  viewBox="0 0 27 26"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00562 17.5972V1L9.74705 1.92207L11.4885 1L13.2267 1.92207L14.9882 1L16.7128 1.92207L18.4428 1L20.1804 1.92207L21.9371 1L23.6791 1.92207L25.42 1V13.9089"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M25.4202 13.8152V20.3105C25.4202 21.541 24.9607 22.721 24.1429 23.5911C23.3251 24.4612 22.216 24.95 21.0594 24.95M21.0594 24.95C19.9029 24.95 18.7937 24.4612 17.9759 23.5911C17.1581 22.721 16.6987 21.541 16.6987 20.3105V17.5268H1.87218C1.75737 17.5257 1.6435 17.549 1.53722 17.5952C1.43095 17.6415 1.3344 17.7098 1.25321 17.7962C1.17202 17.8825 1.10782 17.9853 1.06435 18.0983C1.02088 18.2114 0.999016 18.3325 1.00003 18.4547C1.00003 22.1663 1.36743 24.95 5.36077 24.95H21.0594Z"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M11.4084 6.67212H22.0172"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M15.0117 11.0847H22.0175"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <span onClick={() => setShowMoreModal(true)}>
                                  مشاهده بیشتر...
                                </span>
                              </p>
                            </div>
                            <div className="order_products_container">
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="current_order">
                            <div className="order_info">
                              <p>کد پیگیری : 98765456789</p>
                              <p>تاریخ : 02/03/1403</p>
                              <p>وضعیت : ارسال شده</p>
                              <p>
                                <svg
                                  width="27"
                                  height="26"
                                  viewBox="0 0 27 26"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00562 17.5972V1L9.74705 1.92207L11.4885 1L13.2267 1.92207L14.9882 1L16.7128 1.92207L18.4428 1L20.1804 1.92207L21.9371 1L23.6791 1.92207L25.42 1V13.9089"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M25.4202 13.8152V20.3105C25.4202 21.541 24.9607 22.721 24.1429 23.5911C23.3251 24.4612 22.216 24.95 21.0594 24.95M21.0594 24.95C19.9029 24.95 18.7937 24.4612 17.9759 23.5911C17.1581 22.721 16.6987 21.541 16.6987 20.3105V17.5268H1.87218C1.75737 17.5257 1.6435 17.549 1.53722 17.5952C1.43095 17.6415 1.3344 17.7098 1.25321 17.7962C1.17202 17.8825 1.10782 17.9853 1.06435 18.0983C1.02088 18.2114 0.999016 18.3325 1.00003 18.4547C1.00003 22.1663 1.36743 24.95 5.36077 24.95H21.0594Z"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M11.4084 6.67212H22.0172"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M15.0117 11.0847H22.0175"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <span onClick={() => setShowMoreModal(true)}>
                                  مشاهده بیشتر...
                                </span>
                              </p>
                            </div>
                            <div className="order_products_container">
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="current_order">
                            <div className="order_info">
                              <p>کد پیگیری : 98765456789</p>
                              <p>تاریخ : 02/03/1403</p>
                              <p>وضعیت : ارسال شده</p>
                              <p>
                                <svg
                                  width="27"
                                  height="26"
                                  viewBox="0 0 27 26"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00562 17.5972V1L9.74705 1.92207L11.4885 1L13.2267 1.92207L14.9882 1L16.7128 1.92207L18.4428 1L20.1804 1.92207L21.9371 1L23.6791 1.92207L25.42 1V13.9089"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M25.4202 13.8152V20.3105C25.4202 21.541 24.9607 22.721 24.1429 23.5911C23.3251 24.4612 22.216 24.95 21.0594 24.95M21.0594 24.95C19.9029 24.95 18.7937 24.4612 17.9759 23.5911C17.1581 22.721 16.6987 21.541 16.6987 20.3105V17.5268H1.87218C1.75737 17.5257 1.6435 17.549 1.53722 17.5952C1.43095 17.6415 1.3344 17.7098 1.25321 17.7962C1.17202 17.8825 1.10782 17.9853 1.06435 18.0983C1.02088 18.2114 0.999016 18.3325 1.00003 18.4547C1.00003 22.1663 1.36743 24.95 5.36077 24.95H21.0594Z"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M11.4084 6.67212H22.0172"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M15.0117 11.0847H22.0175"
                                    stroke="#515151"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <span onClick={() => setShowMoreModal(true)}>
                                  مشاهده بیشتر...
                                </span>
                              </p>
                            </div>
                            <div className="order_products_container">
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="order_products">
                                <div className="order_product_item">
                                  <img src={sample} alt="عکس محصول" />
                                  <div className="order_pr_desc">
                                    <p className="order_pr_price">
                                      <NumericFormat
                                        style={{
                                          fontFamily: "inherit",
                                          color: "inherit",
                                          fontSize: "inherit",
                                        }}
                                        value={1231231}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b>{value}</b>}
                                      />
                                      تومان
                                    </p>
                                    <p className="order_desc">
                                      لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15
                                      FX506HF-HN014-i5 11400H 16GB 512SSD
                                      RTX2050 - کاستوم شده
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </Scrollbars>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
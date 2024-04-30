import React from "react";
import "../css/Login.scss";

export default function Login() {
  return (
    <>
      <div className="login_container">
        <div className="login_box">
          <div className="register-login_container">
            <p>ثبت نام</p>
            <p>ورود</p>
          </div>
          <div className="login_input">
            <label>شماره تماس یا ایمیل خود را وارد کنید</label>
            <input placeholder="" name="" />
          </div>
          <button>ورود</button>
        </div>
      </div>
    </>
  );
}

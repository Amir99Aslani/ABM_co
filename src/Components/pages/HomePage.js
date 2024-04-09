import React from "react";
import Header from "../wedgits/Header";
import Footer from "../wedgits/Footer";
import "../css/HomePage.scss";
import Slider from "./Slider";
import Swaper from "./Swaper";

function HomePage(props) {
  return (
    <div className="mainContainer">
      <Header />
      <div className="mainContent">
        <div className="bannerContainer">
        <Slider />
        </div>
        <div className="crucelContainer">
       <Swaper/>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;

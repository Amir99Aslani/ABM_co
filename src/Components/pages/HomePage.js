import React from 'react';
import Header from "../wedgits/Header";
import Footer from "../wedgits/Footer";
import "../css/HomePage.scss";

function HomePage(props) {


    return (
        <div className="mainContainer">
            <Header/>
            <div className="mainContent">
                <div className="bannerContainer">

                </div>
                <div className="crucelContainer">

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;

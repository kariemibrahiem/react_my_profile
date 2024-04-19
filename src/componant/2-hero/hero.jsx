import React, { Fragment } from "react";
import "./hero.css";
import my_ph from "../images/my.png";
import ReactDOM from 'react-dom'
import p1 from "../images/picture ,icons/git_light.png";
import p2 from "../images/picture ,icons/linked_icon_active.png";
import p3 from "../images/picture ,icons/face_icon.png";
import logo from "../images/logo.png"
import back from "../images/back.png"
// import developer from "../../animation/developer3.json"
import Cards from "../3-main/card";
import Lottie from "react-lottie";
// import Lottie from "react-lottie";
import devo from "../../animation/developer.png";
const Hero = () =>{
    return(
        <Fragment>
            <div className="row hero_sec">
                <div className="col-sm-12 col-md-6">
                    <img src={my_ph} className="img_pro"/>
                    <h2>
                    kariem ibrahiem 
                    </h2>
                    <small>web developer</small>
                    <p className="text">
                        front-end developer and back-end solution provider , 
                        have courses in ui/ux design for a modern and good designs 
                        , and great expert in making a functional websites 
                    </p>
                    <button className="cv_bt"><a href="./kariem_cv_3.pdf" download className="cv"> take a look at cv</a></button>
                    <br />
                    <br />
                    <div className="connection">
                        <a href="https://github.com/kariemibrahiem"><img src={p1} className="icon"/></a>
                        <a href=""> <img src={p2} className="icon"/></a>
                        <a href="https://www.facebook.com/kemo.ibrahem.98/"> <img src={p3} className="icon"/></a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 logo_div">
                    {/* <Lottie animationData={developer}/> */}
                    <img src={devo} className="send" alt="" />
                    <img src="../../animation/dev.json" alt="" />
                </div>
            </div>
        </Fragment>
    );
}

export default Hero;
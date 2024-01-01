// import React, { useState } from "react";
import { RiAppleFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Showimage from "../images/imgShowcase.svg";
// import Header from "./header";
import "./hero.css";


function Hero() {
  return (
    <section className="section-hero">
     {/* <Header /> */}
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="col">
            <div className="col-body">
              <h1 className="col-title">دلبندم</h1>
              <h2 className="col-text">همزاد دیجیتالی سلامت برای فرزند شما</h2>
              <p className="col-p">در آینده ای نه چندان دور، هر انسان صاحب یک دوقلوی دیجیتالی خواهد بود که تمامی داده های مربوط به سلامت، رشد فیزیکی، رشد عقلی، رشد روانی-اجتماعی، بیماریها، عادات غذایی، داروها و … را در خود جاداده و توان تبادل آن را با متخصصین سلامت و پزشکی خواهد داشت. اپلیکیشن دلبندم با شما و فرزند شما همراه خواهد بود تا این داده ها را در محیطی امن و قابل دسترس برای شما و پزشکتان نگهداری نماید. </p>
              <buttons className="buttons">
                <button href="#" class="button-section-hero"><IoLogoGooglePlaystore  className='google'/>دانلود اپ به زبان فارسی از پلی استور</button>
                <button href="#" class="button-section-hero"><RiAppleFill  className="app"/> دانلود اپ به زبان انگلیسی از پلی استور</button>
              </buttons >
            
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="col">
            <div class="col-body-image">
              <img src={Showimage} alt="" className="img-fluid images-animation"/>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}
export default Hero;

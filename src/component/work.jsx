import React from "react";
import "./work.css";
import Record from '../component/Record'

function Work() {
  return (
    <>
      <div className="container-how-works">
        <div className="row">
          <div className="col-md-6  container-image-mobile" >
            <img src={require("../images/mobile.png")} className="img-how-works" alt=""/>
            <button className="btn"><Record className=" record" /></button>
          </div>
          <div className="col-md-6">
            <div className="title-work">
              <h1>چگونه با اپلیکیشن دلبندم کار کنم؟</h1>
            </div>

            <div class="button-how-works">
              <button type="button" className="btn-works ">
                <img src={require("../images/diapers_fill.svg")} className="img-work" alt=""/>
              </button>
              <button type="button" className="btn-works ">
                <img src={require("../images/medicine.svg")} className="img-work" alt="" />
              </button>
              <button type="button" className="btn-works">
                <img src={require("../images/groth_fill.svg")} class="img-work" alt=""/>
              </button>
            </div>
            <div className="how-works">
              <p className="text-works">
                کار با اپلیکیشن دلبندم بسیار آسان است. ما حداکثر سعی خودمان را
                کرده ایم تا شما به راحتی بتوانید اطلاعات لازم را وارد کنید. به
                زودی با عرضه امکان ارتباط صوتی با اپلیکیشن حتی احتیاج به تایپ
                کردن هم نخواهید داشت. برای آشنایی بیشتر با نحوه استفاده از
                اپلیکیشن به لینک زیر بروید تا آموزشهای لازم را به صورت تصویری
                فراگیرید.
              </p>
            </div>
            <div className="btn-work"><br/>
              <button type="button" className="btn-how-works-click">
                نحوه کار با اپ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-work">
        <button className="btn"><Record className=" record" /></button>
      </div> */}
     
    </>
  );
}
export default Work;

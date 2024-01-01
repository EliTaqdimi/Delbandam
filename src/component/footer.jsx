import React from "react";
import "./footer.css";
import Logo from "../images/logo.svg";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className=" row row-footer">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="col-logo">
            <div className="col-body-logo">
              <img src={Logo} alt="" class="logo-footer" />
            </div>
            <div>
              <h className="h-footer">دلبندم</h>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="col">
            <div class="col-body-p">
              <p>
                دلبندم اولین اپلیکیشن ایرانی ثبت کننده داده های سلامت و رشد کودک
                بر اساس معیارهای علمی است. دلبندم با ثبت و فرآوری داده های کودک،
                امکان نگهداری تمامی اطلاعات بهداشتی و پزشکی کودک را در یک مکان
                فراهم می آورد و به والدین امکان تبادل این داده ها را با تیم
                پزشکی میدهد.{" "}
              </p>
            </div>
            <div></div>
            <div>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn-footer" type="submit">
                  جستجو
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="icon-footer">
          <br />
          <br />
          <h className="h-copy">©2023 delbandam</h>
          <a href="#" className="icon-footer-twitter">
            <FaTwitter />
          </a>
          <a href="#" className="icon-footer-linkedin">
            <FaLinkedinIn />
          </a>
          <a href="#" className="icon-footer-google">
            <BsGoogle />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

import React, { useState, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import Logo from "../images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
// import {HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };


  window.addEventListener("scroll", changeColor);
  // close menu click
  const closeMenu = () => setClick(false);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
 
  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a href="/" className="logo">
          دلبندم
          <img src={Logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Nav.Link href="/" className="nav-item" onClick={closeMenu} to="/">
            خانه
          </Nav.Link>
          <Nav.Link
            href="/Howwork"
            className="nav-item"
            onClick={closeMenu}
            to="/work"
          >
            کاربا اپ
          </Nav.Link>
          <Nav.Link
            href="/Application"
            className="nav-item"
            onClick={closeMenu}
            to="/app"
          >
            ویژگی های اپلیکیشن
          </Nav.Link>
          <Nav.Link
            href="/About"
            className="nav-item"
            onClick={closeMenu}
            tp="/about"
          >
            درباره ما
          </Nav.Link>
          <Nav.Link
            href="/Job"
            className="nav-item"
            onClick={closeMenu}
            to="/job"
          >
            فرصت شغلی
          </Nav.Link>
          <Nav.Link
            href="/support"
            className="nav-item"
            onClick={closeMenu}
            to="/support"
          >پشتیبانی
       </Nav.Link>
       
       {/* <li><Link  smooth to='#section-form'>test</Link></li> */}
     </ul> 
   </nav>
 </div> 
  );
          }

export default Navbar;

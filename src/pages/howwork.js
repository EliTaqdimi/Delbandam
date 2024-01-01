import React from "react";
import Product from "../component/products";
import {productData ,responsive} from '../component/data';
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from 'react-multi-carousel';
// import Nav from "react-bootstrap/Nav";
// import Logo from "../images/logo.svg";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Header from "../component/header";

export const Work =()=>{
  const product= productData.map((item)=> (
    <Product
       name={item.name}
       url={item.imageurl}
        description={item.description}
      />
));



  return(
<>
{/* <Header/><br/><br/> */}
 <section id='how-it-work-id'>
    <div className='title-slide'>
      <h1>امکانات اپلیکیشن</h1> </div>
      <Carousel
             responsive ={responsive} 
             swipeable={false}
             showDots={true}  dotListClass="custom-dot-list-style" >
            {product}
      </Carousel>
  </section>
    </>
 
  )
}
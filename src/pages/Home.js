import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Hero from '../component/section-hero';
import {productData ,responsive} from '../component/data';
import Product from '../component/products';
import Work from '../component/work';
import Form from '../component/form';
import Footer from '../component/footer';
import Slide from '../component/slider';
import {slidetData ,respons} from '../component/dataslider';

// import Header from '../component/header'



function Home() { 


  const product= productData.map((item)=> (
      <Product
         name={item.name}
         url={item.imageurl}
        description={item.description}
        />
));
const slide= slidetData.map((item)=> (
  <Slide
     name={item.name}
     url={item.imageurl}
    description={item.description}
    />
));

  return (
    <>
    <section>  
    <Hero />
    </section>

    <section >
    <div className='title-slide'>
      <h1>امکانات اپلیکیشن</h1> </div>
      <Carousel
             responsive ={responsive} 
             swipeable={false}
             showDots={true}  dotListClass="custom-dot-list-style" >
            {product}
      </Carousel>
    </section>

  <section><br/>
  <Work/>
  </section>

 <section className='stats'>
 <div className='title-slide'>
 <h3>Our hardwares</h3>
 </div>
 <Carousel
      responsive ={respons} 
      swipeable={false}
      showDots={true}  dotListClass="custom-dot-list-style" >
      {slide}
      </Carousel>
 </section>
 
  <section style={{background:'#f2f2f2'}}><br/>
      <Form/>
 </section>

 <section>
  <Footer/>
 </section>
    </>
  
     
  );
}

export default Home;
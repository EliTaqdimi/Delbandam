import React from 'react';
import './slider.css'

// var slideIndex=0;
// // Slider();
function Slider() {
// var i;
// var slides=document.getElementsByClassName('item card');
// var dot=document.getElementsByClassName('dot');
// for(i=0;i<slides.length;i++){
//   slides[i].style.display='none';
// }
// slideIndex++;
// if(slideIndex>slides.length){
//   slideIndex=1;
// }
// for(i=0;i<dot.length;i++){
//   dot[i].className=dot[i].className.replace('active','')
// }
// slides[slideIndex-1].style.display='block';
// dot[slideIndex-1].className+=active;
// setTimeout(Slider,2000);
// }
 return (
<>
<section className="stats">
          <div className="container">
            <div className="stats-heading text-center my-1">
              <h3>Our hardwares</h3>
            </div> 
          </div>
          <div className="carousel ">
            <input type="radio" name="position" checked const className='dot'/>
            <input type="radio" name="position" className='dot'/>
            <input type="radio" name="position" className='dot'/>
            <input type="radio" name="position" className='dot'/>
      
            <main id="carousel">
              <div className="item card">
               <img src={require('../images/hard-1.48aa129.png')} alt='' style={{width:'100px',height:'100px'}}/>
                <h2>Sign Up and Log InSign Up and Log In</h2>
                <p>Begin your journey to IELTS success by signing up for a WriteWiseAI account. Once you've registered, log in to access your user panel and explore our wide range of features tailored for IELTS test-takers</p>
              </div>
              <div class="item card">
              <img src={require('../images/hard-2.bba8b7f.png')} alt=''/>
                <h2>Sign Up and Log InSign Up and Log In</h2>
                <p>Begin your journey to IELTS success by signing up for a WriteWiseAI account. Once you've registered, log in to access your user panel and explore our wide range of features tailored for IELTS test-takers</p>
              </div>
              <div className="item card">
              <img src={require('../images/hard-3.6c06644.png')} alt=''/>
                <h2>Sign Up and Log InSign Up and Log In</h2>
                <p>Begin your journey to IELTS success by signing up for a WriteWiseAI account. Once you've registered, log in to access your user panel and explore our wide range of features tailored for IELTS test-takers</p>
              </div>
              <div className="item card">
              <img src={require('../images/hard-4.b7115f1.png')} alt=''/>
                <h2>Sign Up and Log InSign Up and Log In</h2>
                <p>Begin your journey to IELTS success by signing up for a WriteWiseAI account. Once you've registered, log in to access your user panel and explore our wide range of features tailored for IELTS test-takers</p>
              </div>
              </main>
         
     </div>
    </section>
</>
  );
}
 export default Slider;


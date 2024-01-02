import React from 'react';
import './slider.css';


function Slider(props) {

 return (
<>
<div className="slider-container">
  <div className="left-slide">
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
    
  </div>
  <div className="right-slide">
    <div className="div-hard "style={{textAlign: 'center', marginTop:'5rem'}} >
      <img src={props.url} className="img-hard" alt=''/>
      </div>
    
  </div>
</div>
</>
  );
}
 export default Slider;


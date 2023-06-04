import React from 'react';
import './banar.style.css';
import omandata_logo from './omandata_logo.png';
import banner1 from './banner1.jpeg';


const BannerWithButton = () => {
  return (
    <div className="banner"> 
    <div  style={{backgroundImage:`url(${banner1})`,
    backgroundRepeat: 'no-repeat', 
    backgroundSize:'cover', height:'800px'}}>
      
      <h1>Explore data-driven descion with Oman Data</h1>
      <p>Oman data is an innovative data collecting of Oman. We provide comprehensive data collection to serve the researcher & decision maker community in Oman helping them to make informed decisions. Our team is experienced and knowledgeable, dedicated to providing the highest quality of data</p>
      <button className="banner-button">Contact</button>
    </div>
    </div>
  
  );
};

export default BannerWithButton;

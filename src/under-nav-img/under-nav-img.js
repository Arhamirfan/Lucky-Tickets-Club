
import './under-nav-img.css';
import React, { useState } from 'react';
import luckimage from './ticket.png'
import $ from 'jquery'
function Undernav() {
    
  return (<>
    <div className='div-img' id='home'>
        <img className='img' src={luckimage}></img>
    </div>
   


    </>
    
  );
}

export default Undernav;


import './footer.css';
import React, { useState } from 'react';
import openn from './openn.png'
import {tdd} from '../navbar/menuitem' 
function Footer() {
 
  return (<>
<div className='footer'>
<hr className='hr'></hr>
<div>
<div className='well'><h1 className='comee'>LUCKY TICKETS  CLUB</h1></div>

<div className='nav_discordd'>
        <ul className='nav_leftt'>
                {tdd.map((item,index)=>{
                return(
                        <li key={index}><a className={item.cName} id={item.id} href={item.url}>{item.title}</a></li>
                )
                })}
               <a href='https://opensea.io/collection/lucky-tickets-club'><img className='openn' src={openn}></img></a>
            </ul>
           
        </div>
        <div className='well'><h1 className='comeee'>JOIN OUR PLATFORMS</h1>
        <p className='para'>	Join our Discord and Twitter for inquiries, questions and updates.</p></div>
        </div>
</div>

    </>
    
  );
}

export default Footer;

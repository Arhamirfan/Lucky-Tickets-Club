
import './navbar.css';
import React, { useState } from 'react';
import Open from './OpenSea.png'
import { menuitem } from './menuitem';
import {td} from './menuitem' 
import logo from './ticket.png'
import {Link} from "react-scroll"
function Navbar() {
    const [state, setstate] = useState(false)
   const handleclick=()=>
   {
       state?setstate(false):setstate(true)
   }
  return (<>
    <navbar className='navbar'>
    <div className="App">
        <div className='logo-div'>  <img src={logo} className='logo'></img></div>
        <div className='nav_menu'> <div className='menu-icon' onClick={handleclick}>
               <i className= {state? 'fas fa-times':'fas fa-bars' }></i>
            
            </div> <ul  className={state? 'nav_center active':'nav_center ' }>
                {menuitem.map((item,index)=>{
                return(
                        <li key={index}><Link smooth={true} duration={1500} offset={-300} to={item.url} className={item.cName}  >{item.title}</Link></li>
                )
                })}
              
            </ul></div>
        <div className='nav_discord'>
        <ul className='nav_left'>
                {td.map((item,index)=>{
                return(
                        <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                )
                })}
              <a href='https://opensea.io/collection/lucky-tickets-club'><img className='open' src={Open}></img></a>
            </ul>
        </div>
   

    
    </div>
    </navbar>
    </>
  );
}

export default Navbar;

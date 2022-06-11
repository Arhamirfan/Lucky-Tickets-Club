import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar/navbar.js';
import Undernav from './under-nav-img/under-nav-img.js';
import Welcome from './welcome/welcome.js';
import Timeline from './timeline/timeline';
import Roadmap from './roadmap/roadmap';
import Faq from './FAQ/faq';
import Footer from './footer/footer';
import reportWebVitals from './reportWebVitals';
import {Switch,Router,Route} from 'react-router-dom'
document.body.className += " js-loading";

// Listen for when everything has loaded
window.addEventListener("load", showPage, false);

function showPage() {
  // Remove the "js-paused" class
  document.body.className = document.body.className.replace("js-loading","");
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
 
  <Undernav/>
  <Welcome/>
  <Timeline/>
  <Roadmap/>
  <Faq/>
  <Footer/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

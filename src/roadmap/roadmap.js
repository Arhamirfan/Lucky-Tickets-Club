
import './roadmap.css';
import React, { useState } from 'react';
function Roadmap() {
  const elementsToShow = document.getElementsByClassName('show-on-scroll'); 



  window.addEventListener('scroll', function() {
Array.prototype.forEach.call(elementsToShow,function (element) {
  if (isElementInViewport(element)) {
    element.classList.add('is-visible');
    
  } else {
    element.classList.remove('is-visible');
  }
});

});
 
function isElementInViewport(el) {
var rect = el.getBoundingClientRect();
return (
  (rect.top <= 0
    && rect.bottom >= 0)
  ||
  (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight))
  ||
  (rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}
  return (<>
  <br></br>
  <br></br>
  <br></br>
  <div className='outroad' id='roadmap'>
   <div class="direction-l show-on-scroll">
			<div class="fla-wrapper">
				<span class="fla">ROADMAP</span>
				</div>
			<div class="desc">   <p><strong>Phase 1: Launching the Collection</strong><br></br>
●Launching Discord and Twitter for announcements and updates.<br></br>
●Launching our collection of 999 NFTs directly on OpenSea Marketplace.<br></br>
●Create a community for all holders and open discussions about the project.<br></br>
●Project will officially be listed for public sale on June 15, 2022.</p>


<p><strong>Phase 2: AWARDING WINNERS</strong><br></br>
●Lucky ticket numbers will be based on every Mondays, Wednesdays and <br></br>
Fridays’ two winning set of numbers of the California State Lottery  <br></br>
“Daily 3” for each day.<br></br>
●AWARDING OF WINNERS WILL START ON MONDAY, JUNE 20, 2022.<br></br>
●Lucky winner(s) will be awarded 30 SOL for each winning ticket within 24 to<br></br>
 48 hours. 
 <br></br>
●If the winning ticket number has a black color background, the prize is<br></br>
 doubled.</p>


 <p><strong>Phase 3: ADDITIONAL PRIZE</strong><br></br>
●ONCE THE PROJECT SELLS OUT, PRIZE WILL BE SET TO A GUARANTEED 40<br></br> SOL EACH FOR TWELVE MONTHS.</p>
</div>
		</div>
   
        </div>

    </>
    
  );
}

export default Roadmap;

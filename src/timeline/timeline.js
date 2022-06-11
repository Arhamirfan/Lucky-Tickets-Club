
import './timeline.css';
import React, { useState } from 'react';
import $ from 'jquery'
function Timeline() {
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
  


<ul class="timeline" >
	<li id='about'>
    
	<div class="direction-r show-on-scroll ">
			<div class="flag-wrapper" >
				<span class="flag">ABOUT</span>
				</div>
			<div class="desc"><p>Lucky Tickets Club is a project consisting of a collection of 999 non fungible tokens<br></br> (NFTs) in the form of ticket numbers from 1 to 999 living on the SOLANA Blockchain<br></br>. A ticket number will be sold as NFT to buyers and get up to SIX <br></br>chances to win 30 SOL every week. ONCE THE PROJECT SELLS OUT, the prize<br></br> will increase to 40 SOL for each winning ticket for the next TWELVE MONTHs.</p>
                <p className='red'>Winning ticket numbers will be based on the result of <br></br>the two sets of winning numbers from the California State Lottery’s <br></br>“Daily 3” Monday,
                <br></br> Wednesday and Friday draws ONLY.</p></div>
		</div>
              
               
	</li>

	<li>
		<div class="direction-l show-on-scroll">
			<div class="flag-wrapper">
				<span class="flag">BUY MINTED NFT</span>
				</div>
			<div class="desc"><p>Each Lucky Ticket costs 15 SOL<br></br>
Official public sale day on OpenSea will be on June 15, 2022 12:00 PM PDT<br></br>

NO PRESALE. NO GIVEAWAY.<br></br>
980 out of the 999 collection will be available in OpenSea for the same fixed price of 15 SOL each.<br></br>
Remaining 19 BLACK TICKETS will be sold for a fixed price of 25 SOL each.</p>
</div>
		</div>
	</li>

	<li>
		<div class="direction-r show-on-scroll">
			<div class="flag-wrapper">
				<span class="flag">What is California State Lottery “Daily 3”?</span>
				</div>
			<div class="desc"><p>“Daily 3” is a lottery game that lets you play your favorite three numbers with<br></br>
                drawings twice a day. NUMBERS ARE RANDOMLY PICKED WITH A SECURE<br></br>
                 PROCESS BY THE CALIFORNIA LOTTERY SYSTEM WHICH YOU CHECK ON THEIR<br></br>
                  WEBSITE ANYTIME. MEANING, there will be a total of six lucky winners every<br></br>
                   week. Winners will be announced every Monday, Wednesday and Friday at 9:00 <br></br>
                   PM PDT. Winners will be announced on all our platforms and prizes will be <br></br>
                   awarded directly to holders’ public Phantom wallet addresses within 24 to 48<br></br>
                    hours. Winning ticket numbers can be won multiple times depending on the<br></br>
                     draws.<br></br></p>
					 
<p className='red'>* WINNING TICKET NUMBERS WITH BLACK COLOR BACKGROUNDS ARE SUBJECTED TO DOUBLE THE PRIZE*<br></br>

*TICKET NUMBERS ARE ENTITLED TO WIN THE PRIZES MULTIPLE TIMES ON MULTIPLE DRAWS PROVIDED THAT THE NFT IS BEING HELD*<br></br>

*THE PRIZES WILL BE FORFEITED IN THE EVENT THAT THE WINNING TICKET <br></br>NUMBER IS NOT YET SOLD BUT WILL STILL BE ELIGIBLE FOR PRIZES ONCE BOUGHT*</p>
</div>
		</div>
	</li>




	<li>
		<div class="direction-l show-on-scroll" >
			<div class="flag-wrapper">
				<span class="flag">WHY ARE WE DOING THIS?</span>
				</div>
			<div class="desc">  <p>The main goal of this project is to grow a community wherein 80% of
                    the proceeds (12,000 SOL) will be given back to the community through prizes in the <br></br>
                    twelve months of selling out from the community wallet. After giving back 80% of the PROCEEDS, 80% of<br></br>
                     the ROYALTIES will then be used as prizes which are <br></br>
                     subjected to adjustments. Lucky Tickets Club is committed to creating an exciting 
                     <br></br>and thrilling environment for everyone.</p>
</div>
		</div>
	</li>

	<li id='team'>
		<div class="direction-r show-on-scroll" >
			<div class="flag-wrapper" >
				<span class="flag">TEAM</span>
				</div>
			<div class="desc"> <p>Lucky Tickets Club is led by a two-man team who have the passion of giving back <br></br>
               to the NFT community by creating a fair and exciting environment for all<br></br>
                enthusiasts.  <br></br>

                <strong>●Joe</strong><br></br>
⮚Founder, project manager, community engagement specialist, NFT visionary<br></br>
<strong>●Bry</strong><br></br>
⮚Co-founder, marketing & social media specialist, NFT visionary</p>
</div>
		</div>
	</li>







  
</ul>

    </>
    
  );
}

export default Timeline;




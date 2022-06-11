
import './faq.css';
import React, { useState } from 'react';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
function Faq() {

  return (<>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <div className='heading' id='faq'>
      <h1>FAQ!</h1>
      </div>
      <br></br>
  <br></br>
  <div  className='outfaq'>
      
  <div className='faq'>
 <details open>
  <summary>What is an NFT?</summary>
  <div class="faq__content">
    <p className='answer'>NFT means ‘non-fungible token’. An NFT is a proof of ownership of a unique digital piece of art or any type of digital media.<br></br>
</p>
  </div>
</details>
<details>
  <summary>How can I get an NFT?</summary>
  <div class="faq__content">
    <p className='answer'>Our NFTs are in the form of ticket numbers. You can purchase a recommended maximum of two tickets on our OpenSea Marketplace and
 get a chance to win prizes three times weekly.</p>
  </div>
</details>
<details>
  <summary>How many NFTs are in your collection?</summary>
  <div class="faq__content">
    <p className='answer'>We have 999 Lucky Ticket Numbers for sale which varies from 15 SOL to 25 SOL each.
</p>
  </div>
</details>
</div>
</div>
<br></br>
  <br></br>
  <br></br>
    </>
    
  );
}

export default Faq;





import React from 'react';
import easyexchange from '../assets/easyexchange.jpg';  
import certified from '../assets/certified.png';  
import days from '../assets/14days.jpg';  
import lifetime from '../assets/lifetime.jpg';  
const Service = () => {
  return (

<div className='my-12 flex justify-center items-center gap-8' id="service">
    <div className="text-center">
        <img src={easyexchange} alt="" style={{ width: '200px', height: '200px' }} />
        <p>Easy Exchange</p>
    </div>
    <div className="text-center">
        <img src={certified} alt="" style={{ width: '200px', height: '200px' }} />
        <p>Certified Jewellery</p>
    </div>
    <div className="text-center">
        <img src={days} alt="" style={{ width: '200px', height: '200px' }} />
        <p>14 Days Return</p>
    </div>
    <div className="text-center">
        <img src={lifetime} alt="" style={{ width: '200px', height: '200px' }} />
        <p>Lifetime product service</p>
    </div>
</div>
  )
}

export default Service
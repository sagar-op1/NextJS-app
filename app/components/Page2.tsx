import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

const Page2 = () => {
  return (
   <div className="pg2-container-1">
    <div className='pg2-box-1'>
        <div className="pg2-para-text">
  <h1>WHAT WE DO</h1>
</div>
<div className="pg2-heading-text">
  <p>We provide the Perfect Solution to your business growth</p>
</div>
</div>
<div className='pg2-box-2'>
  <div className='pg2-card1'>
  <div className='box-space'>
    <div className=''>
    <Image src="/Activity.svg" alt="" width={75} height={50}/>
   
    <div className='head'>
      <h1>Grow Your Business</h1>
    </div>
    <div className='para'>
      <p>We help identify the best ways to improve your business</p>
    </div>
    </div>
    </div>
    <div className='ancho-pg2'>
      <p>Learn More<FaArrowRight className='iconposi' /></p>
    </div>

  
</div>
<div className='pg2-card1'>
  <div className='box-space'>
    <div className=''>
    <Image src="/Heart.svg" alt="" width={75} height={50}/>
   
    <div className='head'>
      <h1>Grow Your Business</h1>
    </div>
    <div className='para'>
      <p>We help identify the best ways to improve your business</p>
    </div>
    </div>
    </div>
    <div className='ancho-pg2'>
      <p>Learn More<FaArrowRight className='iconposi' /></p>
    </div>

  
</div>
<div className='pg2-card1'>
  <div className='box-space'>
    <div className=''>
    <Image src="/Work.svg" alt="" width={75} height={50}/>
   
    <div className='head'>
      <h1>Grow Your Business</h1>
    </div>
    <div className='para'>
      <p>We help identify the best ways to improve your business</p>
    </div>
    </div>
    </div>
    <div className='ancho-pg2'>
      <p>Learn More<FaArrowRight className='iconposi' /></p>
    </div>

  
</div>




</div>
</div>

  )
}

export default Page2
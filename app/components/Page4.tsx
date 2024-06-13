import React from 'react'
import Image from 'next/image'



const Page4 = () => {
  return (

   <div className="page4-container">
    <div className='Blnk-headtext'>
        <div className="pg4-para-text">
  <h1>OUR PORTFOLIO</h1>
</div>
<div className="pg4-heading-text">
  <p>We provide the Perfect Solution to your business growth</p>
</div>
</div>
<div className='pg4-box-2'>
  <div className='pg4-card1'>
  <div className='pg4-box-space'>
    <Image src="/Screenshot 2022-05-06 at 10.35.svg" alt="" width={800} height={200}/>
    <div className='pg4-head mt-4'>
      <h1>Digital Marketing Agency Website</h1>
      </div>
    <div className='pg4-para mt-2'>
      <p>This is a website for a client who want to achieve their goals and meet their users meeds while also increasing their reach. Accross all platforms. This is a website rebrand</p></div></div>
   

  
</div>
<div className='pg4-card1'>
  <div className='pg4-box-space'>
    
    <Image src="/Screenshot 2022-05-14 at 11.15.svg" alt="" width={800} height={200}/>
   
    <div className='pg4-head mt-4'>
      <h1>Digital Marketing Agency Website</h1>
      </div>
    <div className='pg4-para mt-2'>
      <p>This is a website for a client who want to achieve their goals and meet their users meeds while also increasing their reach. Accross all platforms. This is a website rebrand</p> </div> </div></div>



   




      </div></div>









  )
}

export default Page4
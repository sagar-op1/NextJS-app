import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroPage = () => {
  return (

    
<div >
<div className="bg-container">
      <div className="body-content">
        {/* Left part content */}
        
        <div  className="heading-text">

     <h1> Increase Your Customers Loyality and Satisfaction </h1>
      
    </div>

    <div className='mt-4 text-lg'>
      <p>We help business like yours earn more customers,standard from competitors, make money
      </p>
      </div>
    <div>
      <button>
    <Link href="/" className="HeadtextButton mt-6 ">
            Get Started
          </Link>
          </button>
        </div>
      </div>

     

      <div className="body-image">
       <div className="w-500">
        <Image src="/Group 38.svg" alt="" width={500} height={50}/>
      </div>
      </div>
    </div>
    </div>
    
   
  );
};

export default HeroPage;

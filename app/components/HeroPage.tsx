import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div className="bg-container">
      <div className="body-content">
        <div className="heading-text">
          <h1>Increase Your Customers Loyality and Satisfaction</h1>
        </div>
        <div className="sub-text mt-4 text-lg">
          <p>We help business like yours earn more<br/>customers, stand out from competitors, make money</p>
        </div>
        <div>
          <Link href="/" className="headtext-button mt-6">Get Started</Link>
        </div>
      </div>
      <div className="body-image">
        <Image src="/Lady.svg" alt="Illustration of a lady" width={500} height={500} />
      </div>
    </div>
  );
};

export default HeroPage;

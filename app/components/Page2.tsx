import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="pg2-card1">
      <div className="pg2-box-space">
        <Image src={icon} alt={title} width={50} height={50} />
        <div className="pg2-head">
          <h1>{title}</h1>
        </div>
        <div className="pg2-para">
          <p>{description}</p>
        </div>
      </div>
      <div className="pg2-ancho">
        <p>
          Learn More <FaArrowRight className="iconposi" />
        </p>
      </div>
    </div>
  );
};

const Page2 = () => {
  const cards: CardProps[] = [
    {
      icon: '/Activity.svg',
      title: 'Grow Your Business',
      description: 'We help identify the best ways to improve your business',
    },
    {
      icon: '/Heart.svg',
      title: 'Improve brand loyalty',
      description: 'We help identify the best ways to improve your business',
    },
    {
      icon: '/Work.svg',
      title: 'Improve Business Model',
      description: 'We help identify the best ways to improve your business',
    },
  ];

  return (
    <div className="pg2-container-1">
      <div className="pg2-box-1">
        <div className="pg2-para-text">
          <h1>WHAT WE DO</h1>
        </div>
        <div className="pg2-heading-text">
          <p>We provide the Perfect Solution to your business growth</p>
        </div>
      </div>
      <div className="pg2-box-2">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Page2;

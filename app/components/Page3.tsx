import React from 'react';
import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  value: string;
}

const Card: React.FC<CardProps> = ({ icon, title, value }) => {
  return (
    <div className="pg3-card1">
      <div className="pg3-img">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <div className="pg3-para">
        <p>{title}</p>
      </div>
      <div className="Number">{value}</div>
    </div>
  );
};

const Page3 = () => {
  const cards = [
    { icon: '/project-plan.svg', title: 'Completed Projects', value: '100 +' },
    { icon: '/rating (1).svg', title: 'Customer Satisfaction', value: '20 %' },
    { icon: '/raise.svg', title: 'Raised by Client', value: '$20M' },
    { icon: '/timeline 2.svg', title: 'Years in Business', value: '2 yrs' },
  ];

  return (
    <div className="page3-container">
      <div className="page3-box">
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} value={card.value} />
        ))}
      </div>
    </div>
  );
};

export default Page3;

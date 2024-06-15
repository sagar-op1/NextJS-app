import React from 'react';
import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
  description: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <Image src={image} alt={title} width={500} height={500} />
      </div>
      <div className="card-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Page4 = () => {
  const cards: CardProps[] = [
    {
      image: "/Screenshot 2022-05-06 at 10.35.svg",
      title: "Digital Marketing Agency Website",
      description: (
        <>
          This is a website for a client who wants to achieve their <br /> goals and meet their users' needs while also increasing their reach.
          <br /> Across all platforms. This is a website rebrand.
        </>
      ),
    },
    {
      image: "/Screenshot 2022-05-14 at 11.15.svg",
      title: "Digital Marketing Agency Website",
      description: (
        <>
          This is a website for a client who wants to achieve their <br /> goals and meet their users' needs while also increasing their reach.
          <br /> Across all platforms. This is a website rebrand.
        </>
      ),
    },
    {
      image: "/Screenshot 2022-05-14 at 11.17 (1).svg",
      title: "Digital Marketing Agency Website",
      description: (
        <>
          This is a website for a client who wants to achieve their <br /> goals and meet their users' needs while also increasing their reach.
          <br /> Across all platforms. This is a website rebrand.
        </>
      ),
    },
    {
      image: "/Screenshot 2022-05-06 at 10.33.40 PM 6.26 (1).svg",
      title: "Digital Marketing Agency Website",
      description: (
        <>
          This is a website for a client who wants to achieve their <br /> goals and meet their users' needs while also increasing their reach.
          <br /> Across all platforms. This is a website rebrand.
        </>
      ),
    },
  ];

  return (
    <div className="page4-container">
      <div className="pg4-Blnk-headtext">
        <div className="pg4-para-text">
          <h1>OUR PORTFOLIO</h1>
        </div>
        <div className="pg4-heading-text">
          <p>We provide the Perfect Solution<br/> to your business growth</p>
        </div>
      </div>
      <div className="pg4-box-2">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Page4;

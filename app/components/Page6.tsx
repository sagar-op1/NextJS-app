import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Image from "next/image";

const Page6 = () => {
  return (
    <div className="page6-container">
      <div className="pg6-Blnk-headtext">
        <div className="pg6-para-text">
          <h1>TESTIMONIALS</h1>
        </div>
        <div className="pg6-heading-text flex justify-between w-100">
          <div>
            <p>
              See What Our Customer <br /> Say About Us
            </p>
          </div>
          <div className="Page51-Icon flex">
            <div className="Page6Icon-1">
              <GoChevronLeft />
            </div>
            <div className="Page6Icon">
              <GoChevronRight />
            </div>
          </div>
        </div>
      </div>
      <div className="pg6-box-2">
        <div className="pg6-card1">
          <div className="pg6-box-space">
            <p>Thank You for your service. I am very pleased
            with the result. I have seen exponential growth
            in my business and it's all thanks to your
            amazing service</p>
            <div className="pg6-droplet">
              <Image src="/Frame 28.svg" alt="" width={200} height={200} />
            </div>
          </div>
        </div>
        <div className="pg6-card1">
          <div className="pg6-box-space">
          <p>Thank You for your service. I am very pleased
            with the result. I have seen exponential growth
            in my business and it's all thanks to your
            amazing service</p>
            <div className="pg6-droplet">
              <Image src="/Frame 28.svg" alt="" width={200} height={200} />
            </div>
          </div>
        </div>
        <div className="pg6-card1">
          <div className="pg6-box-space">
          <p>Thank You for your service. I am very pleased
            with the result. I have seen exponential growth
            in my business and it's all thanks to your
            amazing service</p>
            <div className="pg6-droplet">
              <Image src="/Frame 28.svg" alt="" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;

import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Image from "next/image";

const Page51 = () => {
  return (
    <div className="page51-container">
      <div className="Blnk-headtext">
        <div className="pg4-para-text">
          <h1>TESTIMONIALS</h1>
        </div>
        <div className="pg51-heading-text flex justify-between w-66">
          <div>
            <p>
              See What Our Customer <br></br> Say About Us
            </p>
          </div>
          <div className="flex">
            {" "}
            <div>
              <IoIosArrowDropleft />
            </div>
            <div>
              <IoIosArrowDropright />
            </div>
          </div>
        </div>
      </div>
      <div className="pg4-box-2">
        <div className="pg51-card1">
          <div className="pg51-box-space">
            <p>Thank You for your service.I am very pleased</p>
            <p>with the result. I have seen exponencial growth</p>
            <p> in my business and its all thanks to your</p>
            <p> amazing service</p>

            <div className="droplet">
              <Image src="/Frame 28.svg" alt="" width={200} height={200} />
            </div>
          </div>
        </div>
        <div className="pg4-card1">
          <div className="pg51-box-space">
            <p>Thank You for your service.I am very pleased</p>
            <p>with the result. I have seen exponencial growth</p>
            <p> in my business and its all thanks to your</p>
            <p> amazing service</p>

            <div className="droplet">
              <Image src="/Frame 28.svg" alt="" width={200} height={200} />
            </div>
          </div>
        </div>

        <div className="pg4-card1">
          <div className="pg51-box-space">
            <p>Thank You for your service.I am very pleased</p>
            <p>with the result. I have seen exponencial growth</p>
            <p> in my business and its all thanks to your</p>
            <p> amazing service</p>

            <div className="droplet">
              <Image src="/Frame 28.svg" alt="" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page51;

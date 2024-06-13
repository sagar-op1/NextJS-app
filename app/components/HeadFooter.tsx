
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeadFooter = () => {
  return (
  
    <div className="headfooter-container">
    <div className="">
      <ul className="headfooternav ">
      
        <li>
        <div className="flex items-center space-x-4 ">
        <Image src="/logos_google.svg" alt="" width={100} height={60}/>
      </div>
          
        </li>
        <li>
        <div className="flex items-center space-x-4 pl-12">
        <Image src="/Trello-logo-blue 1.png" alt="" width={100} height={60}/>
      </div>
        </li><li>
        <div className="flex items-center space-x-4 pl-12">
        <Image src="/logos_monday.svg" alt="" width={100} height={60}/>
      </div>
        </li><li>
        <div className="flex items-center space-x-4 pl-12">
        <Image src="/Notion.svg" alt="" width={100} height={60}/>
      </div>
    
        </li><li>
        <div className="flex items-center space-x-4 pl-12">
        <Image src="/Slack.svg" alt="" width={100} height={60}/>
        </div>
        </li>
      </ul>
    </div>
    </div>
    
  );
};

export default HeadFooter



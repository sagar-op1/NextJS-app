import React from 'react';
import Image from 'next/image';

const HeadFooter = () => {
  return (
    <div className="headfooter-container">
      <ul className="headfooternav">
        <li>
          <Image src="/logos_google.svg" alt="Google logo" width={100} height={60} />
        </li>
        <li>
          <Image src="/Trello-logo-blue 1.png" alt="Trello logo" width={100} height={60} />
        </li>
        <li>
          <Image src="/logos_monday.svg" alt="Monday.com logo" width={100} height={60} />
        </li>
        <li>
          <Image src="/Notion.svg" alt="Notion logo" width={100} height={60} />
        </li>
        <li>
          <Image src="/Slack.svg" alt="Slack logo" width={100} height={60} />
        </li>
      </ul>
    </div>
  );
};

export default HeadFooter;

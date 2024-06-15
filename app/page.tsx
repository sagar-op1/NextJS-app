import React from 'react';
import NavBar from "./components/NavBar";
import HeroPage from "./components/HeroPage";
import HeadFooter from './components/HeadFooter';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page6 from './components/Page6';
import Page7 from './components/Page7';


export default function Home() {
  return (
    <div  className="bg-custom-1 ">
      <div className="bg-custom ">
      <NavBar />
        <HeroPage/>
        <HeadFooter/>
        </div>
       <Page2/>
       <Page3/>
       <Page4/>
       <Page6/>
       <Page7/>
       </div>
 
  );
}

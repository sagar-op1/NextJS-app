import React from 'react';
import NavBar from "./components/NavBar";
import HeroPage from "./components/HeroPage";
import HeadFooter from './components/HeadFooter';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page51 from './components/Page51';


export default function Home() {
  return (
    <div>
      
      <div className="bg-custom">
      <NavBar />
      
        <HeroPage/>
        <HeadFooter/>
        </div>
        
       <Page2/>
       <Page3/>
       
       <Page4/>
       <Page5/>
       <Page51/>
       <Page6/>

               </div>
      
        
      
      
   
  );
}

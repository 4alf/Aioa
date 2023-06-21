import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';

function App() {
  return (
    <div>
      <div className="container">
        <Navbar/>
       <Hero/>
       <Features/>
       <HowItWorks/>
      </div>
     
    </div>
  );
}

export default App;

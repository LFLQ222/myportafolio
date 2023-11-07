import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portafolio from './components/Portafolio';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <Portafolio/>
      <Experience/>
      
      <SocialLinks/>

    </div>
  );
}

export default App;
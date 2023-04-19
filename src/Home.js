import React from 'react';

import Navbar from './components/Navbar';
import NavPhones from "./components/NavPhones";
import Menu from './components/Menu';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
	
  return (
    <div>
        <Navbar />
        <NavPhones />
        <Menu />
	  <Hero />
	  <AboutUs />
        <Footer />
    </div>
  );
}

export default App;

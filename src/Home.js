import React from 'react';
import { useState } from 'react'

import Home from './Home';
import Team from './Team';
import TeamU9 from './TeamU9';
import TeamU13 from './TeamU13';
import Redirect from "./Redirect";
import Partners from './Partners';
import Contact from './Contact';
import Program from './Program';
import Gallery from './Gallery';
import PersonalTraining from './PersonalTraining';

import Navbar from './components/Navbar';
import NavPhones from "./components/NavPhones";
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage)
  }
	
  return (
    <div className="app">
        <Navbar />
        <NavPhones />
        <Menu />
        {currentPage === "home" && <Home />}
        {currentPage === "partners" && <Partners />}
        {currentPage === "contact" && <Contact />}
        {currentPage === "echipe" && <Team />}
        {currentPage === "u9" && <TeamU9 />}
        {currentPage === "u13" && <TeamU13 />}
        {currentPage === "redirect" && <Redirect />}
        {currentPage === "program" && <Program />}
        {currentPage === "galerie" && <Gallery />}
        {currentPage === "antrenament" && <PersonalTraining />}
        <Footer />
    </div>
  );
}

export default App;

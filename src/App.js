import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

import NavbarX from './components/Navbar/NavbarX';
import Footer from './components/Footer/Footer';
import Home from './container/Home/Home';
import { Routes, Route } from 'react-router-dom';
import EarthObjects from './container/EarthObjects/EarthObjects';

const initialPic = {
  pic1: '',
  pic2: '',
  pic3: '',
}


function App() {
  //  state will hold the api object
  const [apod, setApod] = useState([]);

  // will hold the top 3 img votes
  const [topPic, setTopPic] = useState(initialPic);










  return (
    <div className="App">

      {/* STYLING THE PAGE */}
      <div className='App-header'>
        <NavbarX />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/near_earth_objects" element={<EarthObjects />} />
        </Routes>

        <Footer />
      </div>


    </div>
  );
};

export default App;

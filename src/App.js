import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Dissertation from './components/pages/dissertation';
import Visuals from './components/pages/visuals';

import './App.css';

function App() {
  return (

    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={ <Home/>}/>
          <Route exact path="/Dissertation" element={<Dissertation/>}/>
          <Route exact path="/Visuals" element={<Visuals/>}/>

        </Routes>
      </Router>
    </div>
    
  );
}

export default App;

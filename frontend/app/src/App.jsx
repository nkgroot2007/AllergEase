import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import { Footer, Getstarted, Home, Navbar, Symptoms } from "./components";

//routes:
//  symptoms
function App() {
  
  return (
    <div class="app-container">
      <Router>
        <Navbar />
        <div className="content">

          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route className="getStartedbg" path='/get-started' element={<Getstarted />} />
              <Route className="getStartedbg" path='/symptoms' element={<Symptoms />} />
          </Routes>
        </div>
        <Footer className="footer"/>
      </Router>
    </div>
  );
};
  
export default App;

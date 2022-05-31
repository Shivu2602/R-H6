import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Students from './Component/Students';
import StudentsDesc from './Component/StudentsDesc';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />}/>
        <Route path='contact-us' element={<Contact />}/>
        <Route path='/students' element={<Students />}/>
        <Route path='/students-desc' element={<StudentsDesc />}/>
        <Route path='/students-desc/:id' element={<StudentsDesc />}/>
      </Routes>
    </Router>
  );
}

export default App;
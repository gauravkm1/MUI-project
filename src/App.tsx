import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MuiNavbar from './components/muinavbar';
import './App.css';
import Default from './components/Default';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <>
    <MuiNavbar/>
     <Routes> 
    <Route path='/Default' element={<Default/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Home'    element={<Home/>} />
    
  </Routes>
   </>
  );
}

export default App;

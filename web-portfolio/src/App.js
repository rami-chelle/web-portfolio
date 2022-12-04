import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

// import components
import HomePage from './pages/HomePage';
import About from './pages/About';


const App = () => {
  return (
    <>
    <main className= 'app'>
      <Routes>
        <Route path = '/' element = {<HomePage />} /> 
        <Route path = '/About' element = {<About/>}/>
      </Routes>

    </main>
   
    </>
  )
}

export default App;

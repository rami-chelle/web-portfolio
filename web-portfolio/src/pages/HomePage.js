import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
   <div className = 'homepage-container'>
        < Header/>
        <div className = 'homepage-body-container'>
            <h1 className = 'name-container'>I'm Ramichelle Maguigad</h1> <br />
            <h2 className = 'text-container'>I am a MERN full stack web developer which aims to build a website that prioritizes in providing assistance to those people  who are in need.</h2>
        </div>
        <Footer />
   </div>
  )
}

export default HomePage;
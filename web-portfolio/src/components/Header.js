import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className = 'header-container'>
        <nav className = 'list'>
                <Link href = '/'>HOME</Link>
                <Link href = '/About'>ABOUT</Link>
                <a href='#Background'>PROJECTS</a>
                <a href='#Portfolio'>SKILLS</a>
        </nav>
    </div>
  )
}

export default Header;
import React from 'react';
import '../Styles/Header.css';

function Header() {
  return (
    <header>
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Jamie Fraser Logo" className="logo" />
      <div className="header-text">
        <h1>Jamie Fraser</h1>
        <p>Software Developer</p>
      </div>
    </header>
  );
}

export default Header;

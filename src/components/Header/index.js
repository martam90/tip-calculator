import React from 'react';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className="container">
      <a href="/">
        <img src={logo} alt="Spiltter logo"></img>
      </a>
    </header>
  );
};

export default Header;

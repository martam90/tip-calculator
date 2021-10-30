import React from 'react';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Spiltter logo"></img>
      </a>
    </header>
  );
}

export default Header;

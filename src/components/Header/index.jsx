/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Header.css';
import { ThemeContext } from '../../context/ThemeContext';

function Header() {
  const { themeColor } = React.useContext(ThemeContext);
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <header
      style={{ backgroundColor: themeColor }}
      onClick={handleClick}
      className="padding"
    >
      EVENTIFY
    </header>
  );
}

export default Header;

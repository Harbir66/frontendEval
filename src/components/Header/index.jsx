/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Header.css';
// import { useNavigate } from 'react-router-dom';
// import { HOME_ROUTE } from '../../constants/routes';

function Header() {
  // const navigate = useNavigate();
  const handleClick = () => {
    // console.log('clicked');
    // navigate(HOME_ROUTE);
    window.location.reload();
  };
  return (
    <header onClick={handleClick} className="padding">
      EVENTIFY
    </header>
  );
}

export default Header;

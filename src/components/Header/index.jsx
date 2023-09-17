import React from 'react';
import './Header.css';
// import { useNavigate } from 'react-router-dom';
// import { HOME_ROUTE } from '../../constants/routes';
import { useSelector } from 'react-redux';

function Header() {
  // const navigate = useNavigate();
  const { colorCode } = useSelector(state => state.theme);

  const handleClick = () => {
    // console.log('clicked');
    // navigate(HOME_ROUTE);
    window.location.reload();
  };

  return (
    <header style={{ backgroundColor: colorCode }} onClick={handleClick} className="padding">
      EVENTIFY
    </header>
  );
}

export default Header;

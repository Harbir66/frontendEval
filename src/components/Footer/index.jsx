import React from 'react';

import './Footer.css';

function Footer() {
  const colors = ['#000000', '#800080', '#0000FF', '#9B9999'];
  return (
    <footer className="padding">
      <p>THEMES</p>
      <div className="theme-selector">
        <div className="themes">
          {colors.map((color) => {
            return (
              <div
                className="theme"
                style={{ backgroundColor: color }}
                key={color}
              />
            );
          })}
        </div>
        <button type="button">SAVE THEME</button>
      </div>
    </footer>
  );
}

export default Footer;

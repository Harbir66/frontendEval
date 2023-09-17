import React from 'react';

import './Footer.css';
import { useSelector } from 'react-redux';
import { GET_THEMES } from './../../constants/apiEndPoints';
import makeRequest from './../../utils/makeRequest';
import { setPreferredTheme } from '../../redux/slices/theme';
import { useDispatch } from 'react-redux';

function Footer() {
  const { colorCode } = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const [themes, setThemes] = React.useState([]);
  React.useEffect(() => {
    makeRequest(GET_THEMES).then(response => {
      setThemes(response.themes);
    });
  }, []);
  const [selectedTheme, setSelectedTheme] = React.useState({});
  return (
    <footer style={{ backgroundColor: colorCode }} className="padding">
      <p>THEMES</p>
      <div className="theme-selector">
        <div className="themes">
          {themes.map(theme => {
            return (
              <div
                onClick={() => {
                  setSelectedTheme(theme);
                }}
                className="theme"
                style={{ backgroundColor: theme.colorHexCode }}
                key={theme.id}
              />
            );
          })}
        </div>
        <button
          onClick={() => {
            dispatch(setPreferredTheme({ theme: selectedTheme }));
          }}
          type="button">
          SAVE THEME
        </button>
      </div>
    </footer>
  );
}

export default Footer;

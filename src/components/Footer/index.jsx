import * as React from 'react';

import './Footer.css';

import { ThemeContext } from '../../context/ThemeContext';
import makeRequest from '../../utils/makeRequest';
import { GET_THEMES, SAVE_THEME } from '../../constants/apiEndPoints';
// import makeRequest from '../../utils/makeRequest';
// import { GET_THEMES } from '../../constants/apiEndPoints';

function Footer() {
  const { themeColor, setThemeColor } = React.useContext(ThemeContext);
  const [themes, setThemes] = React.useState([]);
  React.useEffect(() => {
    makeRequest(GET_THEMES).then((response) => {
      setThemes(response.themes);
    });
  }, []);
  const [selectedTheme, setSelectedTheme] = React.useState(null);
  const handleSaveTheme = () => {
    if (selectedTheme) {
      makeRequest(SAVE_THEME, {
        data: {
          preferredThemeId: selectedTheme,
        },
      }).then((response) => {
        const newTheme = themes.find((theme) => theme.id === selectedTheme);
        setThemeColor(newTheme.colorHexCode);
      });
    }
  };

  return (
    <footer style={{ backgroundColor: themeColor }} className="padding">
      <p>THEMES</p>
      <div className="theme-selector">
        <div className="themes">
          {themes &&
            themes.map((theme) => {
              return (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  onClick={() => {
                    setSelectedTheme(theme.id);
                  }}
                  className="theme"
                  style={{
                    backgroundColor: theme.colorHexCode,
                  }}
                  key={theme.id}
                />
              );
            })}
        </div>
        <button onClick={handleSaveTheme} type="button">
          SAVE THEME
        </button>
      </div>
    </footer>
  );
}

export default Footer;

import * as React from 'react';
import makeRequest from '../../utils/makeRequest';
import { GET_THEMES } from '../../constants/apiEndPoints';

export const ThemeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export function ThemeContextProvider({ children }) {
  const [themeColor, setThemeColor] = React.useState('#000000');
  React.useEffect(() => {
    makeRequest(GET_THEMES).then(({ themes, preferredThemeId }) => {
      const prefferedTheme = themes.find(
        (theme) => theme.id === preferredThemeId
      );
      setThemeColor(prefferedTheme.colorHexCode);
    });
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

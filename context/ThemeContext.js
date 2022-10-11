import { createContext, useEffect, useState } from 'react';

// TODO convert to TS

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleThemeAndSetLocalStorage() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
    window.localStorage.setItem('darkMode', !darkMode);
  }

  useEffect(() => {
    const darkModeOn = window.localStorage.getItem('darkMode');
    setDarkMode(JSON.parse(darkModeOn));
  }, []);

  useEffect(() => {
    darkMode === true
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [darkMode]);

  const context = {
    darkMode,
    toggleThemeAndSetLocalStorage,
  };

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };

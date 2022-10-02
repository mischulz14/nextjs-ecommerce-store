import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
    window.localStorage.setItem('darkMode', !darkMode);
  }

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'true') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    darkMode === true
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [darkMode]);

  const value = {
    darkMode,
    toggleTheme: toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };

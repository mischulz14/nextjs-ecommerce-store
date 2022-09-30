import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(darkMode ? false : true);
  }

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

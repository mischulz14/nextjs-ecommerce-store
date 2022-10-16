import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const ToggleThemeBtn = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <button
      // eslint-disable-next-line no-octal-escape
      className="sm:block w-10 bg-white border-2 border-slate-600 rounded-xl sm:w-14 relative transition-all duration-300 before:content-['☀']
          h-[20px] before:absolute before:left-[-60%] before:text-gray-600 before:top-[-4px] after:content-['\263D'] after:absolute after:right-[-60%] after:text-gray-600 after:top-[-4px] dark:bg-gray-300 dark:before:text-white dark:after:text-white "
      onClick={() => {
        themeContext.toggleThemeAndSetLocalStorage();
      }}
    >
      <div className="h-[20px] w-[20px] rounded-full bg-slate-900 absolute top-[50%] translate-y-[-50%] sm:right-[33px] right-[18px]  transition-right duration-300 dark:right-[-1px] dark:bg-gray-900" />
    </button>
  );
};

export default ToggleThemeBtn;

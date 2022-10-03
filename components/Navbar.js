import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { ThemeContext } from '../context/ThemeContext';
import { getTotalQuantity } from '../utils/getTotal';

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const productContext = useContext(ProductContext);

  return (
    <header data-test-id="products-link">
      <nav className="relative flex items-center justify-between max-w-6xl py-5 mx-auto border-b-2 border-black nav dark:text-white dark:border-b-slate-50">
        <Link href="/" className="text-3xl logo">
          <div className="ml-8 text-3xl cursor-pointer">
            <span className="font-thin ">origa</span>
            <span className="font-bold">ME</span>
          </div>
        </Link>

        <button
          className=" h-6 bg-white border-2 border-slate-600 rounded-xl w-14 relative transition-all duration-300 before:content-['light'] before:absolute before:left-[-100%] before:text-gray-600 before:top-[-2px] after:content-['dark'] after:absolute after:right-[-100%] after:text-gray-600 after:top-[-2px] dark:bg-gray-300 dark:before:text-white dark:after:text-white"
          onClick={() => {
            themeContext.toggleThemeAndSetLocalStorage();
          }}
        >
          <div className="h-5 w-5 rounded-xl bg-slate-900 absolute top-0 right-[32px]  transition-right duration-300 dark:right-0 dark:bg-gray-900" />
        </button>

        <ul className="flex items-center justify-center gap-14">
          <li className="nav-item">
            <Link href="/products" data-test-id="products-link">
              <a>PRODUCTS</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
          <li className="relative pb-1 mr-4 nav-item cart hover:scale-105">
            <Link href="/cart">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                fill={themeContext.darkMode ? 'rgb(17 24 39)' : '#fff'}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H7.36729C6.86964 17 6.44772 16.6341 6.37735 16.1414L6.07143 14M2 3H4.5L4.78571 5M4.78571 5H5H21L18 14H6.5H6.07143M4.78571 5L6.07143 14M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
                  stroke={themeContext.darkMode ? '#fff' : '#000'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <div className="absolute flex items-center justify-center w-4 h-4 p-3 text-sm text-white rounded-full -right-1 -top-2 bg-slate-500">
              {getTotalQuantity(productContext.chosenProducts)}
              {productContext.renderComponent}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

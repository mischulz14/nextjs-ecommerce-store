import Link from 'next/link';
import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { ThemeContext } from '../context/ThemeContext';
import { getTotalQuantity } from '../utils/getTotal';

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const productContext = useContext(ProductContext);
  const [showSideNav, setShowSideNav] = useState(false);

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
          className="sm:block hidden bg-white border-2 border-slate-600 rounded-xl w-14 relative transition-all duration-300 before:content-['light']
          h-[20px] before:absolute before:left-[-100%] before:text-gray-600 before:top-[-2px] after:content-['dark'] after:absolute after:right-[-100%] after:text-gray-600 after:top-[-2px] dark:bg-gray-300 dark:before:text-white dark:after:text-white"
          onClick={() => {
            themeContext.toggleThemeAndSetLocalStorage();
          }}
        >
          <div className="h-[20px] w-[20px] rounded-full bg-slate-900 absolute top-[50%] translate-y-[-50%] right-[33px]  transition-right duration-300 dark:right-[-1px] dark:bg-gray-900" />
        </button>

        <ul className="items-center justify-center hidden md:flex gap-14">
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
            <Link href="/cart">
              <div className="absolute flex items-center justify-center w-4 h-4 p-3 text-sm text-white rounded-full -right-1 -top-2 bg-slate-500">
                {getTotalQuantity(productContext.chosenProducts)}
                {productContext.renderComponent}
              </div>
            </Link>
          </li>
        </ul>
        <button
          onClick={() => {
            setShowSideNav(true);
          }}
          className="flex flex-col pr-6 hamburger md:hidden"
        >
          <div
            className="w-[40px] h-[2px] bg-black mb-2
          dark:bg-white"
          />
          <div className="w-[40px] h-[2px] bg-black mb-2 dark:bg-white" />
          <div className="w-[40px] h-[2px] bg-black dark:bg-white" />
        </button>
        <div
          className={`${
            showSideNav ? 'block' : 'hidden'
          } sidenav fixed h-[100vh] w-[100px] right-0 top-0 flex flex-col gap-10 p-28 bg-white z-[999999] dark:bg-slate-900 dark:text-white`}
        >
          <button
            className=" hidden bg-white border-2 border-slate-600 rounded-xl w-14 relative transition-all duration-300 before:content-['light']
          h-[20px] before:absolute before:left-[-100%] before:text-gray-600 before:top-[-2px] after:content-['dark'] after:absolute after:right-[-100%] after:text-gray-600 after:top-[-2px] dark:bg-gray-300 dark:before:text-white dark:after:text-white"
            onClick={() => {
              themeContext.toggleThemeAndSetLocalStorage();
            }}
          >
            <div className="h-[20px] w-[20px] rounded-full bg-slate-900 absolute top-[50%] translate-y-[-50%] right-[33px]  transition-right duration-300 dark:right-[-1px] dark:bg-gray-900" />
          </button>

          <ul className="relative flex flex-col items-center justify-center gap-14">
            <button
              className=" bg-white border-2 border-slate-600 rounded-xl w-14 relative transition-all duration-300 before:content-['light']
          h-[20px] before:absolute before:left-[-100%] before:text-gray-600 before:top-[-2px] after:content-['dark'] after:absolute after:right-[-100%] after:text-gray-600 after:top-[-2px] dark:bg-gray-300 dark:before:text-white dark:after:text-white"
              onClick={() => {
                themeContext.toggleThemeAndSetLocalStorage();
              }}
            >
              <div className="h-[20px] w-[20px] rounded-full bg-slate-900 absolute top-[50%] translate-y-[-50%] right-[33px]  transition-right duration-300 dark:right-[-1px] dark:bg-gray-900" />
            </button>
            <button
              onClick={() => setShowSideNav(false)}
              className="absolute px-3 py-1 text-lg font-bold text-white bg-black -right-28 -top-28 dark:bg-white dark:text-black"
            >
              X
            </button>
            <li className="relative pb-1 mr-4 nav-item cart hover:scale-105">
              <button onClick={() => setShowSideNav(false)}>
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
                <Link href="/cart">
                  <div className="absolute flex items-center justify-center w-4 h-4 p-3 text-sm text-white rounded-full -right-1 -top-2 bg-slate-500">
                    {getTotalQuantity(productContext.chosenProducts)}
                    {productContext.renderComponent}
                  </div>
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => setShowSideNav(false)}>
                <Link href="/products" data-test-id="products-link">
                  <a>PRODUCTS</a>
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => setShowSideNav(false)}>
                <Link href="/about">
                  <a>ABOUT</a>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

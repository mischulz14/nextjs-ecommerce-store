import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const context = useContext(ThemeContext);

  return (
    <nav className="relative flex items-center justify-between max-w-6xl pt-4 pb-1 mx-auto border-b-2 border-black nav dark:text-white dark:border-b-slate-50">
      <Link href="/" className="text-3xl logo">
        <div className="ml-8 text-3xl cursor-pointer">
          <span className="font-thin ">origa</span>
          <span className="font-bold">ME</span>
        </div>
      </Link>

      <button
        className=" h-6 bg-white border-2 border-slate-700 rounded-xl w-14 relative transition-all duration-300 before:content-['light'] before:absolute before:left-[-100%] before:text-gray-600 before:top-[-2px] after:content-['dark'] after:absolute after:right-[-100%] after:text-gray-600 after:top-[-2px] dark:bg-gray-300 dark:before:text-white dark:after:text-white"
        onClick={() => {
          context.toggleTheme();
        }}
      >
        <div className="h-5 w-5 rounded-xl bg-slate-700 absolute top-0 right-[32px]  transition-right duration-300 dark:right-0 dark:bg-gray-900" />
      </button>

      <ul className="flex items-center justify-center gap-14">
        <li className="nav-item">
          <Link href="/">
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
        <li className="pt-2 nav-item cart">
          <Link href="/">
            <svg
              width="60px"
              height="60px"
              fill={context.darkMode === true ? '#fff' : '#000'}
              viewBox="0 0 96 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <g id="Cart">
                <path d="M35,64a6,6,0,1,0,6,6A6,6,0,0,0,35,64Zm0,11a5,5,0,1,1,5-5A5,5,0,0,1,35,75Z" />
                <path d="M63,64a6,6,0,1,0,6,6A6,6,0,0,0,63,64Zm0,11a5,5,0,1,1,5-5A5,5,0,0,1,63,75Z" />
                <path d="M67.79,55a.49.49,0,0,0,.46-.31l11.6-29a.5.5,0,0,0-.46-.69H23.92L23,21.39h0v0a.55.55,0,0,0-.08-.15l0-.05-.08-.07-.07,0-.09,0H16.5a.5.5,0,0,0-.5.5v4a.5.5,0,0,0,.5.5h6.64l8,31.14A3,3,0,0,0,32,63H68.5a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,0-.5-.5H32.15l-.52-2ZM78.65,26,67.45,54H31.62L24.39,26ZM17,25V22h5.11l.75,3ZM68,62H32a2,2,0,0,1,0-4H68Z" />
                <path d="M41.5,50A2.5,2.5,0,0,0,44,47.5v-15a2.5,2.5,0,0,0-5,0v15A2.5,2.5,0,0,0,41.5,50ZM40,32.5a1.5,1.5,0,0,1,3,0v15a1.5,1.5,0,0,1-3,0Z" />
                <path d="M50.5,50A2.5,2.5,0,0,0,53,47.5v-15a2.5,2.5,0,0,0-5,0v15A2.5,2.5,0,0,0,50.5,50ZM49,32.5a1.5,1.5,0,0,1,3,0v15a1.5,1.5,0,0,1-3,0Z" />
                <path d="M59.5,50A2.5,2.5,0,0,0,62,47.5v-15a2.5,2.5,0,0,0-5,0v15A2.5,2.5,0,0,0,59.5,50ZM58,32.5a1.5,1.5,0,0,1,3,0v15a1.5,1.5,0,0,1-3,0Z" />
              </g>
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

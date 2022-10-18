import Link from 'next/link';
import { useState } from 'react';
import CartWagon from '../Buttons/CartWagon';
import HamburgerBtn from '../Buttons/HamburgerBtn';
import ToggleThemeBtn from '../Buttons/ToggleThemeBtn';
import SideNav from './SideNav';

const Navbar = () => {
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
        <ToggleThemeBtn />
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
            <CartWagon setShowSideNav={setShowSideNav} />
          </li>
        </ul>
        <HamburgerBtn setShowSideNav={setShowSideNav} />
        <SideNav showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      </nav>
    </header>
  );
};

export default Navbar;

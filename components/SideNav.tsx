import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import CartWagon from '../Buttons/CartWagon';
import ToggleThemeBtn from '../Buttons/ToggleThemeBtn';

const SideNav = (props: {
  showSideNav: boolean;
  setShowSideNav: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`${
        props.showSideNav ? 'block' : 'hidden'
      } sidenav fixed h-[100vh] w-[100px] right-0 top-0 flex flex-col gap-10 p-28 bg-white z-[999999] dark:bg-slate-900 dark:text-white`}
    >
      <ul className="relative flex flex-col items-center justify-center gap-14">
        <ToggleThemeBtn />
        <button
          onClick={() => props.setShowSideNav(false)}
          className="absolute px-3 py-1 text-lg font-bold text-white bg-black -right-28 -top-28 dark:bg-white dark:text-black"
        >
          X
        </button>
        <li className="relative pb-1 mr-4 nav-item cart hover:scale-105">
          <CartWagon setShowSideNav={props.setShowSideNav} />
        </li>
        <li className="nav-item">
          <button onClick={() => props.setShowSideNav(false)}>
            <Link href="/products" data-test-id="products-link">
              <a>PRODUCTS</a>
            </Link>
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => props.setShowSideNav(false)}>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="nav max-w-6xl mx-auto mt-10 pb-1 flex justify-between items-center relative border-b-2 border-black">
      <Link href="/" className="logo text-3xl">
        <div className="cursor-pointer ml-8 text-3xl">
          <span className=" font-thin">origa</span>
          <span className="font-bold">ME</span>
        </div>
      </Link>

      <ul className="flex gap-14 justify-center items-center">
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
        <li className="nav-item pt-2 cart">
          <Link href="/">
            <Image alt="cart" src="/images/cart.svg" width="50" height="50" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

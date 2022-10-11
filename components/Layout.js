import Head from 'next/head';
import { useContext, useEffect } from 'react';
import {
  ProductContext,
  ProductContextProvider,
} from '../context/ProductContext';
import { ThemeProvider } from '../context/ThemeContext';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, foundInCookies }) => {
  return (
    <ProductContextProvider foundInCookies={foundInCookies}>
      <ThemeProvider>
        <div className="dark:bg-gray-900">
          <Head>
            <link rel="icon" href="" />
          </Head>
          <Navbar />
          <main className="max-w-6xl mx-auto">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </ProductContextProvider>
  );
};

export default Layout;

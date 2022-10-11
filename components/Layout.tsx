import Head from 'next/head';
import { useContext, useEffect } from 'react';
import {
  ProductContext,
  ProductContextProvider,
} from '../context/ProductContext';
import { ThemeProvider } from '../context/ThemeContext';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
  foundInCookies: Array<{}>;
};

const Layout = (props: LayoutProps) => {
  return (
    <ProductContextProvider foundInCookies={props.foundInCookies}>
      <ThemeProvider>
        <div className="dark:bg-gray-900">
          <Head>
            <link rel="icon" href="" />
          </Head>
          <Navbar />
          <main className="max-w-6xl mx-auto">{props.children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </ProductContextProvider>
  );
};

export default Layout;

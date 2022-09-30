import Head from 'next/head';
import { ThemeProvider } from '../context/ThemeContext';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
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
  );
};

export default Layout;

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto mb-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

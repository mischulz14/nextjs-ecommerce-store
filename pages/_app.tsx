import '../styles/globals.css';
import { useEffect, useState } from 'react';
import Layout from '../components/Organisms/Layout';

function MyApp({ Component, pageProps }: any) {
  const [cookiesAccepted, setCookiesAccepted] = useState<any>(false);

  useEffect(() => {
    const cookieAcceptance = window.localStorage.getItem('cookiesAccepted');
    setCookiesAccepted(cookieAcceptance);
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <div
        className={
          !cookiesAccepted
            ? ' flex flex-col items-center justify-center absolute h-full w-full  bg-black opacity-[0.88] bottom-0 transition-all duration-700 z-[99] bottom-top overflow-hidden'
            : ' h-[0px] scale-0 z-[99] overflow-hidden flex flex-col items-center justify-center absolute w-full bg-black bottom-0 transition-all duration-700 origin-bottom'
        }
      >
        <div className="flex flex-col items-center justify-center w-full pb-10 mt-auto text-black bg-white opacity-100">
          <span className="block pt-8 pb-4 ">This site uses Cookies</span>
          <button
            className="text-black hover:bg-white hover:text-black btn-secondary modal-btn"
            onClick={() => {
              setCookiesAccepted(true);
              window.localStorage.setItem(
                'cookiesAccepted',
                JSON.stringify(true),
              );
            }}
          >
            Accept cookies
          </button>
        </div>
      </div>
    </>
  );
}

export default MyApp;

import '../styles/globals.css';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

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
            ? 'h-[150px] flex flex-col items-center justify-center absolute w-full z-10 bg-black text-white bottom-0 transition-all duration-700 bottom-top'
            : 'h-[0px] scale-0 overflow-hidden flex flex-col items-center justify-center absolute w-full z-10 bg-black text-white bottom-0 transition-all duration-700 origin-bottom'
        }
      >
        <span className="block pt-8">This site uses Cookies</span>
        <button
          className="mb-8 btn-secondary hover:bg-white hover:text-black"
          onClick={() => {
            setCookiesAccepted(true);
            window.localStorage.setItem('cookiesAccepted', true);
          }}
        >
          Accept cookies
        </button>
      </div>
    </>
  );
}

export default MyApp;

export async function getServerSideProps(context) {
  const origamiFigures = await getOrigamiList();

  const cookiesArray = context.req.cookies.count;

  const parsedCookies = JSON.parse(cookiesArray);
  console.log(parsedCookies);

  // loop over cookies
  const foundInCookies = parsedCookies
    .map((cookieInfo) => {
      return {
        ...origamiFigures.find((origami) => {
          if (origami.id === cookieInfo.id) {
            origami.count = cookieInfo.count;
            return {
              ...origami,
            };
          }
        }),
      };
    })
    .map((item) => {
      return {
        ...item,
      };
    });

  console.log(foundInCookies);

  // find desired cookie object

  return {
    props: { origamiFigures, foundInCookies: foundInCookies },
  };
}

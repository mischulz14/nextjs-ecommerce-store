import '../styles/globals.css';
// import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Global from '../components/Organisms/Global';
// import { getOrigamiList } from '../data/connect';
import { getParsedCookie } from '../utils/cookies';

function MyApp({ Component, pageProps }: any) {
  const [cookiesAccepted, setCookiesAccepted] = useState<any>(false);

  const foundInCookies = getParsedCookie('count');
  useEffect(() => {
    const cookieAcceptance = window.localStorage.getItem('cookiesAccepted');
    setCookiesAccepted(cookieAcceptance);
  }, []);

  return (
    <>
      <Global foundInCookies={foundInCookies}>
        <Component foundInCookies={foundInCookies} {...pageProps} />
      </Global>

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
            window.localStorage.setItem(
              'cookiesAccepted',
              JSON.stringify(true),
            );
          }}
        >
          Accept cookies
        </button>
      </div>
    </>
  );
}

export default MyApp;

// export async function getServerSideProps(context: any) {
//   const origamiFigures = await getOrigamiList();

//   const cookiesArray = context.req.cookies.count;

//   const parsedCookies = JSON.parse(cookiesArray);

//   // loop over cookies
//   const foundInCookies = parsedCookies
//     .map((cookieInfo: { id: number; count: number }) => {
//       return {
//         ...origamiFigures.find((origami) => {
//           if (origami.id === cookieInfo.id) {
//             origami.count = cookieInfo.count;
//             return {
//               ...origami,
//             };
//           }
//           return {
//             ...origami,
//           };
//         }),
//       };
//     })
//     .map((item: Record<string, unknown>) => {
//       return {
//         ...item,
//       };
//     });

//   console.log(foundInCookies);

//   // find desired cookie object

//   return {
//     props: { origamiFigures, foundInCookies: foundInCookies },
//   };
// }

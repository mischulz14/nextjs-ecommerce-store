import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { getOrigamiList } from '../data/connect';
import origamiFigures from '../data/data';

// TODO foundInCookies not found in object?
const HomeScreen = ({ foundInCookies, origamiFigures }: any) => {
  const productContext = useContext(ProductContext);

  console.log('foundInCookies', foundInCookies);

  useEffect(() => {
    productContext.setChosenProducts(foundInCookies);
    productContext.setFilteredProducts(origamiFigures);
  }, []);
  return (
    <div className="max-w-6xl h-[750px] homescreen flex flex-col items-center">
      <h1 className="px-6 mt-16 text-3xl text-center text-gray-600">
        DO YOU LOVE ORIGAMI?
      </h1>
      <Link href="/products">
        <button className="mt-10 scale-125 btn-primary hover:scale-[1.3]">
          Start Shopping
        </button>
      </Link>
    </div>
  );
};

export default HomeScreen;

export async function getServerSideProps(context: any) {
  const origamiFigures = await getOrigamiList();

  const parsedCookies = context.req.cookies.count
    ? JSON.parse(context.req.cookies.count)
    : [];

  // loop over cookies
  const foundInCookies = parsedCookies
    .map((cookieInfo: { id: number; count: number }) => {
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
    .map((item: {}) => {
      return {
        ...item,
      };
    });

  // find desired cookie object

  return {
    props: { origamiFigures, foundInCookies: foundInCookies },
  };
}

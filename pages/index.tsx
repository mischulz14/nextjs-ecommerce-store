import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { getProductListAndCookieInfo } from '../utils/serverSideProps';

// TODO foundInCookies not found in object?
const HomeScreen = ({ foundInCookies }: any) => {
  const productContext = useContext(ProductContext);

  useEffect(() => {
    productContext.setChosenProducts(foundInCookies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  return await getProductListAndCookieInfo(context);
}

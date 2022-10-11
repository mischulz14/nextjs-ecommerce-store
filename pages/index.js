import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { ThemeContext } from '../context/ThemeContext';
import { getOrigamiList } from '../data/connect';

const HomeScreen = ({ foundInCookies }) => {
  const productContext = useContext(ProductContext);

  useEffect(() => {
    productContext.setChosenProducts(foundInCookies);
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

export async function getServerSideProps(context) {
  const origamiFigures = await getOrigamiList();

  const parsedCookies = context.req.cookies.count
    ? JSON.parse(context.req.cookies.count)
    : [];

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

  // find desired cookie object

  return {
    props: { origamiFigures, foundInCookies: foundInCookies },
  };
}

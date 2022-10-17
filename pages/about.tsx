import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { getProductListAndCookieInfo } from '../utils/serverSideProps';
import { Product } from '../utils/types';

const About = (props: { foundInCookies: Product }) => {
  const productContext = useContext(ProductContext);

  useEffect(() => {
    productContext.setChosenProducts(props.foundInCookies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="about page description" />
      </Head>
      <div className="p-20 text-center dark:text-white">
        This is a mockup store made by Michael Schulz, there are no real origami
        to purchase!
      </div>
    </>
  );
};

export default About;

export async function getServerSideProps(context: any) {
  return await getProductListAndCookieInfo(context);
}

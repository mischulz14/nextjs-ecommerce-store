import Head from 'next/head';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import AddToCartBtn from '../../components/Buttons/AddToCartBtn';
import ChangeColorsBtn from '../../components/Buttons/ChangeColorsBtn';
import DecreaseQuantityBtn from '../../components/Buttons/DecreaseQuantityBtn';
import IncreaseQuantityBtn from '../../components/Buttons/IncreaseQuantityBtn';
import ProductDescription from '../../components/TextElements/ProductDescription';
import { ProductContext } from '../../context/ProductContext';
import { ThemeContext } from '../../context/ThemeContext';
import { getServerSidePropsAndUpdateSingleProduct } from '../../utils/serverSidePropsSingleProduct';
import { Product } from '../../utils/types';
import ErrorPage from '../404';

type ProductProps = { matchedProduct: Product };

const SingleProductPage = (props: any) => {
  const productContext = useContext(ProductContext);

  useEffect(() => {
    productContext.setChosenProducts(props.foundCookies);
  }, []);

  const [rendered, setRendered] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const themeContext = useContext(ThemeContext);
  const [count, setCount] = useState(1);

  if (!props.matchedProduct) {
    return <ErrorPage />;
  }

  return (
    <>
      <Head>
        <title>Single origami page</title>
        <meta name="description" content="origami single page" />
      </Head>
      {rendered}
      <div className="flex flex-row">
        <div
          className={`card flex md:flex-row flex-col px-6 mb-2 min-w-[230px] overflow-y-scroll min-h-[750px] grow bg-white  transition-all  border dark:before:bg-slate-700 dark:bg-slate-700 dark:text-slate-200 dark:border-t-0 ${
            themeContext.darkMode ? 'dark' : ''
          }`}
        >
          <div className="absolute bottom-0 left-0 z-50 flex items-center justify-center w-full h-10 text-center message">
            {userMessage}
          </div>
          <div className="pt-10 sm:pt-0 basis-2/4">
            <div className="border-2 border-black dark:border-white flex flex-col justify-center items-center h-[50%]">
              <div className={themeContext.darkMode ? 'image-wrapper' : ''}>
                <Image
                  data-test-id="product-image"
                  src={props.matchedProduct.activePicture}
                  width="500"
                  height="300"
                  alt={props.matchedProduct.name}
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 details-container">
              <div className="flex justify-center items-center flex-col gap-1 min-w-[60px]">
                <span className="block mt-6 mb-3 text-2xl text-center">
                  COLORS
                </span>
                <div className="flex gap-4">
                  <ChangeColorsBtn
                    matchedProduct={props.matchedProduct}
                    setRendered={setRendered}
                  />
                </div>
              </div>
              <div className="mt-4 text-center price">
                <span className="block mb-2 text-2xl">PRICE</span>
                <span
                  data-test-id="product-price"
                  className="text-4xl font-bold"
                >
                  {props.matchedProduct.price}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center basis-2/4">
            <h1 className="block pt-10 mt-2 mb-16 text-4xl font-bold text-center">
              {props.matchedProduct.name.toUpperCase()}
            </h1>
            <span className="pb-1 mb-8 text-xl text-center border-b-2 border-slate-300">
              DESCRIPTION
            </span>
            <ProductDescription matchedProduct={props.matchedProduct} />
            <div className="flex items-center justify-center gap-2 mt-6 mb-4 font-bold text-center">
              <DecreaseQuantityBtn
                setUserMessage={setUserMessage}
                matchedProduct={props.matchedProduct}
                setRendered={setRendered}
                count={count}
                setCount={setCount}
              />
              <input
                type="number"
                min="1"
                value={count}
                onChange={(event) => setCount(Number(event.target.value))}
                data-test-id="product-quantity"
                placeholder="1"
                className="w-10 h-10 mt-2 pb-1 pl-3 text-center flex justify-center items-center text-black dark:text-white bg-transparent border-2 border-black dark:border-slate-300 cart-test"
              />
              <IncreaseQuantityBtn
                setUserMessage={setUserMessage}
                matchedProduct={props.matchedProduct}
                setCount={setCount}
              />
            </div>
            <AddToCartBtn
              matchedProduct={props.matchedProduct}
              setUserMessage={setUserMessage}
              setRendered={productContext.setRenderComponent}
              count={count}
              setCount={setCount}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;

export async function getServerSideProps(context: any) {
  return await getServerSidePropsAndUpdateSingleProduct(context);
}

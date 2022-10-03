import Head from 'next/head';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { ThemeContext } from '../../context/ThemeContext';
import origamiFigures from '../../data/data';
import ErrorPage from '../404';

const Origami = ({ matchedProduct }) => {
  const [rendered, setRendered] = useState(false);
  const themeContext = useContext(ThemeContext);
  const productContext = useContext(ProductContext);

  if (!matchedProduct) {
    return <ErrorPage />;
  }

  return (
    <>
      <Head>
        <title>Single origami page</title>
        <meta name="description" content="origami single page" />
      </Head>
      <div
        className={`card px-6 mb-2 h-[750px] min-w-[230px] grow bg-white flex transition-all  border dark:before:bg-slate-700 dark:bg-slate-700 dark:text-slate-200 dark:border-t-0 ${
          themeContext.darkMode ? 'dark' : ''
        }`}
      >
        <div className="image-container color-container price-container basis-2/4">
          <div className="border-2 border-black dark:border-white flex flex-col mt-6 justify-center items-center h-[50%]">
            <div className={themeContext.darkMode ? 'image-wrapper' : ''}>
              <Image
                src={matchedProduct.activePicture}
                width="500"
                height="300"
                alt={matchedProduct.name}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 details-container">
            <div className="flex justify-center items-center flex-col gap-1 min-w-[60px]">
              <span className="block mt-6 mb-3 text-2xl text-center">
                COLORS
              </span>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    matchedProduct.activePicture = matchedProduct.firstPicture;
                    matchedProduct.activePrice = matchedProduct.price;
                    setRendered((prev) => !prev);
                  }}
                  className="w-20 h-20 bg-white border-2 rounded-full border-slate-400"
                />
                <button
                  onClick={() => {
                    matchedProduct.activePicture = matchedProduct.secondPicture;
                    matchedProduct.activePrice = matchedProduct.priceColor;
                    setRendered((prev) => !prev);
                  }}
                  className="w-20 h-20 border-2 rounded-full border-slate-400"
                  style={{ backgroundColor: matchedProduct.secondColor }}
                />
              </div>
            </div>
            <div className="mt-4 text-center price">
              <span className="block mb-2 text-2xl">PRICE</span>
              <span className="text-4xl font-bold">
                {matchedProduct.activePrice}$
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center basis-2/4">
          <span className="block pt-10 mt-2 mb-16 text-4xl font-bold text-center">
            {matchedProduct.name.toUpperCase()}
          </span>
          <span className="pb-1 mb-8 text-xl text-center border-b-2 border-slate-300">
            DESCRIPTION
          </span>
          {matchedProduct.difficulty < 4 && (
            <span className="inline-block p-10 mx-10 text-lg text-center border-2 border-slate-300">
              This {matchedProduct.name} provides an easy challenge which can be
              solved faster than other origami challenges. This is a perfect
              project from beginners to advanced origami lovers, who want to
              fold an elegant looking origami without having to think to much.{' '}
            </span>
          )}

          {matchedProduct.difficulty >= 5 && matchedProduct.difficulty <= 8 ? (
            <span className="inline-block p-10 mx-10 text-lg text-center border-2 border-slate-300">
              This {matchedProduct.name} provides an intermediate challenge
              which has be solved with more effort than other origami
              challenges. This is a project for intermediate or advanced origami
              lovers, who want to have a challenge while folding their origami.{' '}
            </span>
          ) : null}

          {matchedProduct.difficulty > 8 && (
            <span className="inline-block p-10 mx-10 text-lg text-center border-2 border-slate-300">
              This {matchedProduct.name} provides a hard challenge which
              requires more time and brainpower than other origami challenges.
              This is a project for advanced origami lovers, who really want to
              have a challenge while folding exceptionally looking origami.{' '}
            </span>
          )}

          <button
            data-test-id="product-add-to-cart"
            onClick={() => {
              if (
                productContext.chosenProducts.find(
                  (origami) => origami.id === matchedProduct.id,
                )
              ) {
                return;
              }

              productContext.setChosenProducts([
                ...productContext.chosenProducts,
                matchedProduct,
              ]);
            }}
            className="btn-primary mt-16 scale-[1.4] hover:scale-[1.5] cart-btn m-0 active:scale-95"
          />
        </div>
      </div>
    </>
  );
};

export default Origami;

export function getServerSideProps(context) {
  const productId = parseInt(context.query.productId);
  const matchedProduct = origamiFigures.find(
    (product) => product.id === productId,
  );

  if (matchedProduct === undefined) {
    return {
      props: {
        error: 'Page not found',
      },
    };
  }

  return {
    props: {
      matchedProduct,
    },
  };
}

import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { getOrigamiList } from '../data/connect';
import { addCookie, handleCookieChange, removeCookie } from '../utils/cookies';
import { decreaseCount, increaseCount } from '../utils/count';
import { getTotalCost } from '../utils/getTotal';

type WholeProduct = {
  id: number;
  name: string;
  price: number;
  count: number;
  firstPicture: string;
  secondPicture: string;
  difficulty: number;
  activePrice: number;
  activePicture: string;
  secondColor: string;
};

type cartProps = { foundInCookies: WholeProduct[] };

const Cart = (props: cartProps) => {
  const productContext = useContext(ProductContext);

  useEffect(() => {
    productContext.setChosenProducts(props.foundInCookies);
  }, []);

  return (
    <div className="max-w-6xl sm:h-[85vh] border-l-2 border-r-2 border-b-2 sm:flex-initial sm:flex-row flex flex-col  dark:text-white ">
      <div className="border-2 chosen-items basis-3/5">
        <ul className="h-full sm:overflow-y-scroll">
          {productContext.chosenProducts?.map((product: WholeProduct) => {
            return (
              <li
                data-test-id={`cart-product-${product.id}`}
                key={Math.floor(Math.random() * 1000)}
                className="relative flex-col items-center justify-center gap-6 p-4 m-4 border-2 sm:flex-row sm:flex grow dark:border-slate-100 dark:bg-slate-700 border-slate-300"
              >
                <div className="flex justify-center sm:block image-wrapper">
                  <Image src={product.activePicture} width="100" height="100" />
                </div>
                <div className="flex justify-center gap-1 py-4 sm:flex-col">
                  <button
                    onClick={() => {
                      // product.activePicture = product.firstPicture;
                      addCookie('count', product);
                      productContext.setChosenProducts((prev: any) => {
                        const found = prev.find(
                          (item: any) => item.id === product.id,
                        );
                        if (found) {
                          found.activePicture = product.firstPicture;
                          return [...prev];
                        }
                        return [...prev, product];
                      });
                    }}
                    className="w-6 h-6 bg-white border-2 rounded-full border-slate-400"
                  />
                  <button
                    onClick={() => {
                      addCookie('count', product);
                      productContext.setChosenProducts((prev: any) => {
                        const found = prev.find(
                          (item: any) => item.id === product.id,
                        );
                        if (found) {
                          found.activePicture = product.secondPicture;
                          return [...prev];
                        }
                        return [...prev, product];
                      });
                    }}
                    className="w-6 h-6 border-2 rounded-full border-slate-400"
                    style={{ backgroundColor: product.secondColor }}
                  />
                </div>
                <div className="flex flex-col gap-4 mb-2 sm:ml-4 sm:mb-0">
                  <div className="text-center uppercase">{product.name}</div>
                  <div className="">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => {
                          if (product.count <= 1) return;

                          handleCookieChange('count', product, false);
                          productContext.setChosenProducts((prev: any) => {
                            const found = prev.find(
                              (item: any) => item.id === product.id,
                            );
                            if (found) {
                              found.count--;
                              return [...prev];
                            }
                            return [...prev, product];
                          });
                        }}
                        className="mt-2 font-bold btn-secondary hover:text-gray-900"
                      >
                        -
                      </button>
                      <div
                        data-test-id={`cart-product-quantity-${product.id}`}
                        className="translate-y-[5px] translate-x-[1px]"
                      >
                        {product.count}
                      </div>
                      <button
                        onClick={() => {
                          productContext.setChosenProducts((prev: any) => {
                            const found = prev.find(
                              (item: any) => item.id === product.id,
                            );
                            if (found) {
                              found.count++;
                              return [...prev];
                            }
                            return [...prev, product];
                          });
                          handleCookieChange('count', product, true);
                          // productContext.setRenderComponent(
                          //   (prev: boolean) => !prev,
                          // );
                        }}
                        className="mt-2 font-bold btn-secondary hover:text-gray-900"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="py-4 ml-auto text-center sm:py-0 sm:text-left">
                  Price: {product.price}$
                </div>
                <button
                  data-test-id={`cart-product-remove-${product.id}`}
                  onClick={() => {
                    removeCookie('count', product);
                    // remove elements from list
                    productContext.setChosenProducts(
                      productContext.chosenProducts.filter(
                        (item: { id: number }) => item.id !== product.id,
                      ),
                    );
                  }}
                  className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 btn-primary hover:scale-105"
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="border-2 dark:border-slate-100 border-slate-300 price basis-2/5">
        <ul className="pb-8 overflow-y-scroll border-b-2 dark:border-slate-100 border-slate-300 h-[300px]">
          <h2 className="m-8 text-2xl font-semibold text-center">Summary:</h2>
          {productContext.chosenProducts.map((product: WholeProduct) => {
            return (
              <li
                key={Math.floor(Math.random() * 1000)}
                className="flex flex-wrap justify-around gap-10 p-6 m-4 text-lg border-2 dark:border-slate-100 border-slate-300"
              >
                <span className="font-semibold">{product.name}</span>
                <span>Quantity: {product.count}</span>
                <span className="font-semibold">
                  Price: {product.count * product.price}
                </span>
              </li>
            );
          })}
        </ul>
        <div
          data-test-id="cart-total"
          className="m-8 text-3xl font-bold text-center"
        >
          Total Price: {getTotalCost(productContext.chosenProducts)}
        </div>
        <div className="relative flex items-center justify-center mt-14">
          <Link href="/checkout">
            <button
              onClick={() => {
                productContext.setTotalPrice(
                  getTotalCost(productContext.chosenProducts),
                );
              }}
              data-test-id="cart-checkout"
              className="mb-8 scale-110 btn-primary hover:scale-125 checkout "
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

export async function getServerSideProps(context: any) {
  const origamiFigures = await getOrigamiList();

  const parsedCookies = context.req.cookies.count
    ? JSON.parse(context.req.cookies.count)
    : [];

  // loop over cookies
  const foundInCookies = parsedCookies
    .map((cookieInfo: { id: number; count: number; activePicture: string }) => {
      return {
        ...origamiFigures.find((origami) => {
          if (origami.id === cookieInfo.id) {
            origami.count = cookieInfo.count;
            origami.activePicture = cookieInfo.activePicture;
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

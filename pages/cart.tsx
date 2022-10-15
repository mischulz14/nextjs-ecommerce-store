import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import ChangeColorsBtn from '../components/Atoms/Buttons/ChangeColorsBtn';
import DecreaseQuantityInCartBtn from '../components/Atoms/Buttons/DecreaseQuantityInCartBtn';
import IncreaseQuantityInCartBtn from '../components/Atoms/Buttons/IncreaseQuantityInCartBtn';
import RemoveFromCartBtn from '../components/Atoms/Buttons/RemoveFromCartBtn';
import { ProductContext } from '../context/ProductContext';
import { handleCookieChange, removeCookie } from '../utils/cookies';
// import { decreaseCount, increaseCount } from '../utils/count';
import { getTotalCost } from '../utils/getTotal';
import { getProductListAndCookieInfo } from '../utils/serverSideProps';
import { Product } from '../utils/types';

type CartProps = { foundInCookies: Product[] };

const Cart = (props: CartProps) => {
  const productContext = useContext(ProductContext);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    productContext.setChosenProducts(props.foundInCookies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-6xl sm:h-[85vh] border-l-2 border-r-2 border-b-2 sm:flex-initial sm:flex-row flex flex-col  dark:text-white ">
      <div className="border-2 chosen-items basis-3/5">
        <ul className="h-full sm:overflow-y-scroll">
          {productContext.chosenProducts?.map((product: Product) => {
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
                  <ChangeColorsBtn
                    matchedProduct={product}
                    setRendered={setRendered}
                  />
                </div>
                <div className="flex flex-col gap-4 mb-2 sm:ml-4 sm:mb-0">
                  <div className="text-center uppercase">{product.name}</div>
                  <div className="">
                    <div className="flex items-center justify-center gap-2">
                      <DecreaseQuantityInCartBtn product={product} />
                      <div
                        data-test-id={`cart-product-quantity-${product.id}`}
                        className="translate-y-[5px] translate-x-[1px]"
                      >
                        {product.count}
                      </div>
                      <IncreaseQuantityInCartBtn product={product} />
                    </div>
                  </div>
                </div>
                <div className="py-4 ml-auto text-center sm:py-0 sm:text-left">
                  Price: {product.price}$
                </div>
                <RemoveFromCartBtn product={product} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="border-2 dark:border-slate-100 border-slate-300 price basis-2/5">
        <ul className="pb-8 overflow-y-scroll border-b-2 dark:border-slate-100 border-slate-300 h-[300px]">
          <h2 className="m-8 text-2xl font-semibold text-center">Summary:</h2>
          {productContext.chosenProducts.map((product: Product) => {
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
  return await getProductListAndCookieInfo(context);
}

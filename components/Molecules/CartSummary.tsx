import Link from 'next/link';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { getTotalCost } from '../../utils/getTotal';
import { Product } from '../../utils/types';

const CartSummary = () => {
  const productContext = useContext(ProductContext);
  return (
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
        <span>Total Price:</span>{' '}
        <span className="cart-total">
          {getTotalCost(productContext.chosenProducts)}
        </span>
      </div>
      <div className="relative flex items-center justify-center mt-14">
        <Link href="/checkout">
          <button
            disabled={productContext.chosenProducts.length === 0}
            onClick={() => {
              productContext.setTotalPrice(
                getTotalCost(productContext.chosenProducts),
              );
            }}
            data-test-id="cart-checkout"
            className="mb-8 scale-110 btn-primary hover:scale-125 checkout-btn"
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;

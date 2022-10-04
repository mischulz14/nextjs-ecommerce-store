import Image from 'next/image';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { decreaseCount, increaseCount } from '../utils/count';
import { getTotalCost } from '../utils/getTotal';

const Cart = () => {
  const productContext = useContext(ProductContext);

  return (
    <div className="max-w-6xl h-[85vh] border-l-2 border-r-2 border-b-2  flex dark:text-white ">
      <div className="border-2 chosen-items basis-3/5">
        <ul className="h-full overflow-y-scroll">
          {productContext.chosenProducts?.map((product) => {
            return (
              <li
                key={Math.floor(Math.random() * 1000)}
                className="relative flex items-center gap-6 p-4 m-4 border-2 grow dark:border-slate-100 dark:bg-slate-700 border-slate-300"
              >
                <div className="image-wrapper">
                  <Image src={product.activePicture} width="100" height="100" />
                </div>
                <div className="flex flex-col gap-4 ml-4">
                  <div className="uppercase">{product.name}</div>
                  <div className="">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => {
                          if (product.count <= 1) return;
                          decreaseCount(product);
                          productContext.setRenderComponent((prev) => !prev);
                        }}
                        className="mt-2 font-bold btn-secondary hover:text-gray-900"
                      >
                        -
                      </button>
                      <div className="translate-y-[5px] translate-x-[1px]">
                        {product.count}
                      </div>
                      <button
                        onClick={() => {
                          increaseCount(product);
                          productContext.setRenderComponent((prev) => !prev);
                        }}
                        className="mt-2 font-bold btn-secondary hover:text-gray-900"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ml-auto">Price: {product.price}$</div>
                <button
                  onClick={() => {
                    // remove elements from list
                    productContext.setChosenProducts(
                      productContext.chosenProducts.filter(
                        (item) => item.activePicture !== product.activePicture,
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
        <ul className="pb-8 border-b-2 dark:border-slate-100 border-slate-300">
          <h2 className="m-8 text-2xl font-semibold text-center">Summary:</h2>
          {productContext.chosenProducts.map((product) => {
            return (
              <li
                key={Math.floor(Math.random() * 1000)}
                className="flex flex-wrap justify-around gap-10 p-6 m-4 text-lg border-2 dark:border-slate-100 border-slate-300"
              >
                <span className="font-semibold">{product.name}</span>
                <span>Quantity: {product.count}</span>
                <span className="font-semibold">
                  Price: {product.activePrice}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="m-8 text-3xl font-bold text-center">
          Total Price: {getTotalCost(productContext.chosenProducts)}
        </div>
        <div className="flex items-center justify-center mt-14">
          <button className="scale-110 btn-primary hover:scale-125">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

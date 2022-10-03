import Image from 'next/image';
import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { getTotalCost } from '../utils/getTotal';

const Cart = () => {
  const productContext = useContext(ProductContext);
  const [rerender, setRerender] = useState(false);

  return (
    <div className="max-w-6xl h-[750px] border-l-2 border-r-2 border-b-2  flex dark:text-white overflow-y-scroll">
      <div className="border-2 chosen-items basis-3/5">
        <ul className="h-full">
          {productContext.chosenProducts?.map((product) => {
            return (
              <li
                key={product.id}
                className="relative flex items-center gap-6 p-4 m-4 border-2 grow border-slate-100 dark:bg-slate-700"
              >
                <div className="image-wrapper">
                  <Image src={product.activePicture} width="100" height="100" />
                </div>
                <div className="flex flex-col gap-4 ml-4">
                  <div className="uppercase">{product.name}</div>
                  <div className="">
                    <div className="block">Quantity: {product.count}</div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (product.count <= 0) return;
                          product.countChosen--;
                          setRerender((prev) => !prev);
                          product.activePrice = product.price * product.count;
                          productContext.setRenderComponent((prev) => !prev);
                        }}
                        className="mt-2 font-bold btn-secondary hover:text-gray-900"
                      >
                        -
                      </button>
                      <button
                        onClick={() => {
                          product.count++;
                          setRerender((prev) => !prev);

                          product.activePrice = product.price * product.count;
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
                    productContext.setChosenProducts(
                      productContext.chosenProducts.filter(
                        (item) => item.id !== product.id,
                      ),
                    );
                  }}
                  className="absolute right-0 flex items-center justify-center w-6 h-6 -top-8 btn-primary hover:scale-105"
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="border-2 border-slate-200 price basis-2/5">
        Total Price {getTotalCost(productContext.chosenProducts)}
      </div>
    </div>
  );
};

export default Cart;

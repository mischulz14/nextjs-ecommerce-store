import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Product } from '../../utils/types';
import AddToCartBtn from '../Atoms/Buttons/AddToCartBtn';
import ChangeColorsBtn from '../Atoms/Buttons/ChangeColorsBtn';

const MainProductSection = (props: any) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <div className="main__product-content basis-3/4 flex flex-col gap-6 p-8 max-h-[90vh] overflow-y-scroll border-slate-200 border-b-2">
        <h1 className="mt-8 text-xl font-light text-center dark:text-white sm:mt-0">
          PICK YOUR ORIGAMI
        </h1>
        <div>
          <ul className="flex flex-wrap gap-12">
            {props.filteredProducts.map((product: Product) => {
              return (
                <li
                  key={product.id}
                  className={`p-6 mb-2 card min-w-[230px] grow bg-white flex items-center justify-center flex-col card transition-all dark:border-white dark:before:bg-slate-700 dark:bg-slate-700 dark:text-slate-200 ${
                    themeContext.darkMode ? 'dark' : ''
                  }`}
                >
                  <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-10 text-center message">
                    {props.userMessage}
                  </div>
                  <Link
                    data-test-id={`product-${product.id}`}
                    href={`products/${product.id}`}
                  >
                    <div className="flex flex-col items-center w-full mx-auto cursor-pointer">
                      <div className="image-wrapper">
                        <Image
                          src={product.activePicture}
                          width="100"
                          height="100"
                          className="block pb-10 transition-all cursor-pointer product hover:-translate-y-1"
                          alt={product.name}
                        />
                      </div>
                      <span className="block w-[100px] text-center py-4 border-t-2 border-black text-2xl font-bold dark:border-white">
                        {product.name}
                      </span>
                      <span className="block mb-6">
                        Difficulty: {product.difficulty}
                      </span>
                    </div>
                  </Link>
                  <div className="flex items-center gap-8">
                    <div className="flex gap-1 min-w-[60px]">
                      <ChangeColorsBtn
                        matchedProduct={product}
                        setRendered={props.setRendered}
                      />
                    </div>
                    <span className="text-lg font-bold">{product.price}$</span>
                  </div>
                  <div>
                    <AddToCartBtn
                      matchedProduct={product}
                      setUserMessage={props.setUserMessage}
                      setRendered={props.setRendered}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainProductSection;

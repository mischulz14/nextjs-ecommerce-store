import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { handleCookieChange } from '../../utils/cookies';

const DecreaseQuantityInCartBtn = (props: any) => {
  const productContext = useContext(ProductContext);
  return (
    <button
      onClick={() => {
        if (props.product.count <= 1) return;

        handleCookieChange('count', props.product, false);
        productContext.setChosenProducts((prev: any) => {
          const found = prev.find((item: any) => item.id === props.product.id);
          if (found) {
            found.count--;
            return [...prev];
          }
          return [...prev, props.product];
        });
      }}
      className="mt-2 font-bold btn-secondary hover:text-gray-900"
    >
      -
    </button>
  );
};

export default DecreaseQuantityInCartBtn;

import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { handleCookieChange } from '../../utils/cookies';

const IncreaseQuantityInCartBtn = (props: any) => {
  const productContext = useContext(ProductContext);
  return (
    <button
      onClick={() => {
        productContext.setChosenProducts((prev: any) => {
          const found = prev.find((item: any) => item.id === props.product.id);
          if (found) {
            found.count++;
            return [...prev];
          }
          return [...prev, props.product];
        });
        handleCookieChange('count', props.product, true);
      }}
      className="mt-2 font-bold btn-secondary hover:text-gray-900 increase-btn-cart"
    >
      +
    </button>
  );
};

export default IncreaseQuantityInCartBtn;

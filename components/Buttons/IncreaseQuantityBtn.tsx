import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { handleCookieChange } from '../../utils/cookies';
import { increaseCount } from '../../utils/count';
import { productAlreadyInCart } from '../../utils/filter';
import { showUserMessage } from '../../utils/userMessage';

const IncreaseQuantityBtn = (props: any) => {
  const productContext = useContext(ProductContext);
  return (
    <button
      onClick={(event) => {
        const eventTarget = event.currentTarget;
        props.setCount((prev: number) => prev + 1);
        increaseCount(props.matchedProduct);

        if (productAlreadyInCart(props.matchedProduct, productContext)) {
          handleCookieChange('count', props.matchedProduct, true);
          productContext.setChosenProducts((prev: any) => {
            const found = prev.find(
              (item: any) => item.id === props.matchedProduct.id,
            );
            if (found) {
              found.count = props.matchedProduct.count;
              return [...prev];
            }
            return [...prev, props.matchedProduct];
          });
          props.setUserMessage('Item quantity updated!');
          showUserMessage(eventTarget);
        }
        return;
      }}
      className="mt-2 font-bold scale-90 btn-secondary hover:text-gray-900 increase-btn"
    >
      +
    </button>
  );
};

export default IncreaseQuantityBtn;

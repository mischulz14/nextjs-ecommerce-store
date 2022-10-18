import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { handleCookieChange } from '../../utils/cookies';
import { decreaseCount } from '../../utils/count';
import { showUserMessage } from '../../utils/userMessage';

const DecreaseQuantityBtn = (props: any) => {
  const productContext = useContext(ProductContext);
  return (
    <button
      onClick={(event) => {
        const eventTarget = event.currentTarget;
        if (props.count <= 1) return;
        props.setCount((prev: number) => prev - 1);
        decreaseCount(props.matchedProduct);
        handleCookieChange('count', props.matchedProduct, false);

        /* Updating the state of the productContext. */
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
        return;
      }}
      className="mt-2 font-bold scale-90 btn-secondary hover:text-gray-900"
    >
      -
    </button>
  );
};

export default DecreaseQuantityBtn;

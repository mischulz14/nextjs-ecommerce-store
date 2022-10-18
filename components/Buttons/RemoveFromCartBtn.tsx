import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { removeCookie } from '../../utils/cookies';

const RemoveFromCartBtn = (props: any) => {
  const productContext = useContext(ProductContext);
  return (
    <button
      data-test-id={`cart-product-remove-${props.product.id}`}
      onClick={() => {
        removeCookie('count', props.product);
        // remove elements from list
        productContext.setChosenProducts(
          productContext.chosenProducts.filter(
            (item: { id: number }) => item.id !== props.product.id,
          ),
        );
      }}
      className="remove-btn absolute top-0 right-0 flex items-center justify-center w-6 h-6 btn-primary hover:scale-105"
    >
      X
    </button>
  );
};

export default RemoveFromCartBtn;

import { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import { addCookie } from '../../../utils/cookies';
import { productAlreadyInCart } from '../../../utils/filter';
import { showUserMessage } from '../../../utils/userMessage';

const AddToCartBtn = (props: any) => {
  const productContext = useContext(ProductContext);

  return (
    <button
      data-test-id="product-add-to-cart"
      onClick={(event) => {
        const eventTarget = event.currentTarget;
        if (productAlreadyInCart(props.matchedProduct, productContext)) {
          props.setUserMessage('Item already in cart!');
          showUserMessage(eventTarget);
          return;
        } else {
          addCookie('count', props.matchedProduct);
          props.setUserMessage('Item added to cart!');
          showUserMessage(eventTarget);
          productContext.setChosenProducts([
            ...productContext.chosenProducts,
            { ...props.matchedProduct },
          ]);

          props.setRendered((prev: boolean) => !prev);
        }
      }}
      className="btn-primary mt-4 hover:scale-[1.1] cart-btn active:scale-95"
    />
  );
};

export default AddToCartBtn;

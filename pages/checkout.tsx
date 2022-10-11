import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Checkout = () => {
  const productContext = useContext(ProductContext);
  return (
    <div className="dark:text-white">
      <span>Checkout</span>
      <span>{productContext.totalPrice}</span>
    </div>
  );
};

export default Checkout;

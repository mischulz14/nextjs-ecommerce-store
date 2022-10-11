import Image from 'next/image';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Checkout = () => {
  const productContext = useContext(ProductContext);
  return (
    <div className="mx-auto dark:text-white dark:bg-slate-600">
      <span>Checkout</span>
      <span>{productContext.totalPrice}</span>
      <form className="flex text-black checkout__form">
        <div className="flex flex-col border-2 border-black checkout__form__person-info">
          <Image src="/images/person.svg" width="50" height="50" />
          <input
            data-test-id="checkout-first-name"
            type="text"
            placeholder="First Name"
          />
          <input
            data-test-id="checkout-last-name"
            type="text"
            placeholder="Last Name"
          />
          <input
            type="email"
            data-test-id="checkout-email"
            placeholder="E-Mail"
          />
        </div>
        <div className="flex flex-col border-2 border-black checkout__form__person-location">
          <Image src="/images/house.svg" width="50" height="50" />
          <input
            data-test-id="checkout-address"
            type="text"
            placeholder="Address"
          />
          <input data-test-id="checkout-city" type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input
            data-test-id="checkout-postal-code"
            type="text"
            placeholder="Postal Code"
          />
          <input
            data-test-id="checkout-country"
            type="country"
            placeholder="Country"
          />
        </div>
        <div className="flex flex-col border-2 border-black checkout__form__person-payment-info">
          <Image src="/images/credit-card.svg" width="50" height="50" />
          <input
            id="ccn"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength={19}
            placeholder="xxxx xxxx xxxx xxxx"
          />

          <input type="date" data-test-id="checkout-expiration-date" />
          <input type="text" data-test-id="checkout-security-code" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;

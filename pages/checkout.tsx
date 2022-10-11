import Image from 'next/image';
import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

const Checkout = () => {
  const productContext = useContext(ProductContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('submit');

    if (
      !firstName ||
      !lastName ||
      !email ||
      !address ||
      !city ||
      !zip ||
      !country ||
      !creditCard ||
      !expirationDate ||
      !securityCode
    ) {
      alert('Please fill out all fields');
      return;
    }
  };

  return (
    <div className="mx-auto dark:text-white dark:bg-slate-600">
      {/* <span>Checkout</span>
      <span>{productContext.totalPrice}</span> */}
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="mx-auto checkout__form"
      >
        <div className="flex flex-col justify-center gap-2 mx-auto text-black checkout__form-container sm:flex-row">
          <div className="flex flex-col checkout__form__person-info">
            <div className="checkout__image-wrapper">
              <Image src="/images/person.svg" width="50" height="50" />
            </div>
            <span className="mb-4 text-center text-black uppercase dark:text-white">
              Personal Info
            </span>
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              data-test-id="checkout-first-name"
              type="text"
              placeholder="First Name"
            />
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              data-test-id="checkout-last-name"
              type="text"
              placeholder="Last Name"
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              data-test-id="checkout-email"
              placeholder="E-Mail"
            />
          </div>
          <div className="flex flex-col checkout__form__person-location">
            <div className="checkout__image-wrapper">
              <Image src="/images/house.svg" width="50" height="50" />
            </div>
            <span className="mb-4 text-center text-black uppercase dark:text-white">
              Location
            </span>
            <input
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              data-test-id="checkout-address"
              type="text"
              placeholder="Address"
            />
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              data-test-id="checkout-city"
              type="text"
              placeholder="City"
            />

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
          <div className="flex flex-col checkout__form__person-payment-info">
            <div className="checkout__image-wrapper">
              <Image src="/images/credit-card.svg" width="50" height="50" />
            </div>
            <span className="mb-4 text-center text-black uppercase dark:text-white">
              Payment Details
            </span>
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
            <input
              type="text"
              data-test-id="checkout-security-code"
              placeholder="Security Code"
            />
          </div>
        </div>
        <button
          data-test-id="checkout-confirm-order"
          className="mx-auto mb-6 btn-primary bg-slate-900 "
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;

import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

const PaymentDetailInputs = (props: {
  creditCard: string;
  setCreditCard: Dispatch<SetStateAction<string>>;
  expirationDate: string;
  setExpirationDate: Dispatch<SetStateAction<string>>;
  securityCode: string;
  setSecurityCode: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col items-center checkout__form__person-payment-info">
      <div className="checkout__image-wrapper">
        <Image src="/images/credit-card.svg" width="50" height="50" />
      </div>
      <span className="mb-10 text-center text-black uppercase dark:text-white">
        Payment Details
      </span>
      <div className="relative input-wrapper">
        <input
          value={props.creditCard}
          onChange={(event) => props.setCreditCard(event.target.value)}
          id="ccn"
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          autoComplete="cc-number"
          maxLength={19}
          placeholder="xxxx xxxx xxxx xxxx"
        />
        <label htmlFor="credit-card">Credit Card</label>
      </div>
      <div className="relative input-wrapper">
        <input
          id="expiration-date"
          value={props.expirationDate}
          onChange={(event) => props.setExpirationDate(event.target.value)}
          data-test-id="checkout-expiration-date"
          placeholder="Format: MM/YY"
          maxLength={5}
        />
        <label htmlFor="expiration-date">Expiration Date</label>
      </div>
      <div className="relative input-wrapper">
        <input
          id="security-code"
          value={props.securityCode}
          onChange={(event) => props.setSecurityCode(event.target.value)}
          data-test-id="checkout-security-code"
          placeholder="Format: 123"
          maxLength={3}
        />
        <label htmlFor="security-code">Security Code</label>
      </div>
    </div>
  );
};

export default PaymentDetailInputs;

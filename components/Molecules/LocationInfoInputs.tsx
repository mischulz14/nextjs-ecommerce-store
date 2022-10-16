import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import CountrySelect from './CountrySelect';

const LocationInfoInputs = (props: {
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  zip: string;
  setZip: Dispatch<SetStateAction<string>>;
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col items-center checkout__form__person-location">
      <div className="checkout__image-wrapper">
        <Image src="/images/house.svg" width="50" height="50" />
      </div>
      <span className="mb-8 text-center text-black uppercase dark:text-white">
        Location
      </span>
      <div className="relative input-wrapper">
        <input
          id="address"
          value={props.address}
          onChange={(event) => props.setAddress(event.target.value)}
          data-test-id="checkout-address"
          placeholder="Street 123"
        />
        <label htmlFor="address">Address</label>
      </div>
      <div className="relative input-wrapper">
        <input
          id="city"
          value={props.city}
          onChange={(event) => props.setCity(event.target.value)}
          data-test-id="checkout-city"
        />
        <label htmlFor="city">City</label>
      </div>
      <div className="relative input-wrapper">
        <input
          id="zip"
          value={props.zip}
          onChange={(event) => props.setZip(event.target.value)}
          data-test-id="checkout-postal-code"
          placeholder="Postal Code"
        />
        <label htmlFor="zip">Zip</label>
      </div>
      <CountrySelect country={props.country} setCountry={props.setCountry} />
    </div>
  );
};

export default LocationInfoInputs;

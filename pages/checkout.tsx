import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import LocationInfoInputs from '../components/Molecules/LocationInfoInputs';
import PaymentDetailInputs from '../components/Molecules/PaymentDetailInputs';
import PersonalInfoInputs from '../components/Molecules/PersonalInfoInputs';
import { ProductContext } from '../context/ProductContext';
import { removeAllCookies } from '../utils/cookies';
import { getTotalCost } from '../utils/getTotal';
import { getProductListAndCookieInfo } from '../utils/serverSideProps';

const Checkout = ({ foundInCookies }: any) => {
  const productContext = useContext(ProductContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [country, setCountry] = useState('');
  const router = useRouter();

  useEffect(() => {
    productContext.setChosenProducts(foundInCookies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      !creditCard ||
      !expirationDate ||
      !securityCode
    ) {
      alert('Please fill out all fields');
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push('/thankyou');
    removeAllCookies('count');
  };

  return (
    <div>
      <div className="mx-auto dark:text-white dark:bg-slate-600">
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="mx-auto checkout__form"
        >
          <div className="flex flex-col justify-center gap-2 mx-auto text-black checkout__form-container md:flex-row">
            <PersonalInfoInputs
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
            />
            <LocationInfoInputs
              country={country}
              setCountry={setCountry}
              address={address}
              setAddress={setAddress}
              zip={zip}
              setZip={setZip}
              city={city}
              setCity={setCity}
            />
            <PaymentDetailInputs
              creditCard={creditCard}
              setCreditCard={setCreditCard}
              expirationDate={expirationDate}
              setExpirationDate={setExpirationDate}
              securityCode={securityCode}
              setSecurityCode={setSecurityCode}
            />
          </div>

          <span className="block -mt-6 text-lg text-center uppercase">
            Total Price:
          </span>
          <span className="inline-block w-full pt-2 pb-8 text-lg text-center">
            {getTotalCost(productContext.chosenProducts)}
          </span>

          <button
            data-test-id="checkout-confirm-order"
            className="mx-auto mb-6 scale-110 btn-primary bg-slate-900 hover:scale-125"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

export async function getServerSideProps(context: any) {
  return await getProductListAndCookieInfo(context);
}

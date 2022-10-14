import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import CountrySelect from '../components/CountrySelect';
import { ProductContext } from '../context/ProductContext';
import { getOrigamiList } from '../data/connect';
import { removeAllCookies } from '../utils/cookies';
import { getTotalCost } from '../utils/getTotal';

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
  const router = useRouter();

  // interface IProps {
  //   country: string;
  //   setCountry: Dispatch<SetStateAction<string>>;
  // }

  useEffect(() => {
    productContext.setChosenProducts(foundInCookies);
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
        {/* <span>Checkout</span>
      <span>{productContext.totalPrice}</span> */}
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="mx-auto checkout__form"
        >
          <div className="flex flex-col justify-center gap-2 mx-auto text-black checkout__form-container md:flex-row">
            <div className="flex flex-col items-center checkout__form__person-info">
              <div className="checkout__image-wrapper">
                <Image src="/images/person.svg" width="50" height="50" />
              </div>
              <span className="mb-10 text-center text-black uppercase dark:text-white">
                Personal Info
              </span>
              <div className="relative input-wrapper">
                <input
                  id="first-name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  data-test-id="checkout-first-name"
                />
                <label htmlFor="first-name">First Name</label>
              </div>
              <div className="relative input-wrapper">
                <input
                  id="last-name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  data-test-id="checkout-last-name"
                />
                <label htmlFor="last-name">Last Name</label>
              </div>
              <div className="relative input-wrapper">
                <input
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  data-test-id="checkout-email"
                  placeholder="name@provider.com"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
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
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  data-test-id="checkout-address"
                  placeholder="Street 123"
                />
                <label htmlFor="address">Address</label>
              </div>
              <div className="relative input-wrapper">
                <input
                  id="city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  data-test-id="checkout-city"
                />
                <label htmlFor="city">City</label>
              </div>
              <div className="relative input-wrapper">
                <input
                  id="zip"
                  value={zip}
                  onChange={(event) => setZip(event.target.value)}
                  data-test-id="checkout-postal-code"
                  placeholder="Postal Code"
                />
                <label htmlFor="zip">Zip</label>
              </div>
              <CountrySelect />
            </div>
            <div className="flex flex-col items-center checkout__form__person-payment-info">
              <div className="checkout__image-wrapper">
                <Image src="/images/credit-card.svg" width="50" height="50" />
              </div>
              <span className="mb-10 text-center text-black uppercase dark:text-white">
                Payment Details
              </span>
              <div className="relative input-wrapper">
                <input
                  value={creditCard}
                  onChange={(event) => setCreditCard(event.target.value)}
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
                  value={expirationDate}
                  onChange={(event) => setExpirationDate(event.target.value)}
                  data-test-id="checkout-expiration-date"
                  placeholder="Format: MM/YY"
                  maxLength={5}
                />
                <label htmlFor="expiration-date">Expiration Date</label>
              </div>
              <div className="relative input-wrapper">
                <input
                  id="security-code"
                  value={securityCode}
                  onChange={(event) => setSecurityCode(event.target.value)}
                  data-test-id="checkout-security-code"
                  placeholder="Format: 123"
                  maxLength={3}
                />
                <label htmlFor="security-code">Security Code</label>
              </div>
            </div>
          </div>
          <span className="block pb-8 -mt-6 text-lg text-center uppercase">
            Total Price: {getTotalCost(productContext.chosenProducts)}
          </span>

          <button
            // onClick={() => setConfirmedOrder(true)}
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
  const origamiFigures = await getOrigamiList();

  const parsedCookies = context.req.cookies.count
    ? JSON.parse(context.req.cookies.count)
    : [];

  // loop over cookies
  const foundInCookies = parsedCookies
    .map((cookieInfo: { id: number; activePicture: string; count: number }) => {
      return {
        ...origamiFigures.find((origami) => {
          if (origami.id === cookieInfo.id) {
            origami.count = cookieInfo.count;
            return {
              ...origami,
            };
          }
        }),
      };
    })
    .map((item: Record<string, unknown>) => {
      return {
        ...item,
      };
    });

  // find desired cookie object

  return {
    props: {
      origamiFigures,
      foundInCookies: foundInCookies,
    },
  };
}

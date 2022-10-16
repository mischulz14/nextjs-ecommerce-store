import Link from 'next/link';
import { Dispatch, SetStateAction, useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import { ThemeContext } from '../../../context/ThemeContext';
import { getTotalQuantity } from '../../../utils/getTotal';

const CartWagon = (props: {
  setShowSideNav: Dispatch<SetStateAction<boolean>>;
}) => {
  const themeContext = useContext(ThemeContext);
  const productContext = useContext(ProductContext);

  return (
    <button onClick={() => props.setShowSideNav(false)}>
      <Link href="/cart">
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill={themeContext.darkMode ? 'rgb(17 24 39)' : '#fff'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H7.36729C6.86964 17 6.44772 16.6341 6.37735 16.1414L6.07143 14M2 3H4.5L4.78571 5M4.78571 5H5H21L18 14H6.5H6.07143M4.78571 5L6.07143 14M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
            stroke={themeContext.darkMode ? '#fff' : '#000'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <Link href="/cart">
        <div className="absolute flex items-center justify-center w-4 h-4 p-3 text-sm text-white rounded-full -right-1 -top-2 bg-slate-500">
          {getTotalQuantity(productContext.chosenProducts)}
          {productContext.renderComponent}
        </div>
      </Link>
    </button>
  );
};

export default CartWagon;

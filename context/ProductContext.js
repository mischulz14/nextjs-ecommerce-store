import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

// interface ProductContextProps {
//   chosenProducts: Array<never>;
//   renderComponent: boolean;
//   setChosenProducts: Dispatch<SetStateAction<never[]>>;
//   setRenderComponent: Dispatch<SetStateAction<boolean>>;
//   setTotalPrice: Dispatch<SetStateAction<number>>;
//   totalPrice: number;
// }

// TODO convert to TS

// const ProductContext = createContext<ProductContextProps>(undefined!);

const ProductContext = createContext();

function ProductContextProvider(props) {
  const [chosenProducts, setChosenProducts] = useState([]);
  const [renderComponent, setRenderComponent] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const value = {
    chosenProducts,
    setChosenProducts,
    setRenderComponent,
    setTotalPrice,
    totalPrice,
    renderComponent,
  };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductContextProvider };

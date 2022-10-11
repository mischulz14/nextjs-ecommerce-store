import { createContext, Dispatch, SetStateAction, useState } from 'react';

// interface ProductContextProps {
//   chosenProducts: Array<any>;
//   setChosenProducts?: Dispatch<SetStateAction<never[]>>;
//   setRenderComponent?: Dispatch<SetStateAction<boolean>>;
// }

// const ProductContext = createContext<ProductContextProps>();

const ProductContext = createContext();

function ProductContextProvider(props) {
  const [chosenProducts, setChosenProducts] = useState([]);
  const [renderComponent, setRenderComponent] = useState(false);

  const value = {
    chosenProducts,
    setChosenProducts,
    setRenderComponent,
  };

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductContextProvider };

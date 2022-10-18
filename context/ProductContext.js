import { createContext, useState } from 'react';

// TODO convert to TS

// const ProductContext = createContext<ProductContextProps>(undefined!);

const ProductContext = createContext();

function ProductContextProvider(props) {
  const [chosenProducts, setChosenProducts] = useState([]);
  const [renderComponent, setRenderComponent] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   setChosenProducts(getParsedCookie('count'));
  // }, []);

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

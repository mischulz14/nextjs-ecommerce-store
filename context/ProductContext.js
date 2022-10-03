import { createContext, useEffect, useState } from 'react';

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

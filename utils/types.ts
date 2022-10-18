export type Product = {
  id: number;
  name: string;
  price: number;
  count: number;
  firstPicture: string;
  secondPicture: string;
  difficulty: number;
  activePrice: number;
  activePicture: string;
  secondColor: string;
};

export type IndexProps = {
  origamiFigures: Product[];
  foundInCookies: Product;
};

// interface ProductContextProps {
//   chosenProducts: Array<never>;
//   renderComponent: boolean;
//   setChosenProducts: Dispatch<SetStateAction<never[]>>;
//   setRenderComponent: Dispatch<SetStateAction<boolean>>;
//   setTotalPrice: Dispatch<SetStateAction<number>>;
//   totalPrice: number;
// }

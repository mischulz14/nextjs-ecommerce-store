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

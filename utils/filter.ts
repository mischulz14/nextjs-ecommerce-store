import { Product } from './types';

export function productAlreadyInCart(product: Product, context: any) {
  return context.chosenProducts.find(
    (origami: { id: number }) => origami.id === product.id,
  );
}

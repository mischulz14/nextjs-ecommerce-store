export function increaseCount(product: {price:number, count:number, activePrice:number}) {
  product.count++;
  product.activePrice = product.price * product.count;
}

export function decreaseCount(product: {
  price: number;
  count: number;
  activePrice: number;
}) {
  product.count--;
  product.activePrice = product.price * product.count;
}

export function increaseCount(product) {
  product.count++;
  product.activePrice = product.price * product.count;
}

export function decreaseCount(product) {
  product.count--;
  product.activePrice = product.price * product.count;
}

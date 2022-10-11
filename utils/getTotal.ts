export function getTotalCost(
  productList: Array<{ price: number; count: number }>,
) {
  return productList.reduce(
    (totalCost, { price: itemCost, count: quantity }) =>
      totalCost + itemCost * quantity,
    0,
  );
}

export function getTotalQuantity(
  productList: Array<{ price: number; count: number }>,
) {
  return productList.reduce(
    (totalQuantity, { count: productQuantity }) =>
      totalQuantity + productQuantity,
    0,
  );
}

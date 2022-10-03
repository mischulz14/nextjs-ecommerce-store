export function getTotalCost(productList) {
  return productList.reduce(
    (totalCost, { activePrice: itemCost }) => totalCost + parseFloat(itemCost),
    0,
  );
}

export function getTotalQuantity(productList) {
  return productList.reduce(
    (totalQuantity, { count: productQuantity }) =>
      totalQuantity + parseFloat(productQuantity),
    0,
  );
}

export const productId = (product) => {
  const maxId = product.reduce((maxId, pd) => Math.max(pd.id, maxId), 0);
  return maxId + 1;
};

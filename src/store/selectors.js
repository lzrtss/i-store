import { createSelector } from 'reselect';

export const selectAllProducts = (state) => state.products.products;
export const selectOrderedProducts = (state) => state.products.orderedProducts;
export const selectLoadingProducts = (state) => state.products.loadingProducts;

export const selectOrderedProductsIds = createSelector(
  selectOrderedProducts,
  (orderedProducts = []) => Object.keys(orderedProducts).filter(key => orderedProducts[key] > 0)
);

export const getTotalAmount = createSelector(
  [selectAllProducts, selectOrderedProducts, selectOrderedProductsIds],
  (products, orderedProducts = [], orderedProductsIds = []) => {
    let totalAmount = 0;
    products.forEach(prod => {
      if (orderedProductsIds.includes(prod.id)) {
        totalAmount += prod.price * orderedProducts[prod.id];
      }
    });
    return totalAmount;
  }
);

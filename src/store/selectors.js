import { createSelector } from 'reselect';

export const selectAllProducts = (state) => state.products.products;
export const selectOrderedProducts = (state) => state.products.orderedProducts;
export const selectLoadingProducts = (state) => state.products.loadingProducts;
export const getShowFiltersValue = (state) => state.products.showFilters;
export const selectMinPrice = (state) => state.products.minPrice;
export const selectMaxPrice = (state) => state.products.maxPrice === 0 ? 9999 : state.products.maxPrice;
export const selectOrigin = (state) => state.products.origin;
export const selectShowModalValue = (state) => state.products.showModal;

export const selectOrderedProductsIds = createSelector(
  selectOrderedProducts,
  (orderedProducts = []) => Object.keys(orderedProducts).filter(key => orderedProducts[key] > 0)
);

export const selectAllProductsIds = createSelector( // check if works correctly
  selectAllProducts,
  (products = []) => products.map(prod => prod.id)
);

export const selectMyProductsIds = createSelector( // check if works correctly
  selectAllProducts,
  (products = []) => products
    .filter(prod => prod.isEditable === true)
    .map(prod => prod.id)
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

export const getFilteredProducts = createSelector(
  [selectAllProducts, selectMinPrice, selectMaxPrice, selectOrigin],
  (products, minPrice, maxPrice, origin) => {
    const filteredProducts = products.filter(prod => 
      prod.price >= minPrice && prod.price <= maxPrice && origin.includes(prod.origin));
    return filteredProducts;
  }
);

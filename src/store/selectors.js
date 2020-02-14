import { createSelector } from 'reselect';

export const selectAllProducts = (state) => state.products.products;
export const selectOrderedProducts = (state) => state.products.orderedProducts;
export const selectLoadingProducts = (state) => state.products.loadingProducts;
export const getShowFiltersValue = (state) => state.products.showFilters;
export const selectMinPrice = (state) => state.products.minPrice;
export const selectMaxPrice = (state) => state.products.maxPrice === 0 ? 9999 : state.products.maxPrice;
export const selectOrigin = (state) => state.products.origin;
export const selectShowModalValue = (state) => state.products.showModal;
export const getShowMyProductsValue = (state) => state.products.showMyProducts;
export const selectEditProductId = (state) => state.products.editProductId;

export const selectEditProductById = createSelector(
  [selectAllProducts, selectEditProductId],
  (products = [], id) => products.find(prod => prod.id === id)
);

export const selectOrderedProductsIds = createSelector(
  selectOrderedProducts,
  (orderedProducts = []) => Object.keys(orderedProducts).filter(key => orderedProducts[key] > 0)
);

export const selectAllProductsIds = createSelector(
  selectAllProducts,
  (products = []) => products.map(prod => prod.id)
);

export const selectMyProducts = createSelector(
  selectAllProducts,
  (products) => products.filter(prod => prod.isEditable === true)
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
  [selectAllProducts, selectMinPrice, selectMaxPrice, selectOrigin, getShowMyProductsValue],
  (products, minPrice, maxPrice, origin, showMyProductsValue) => {
    let filteredProducts;

    if (!showMyProductsValue) {
      filteredProducts = products.filter(prod => 
        prod.price >= minPrice && prod.price <= maxPrice && origin.includes(prod.origin));
    } else {
      filteredProducts = products.filter(prod => 
        prod.price >= minPrice && prod.price <= maxPrice && origin.includes(prod.origin) && prod.isEditable === showMyProductsValue);
    }

    return filteredProducts;
  }
);

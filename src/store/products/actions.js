import {
  SET_PRODUCTS,
  SET_ORDERED_PRODUCTS,
  SET_LOADING_PRODUCTS,
  TOGGLE_FILTERS,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  SET_ORIGIN,
  ADD_TO_CART,
  SUBSTRACT_FROM_CART,
  REMOVE_ITEM_FROM_CART
} from './actionTypes';

export const initFetchingProducts = () => {
  return dispatch => {
    dispatch(setLoadingProducts(true));
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then(res => res.json())
      .then(data => {
        dispatch(setProducts(data.items));
        dispatch(setLoadingProducts(false));
        const productsInCart = {};
        data.items.forEach(prod => productsInCart[prod.id] = 0);
        dispatch(setOrderedProducts(productsInCart));
    })
    .catch(error => {
      console.log('Fetching products failed...', error);
    });
  }
}

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products: products 
  }
};

export const setOrderedProducts = (products) => {
  return {
    type: SET_ORDERED_PRODUCTS,
    orderedProducts: products 
  }
};

export const setLoadingProducts = (value) => {
  return {
    type: SET_LOADING_PRODUCTS,
    value: value 
  }
};

export const toggleFilters = () => {
  return {
    type: TOGGLE_FILTERS
  }
};

export const setMinPrice = (minPrice) => {
  return {
    type: SET_MIN_PRICE,
    value: minPrice
  }
};

export const setMaxPrice = (maxPrice) => {
  return {
    type: SET_MAX_PRICE,
    value: maxPrice
  }
};

export const setOrigin = (origin) => {
  return {
    type: SET_ORIGIN,
    value: origin
  }
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id: id 
  }
};

export const substractFromCart = (id) => {
  return {
    type: SUBSTRACT_FROM_CART,
    id: id
  }
};

export const removeItemFromCart = (id) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    id: id
  }
};

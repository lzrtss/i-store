import { 
  SET_PRODUCTS,
  SET_ORDERED_PRODUCTS,
  SET_LOADING_PRODUCTS,
  ADD_TO_CART,
  SUBSTRACT_FROM_CART,
  REMOVE_ITEM_FROM_CART
} from './actionTypes';

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

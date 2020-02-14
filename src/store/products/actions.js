import axios from 'axios';

import {
  SET_PRODUCTS,
  SET_ORDERED_PRODUCTS,
  SET_SHOW_MY_PRODUCTS,
  SET_LOADING_PRODUCTS,
  TOGGLE_FILTERS,
  HIDE_FILTERS,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  SET_ORIGIN,
  ADD_TO_CART,
  SUBSTRACT_FROM_CART,
  REMOVE_ITEM_FROM_CART,
  SHOW_MODAL,
  HIDE_MODAL,
  SET_EDIT_PRODUCT_ID
} from './actionTypes';

const config = {
  headers: {
    Authorization: process.env.REACT_APP_API_KEY
  }
};

export const initFetchingProducts = () => {
  return dispatch => {
    dispatch(setLoadingProducts(true));
    axios.get(`${process.env.REACT_APP_API_URL}/products/?page=8`, config) // TODO: remove page
      .then(res => {
        dispatch(setProducts(res.data.items));
        dispatch(setLoadingProducts(false));
        const productsInCart = {};
        res.data.items.forEach(prod => productsInCart[prod.id] = 0);
        dispatch(setOrderedProducts(productsInCart));
    })
    .catch(error => {
      console.log('Fetching products failed...', error); // TODO: rewrite to show in UI
      dispatch(setLoadingProducts(false));
    });
  }
};

export const addProduct = (productData) => {

  return dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}/products`, productData, config)
      .then(res => {
        dispatch(hideModal());
        dispatch(initFetchingProducts());
        console.log(res); // TODO: remove
      })
    .catch(error => {
      console.log('Fetching products failed...', error); // TODO: rewrite to show in UI
    });
  }
};

export const sendUpdatedProductData = (id, newData) => {
  return dispatch => {
    console.log('Start editing... ', id, newData); // TODO: remove
    axios.patch(`${process.env.REACT_APP_API_URL}/products/${id}`, newData, config)
      .then(res => {
        console.log(res.data); // TODO: remove
        dispatch(hideModal());
        dispatch(initFetchingProducts());
        dispatch(setEditProductId(null));
      })
      .catch(err => console.log(err)) // TODO: rewrite to show in UI
  }
};

export const editProduct = (id, newData) => {
  return dispatch => {
    dispatch(showModal());
    dispatch(setEditProductId(id));
  }
};

export const closeModal = () => {
  return dispatch => {
    dispatch(hideModal());
    dispatch(setEditProductId(null));
  }
};

export const setEditProductId = (id) => {
  return {
    type: SET_EDIT_PRODUCT_ID,
    id: id
  }
};

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

export const setShowMyProducts = (value) => {
  return {
    type: SET_SHOW_MY_PRODUCTS,
    value: value 
  }
}

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

export const hideFilters = () => {
  return {
    type: HIDE_FILTERS
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

export const showModal = () => {
  return {
    type: SHOW_MODAL
  }
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
};

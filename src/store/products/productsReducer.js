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
  REMOVE_ITEM_FROM_CART,
} from './actionTypes';

export const initialState = {
  products: [],
  orderedProducts: {},
  loadingProducts: false,
  showFilters: false,
  minPrice: 0,
  maxPrice: 9999,
  origin: ['europe', 'usa', 'africa', 'asia'],
};

const setProducts = (state, action) => {
  return {
    ...state,
    products: action.products
  }
};

const setOrderedProducts = (state, action) => {
  return {
    ...state,
    orderedProducts: action.orderedProducts
  }
};

const setLoadingProducts = (state, action) => {
  return {
    ...state,
    loadingProducts: action.value
  }
};

const toggleFilters = (state) => {
  return {
    ...state,
    showFilters: !state.showFilters
  }
};

const setMinPrice = (state, action) => {
  return {
    ...state,
    minPrice: Number(action.value)
  }
};

const setMaxPrice = (state, action) => {
  return {
    ...state,
    maxPrice: Number(action.value)
  }
};

const setOrigin = (state, action) => {
  const newOriginArr = [...state.origin];
  const index = newOriginArr.indexOf(action.value);
  if (index === -1) {
    newOriginArr.push(action.value);
  } else {
    newOriginArr.splice(index, 1);
  }
  return {
    ...state,
    origin: newOriginArr
  }
};

const addToCart = (state, action) => {
  return {
    ...state,
    orderedProducts: {
      ...state.orderedProducts,
      [action.id]: state.orderedProducts[action.id] + 1
    }
  }
};

const substractFromCart = (state, action) => {
  return {
    ...state,
    orderedProducts: {
      ...state.orderedProducts,
      [action.id]: state.orderedProducts[action.id] - 1
    }
  }
};

const removeItemFromCart = (state, action) => {
  return {
    ...state,
    orderedProducts: {
      ...state.orderedProducts,
      [action.id]: 0
    }
  }
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: return setProducts(state, action)
    case SET_ORDERED_PRODUCTS: return setOrderedProducts(state, action)
    case SET_LOADING_PRODUCTS: return setLoadingProducts(state, action)
    case TOGGLE_FILTERS: return toggleFilters(state)
    case SET_MIN_PRICE: return setMinPrice(state, action)
    case SET_MAX_PRICE: return setMaxPrice(state, action)
    case SET_ORIGIN: return setOrigin(state, action)
    case ADD_TO_CART: return addToCart(state, action)
    case SUBSTRACT_FROM_CART: return substractFromCart(state, action)
    case REMOVE_ITEM_FROM_CART: return removeItemFromCart(state, action)
    default: return state;
  }
};

export default productsReducer;

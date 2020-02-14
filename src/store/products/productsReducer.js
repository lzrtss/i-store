import {
  SET_PRODUCTS,
  SET_ORDERED_PRODUCTS,
  SET_LOADING_PRODUCTS,
  SET_SHOW_MY_PRODUCTS,
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

export const initialState = {
  products: [],
  orderedProducts: {},
  loadingProducts: false,
  showFilters: false,
  minPrice: 0,
  maxPrice: 9999,
  origin: ['europe', 'usa', 'africa', 'asia'],
  showModal: false,
  showMyProducts: false,
  editProductId: null
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

const setShowMyProducts = (state, action) => {
  return {
    ...state,
    showMyProducts: action.value
  }
};

const toggleFilters = (state) => {
  return {
    ...state,
    showFilters: !state.showFilters
  }
};

const hideFilters = (state) => {
  return {
    ...state,
    showFilters: false
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

const showModal = (state) => {
  return {
    ...state,
    showModal: true
  }
};

const hideModal = (state) => {
  return {
    ...state,
    showModal: false
  }
};

const setEditProductId = (state, action) => {
  return {
    ...state,
    editProductId: action.id
  }
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: return setProducts(state, action)
    case SET_ORDERED_PRODUCTS: return setOrderedProducts(state, action)
    case SET_LOADING_PRODUCTS: return setLoadingProducts(state, action)
    case SET_SHOW_MY_PRODUCTS: return setShowMyProducts(state, action)
    case TOGGLE_FILTERS: return toggleFilters(state)
    case HIDE_FILTERS: return hideFilters(state)
    case SET_MIN_PRICE: return setMinPrice(state, action)
    case SET_MAX_PRICE: return setMaxPrice(state, action)
    case SET_ORIGIN: return setOrigin(state, action)
    case ADD_TO_CART: return addToCart(state, action)
    case SUBSTRACT_FROM_CART: return substractFromCart(state, action)
    case REMOVE_ITEM_FROM_CART: return removeItemFromCart(state, action)
    case SHOW_MODAL: return showModal(state)
    case HIDE_MODAL: return hideModal(state)
    case SET_EDIT_PRODUCT_ID: return setEditProductId(state, action)
    default: return state;
  }
};

export default productsReducer;

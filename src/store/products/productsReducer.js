import { 
  SET_PRODUCTS,
  SET_ORDERED_PRODUCTS,
  SET_LOADING_PRODUCTS,
  ADD_TO_CART,
  SUBSTRACT_FROM_CART, 
  REMOVE_ITEM_FROM_CART, 
} from './actionTypes';

export const initialState = {
  products: [],
  orderedProducts: {},
  loadingProducts: false
  // minPrice: 0,
  // maxPrice: 0,
  // origin: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    case SET_ORDERED_PRODUCTS:
      return {
        ...state,
        orderedProducts: action.orderedProducts
      }
    case SET_LOADING_PRODUCTS:
      return {
        ...state,
        loadingProducts: action.value
      }
    case ADD_TO_CART:
      return {
        ...state,
        orderedProducts: {
          ...state.orderedProducts,
          [action.id]: state.orderedProducts[action.id] + 1
        }
      }
    case SUBSTRACT_FROM_CART:
      return {
        ...state,
        orderedProducts: {
          ...state.orderedProducts,
          [action.id]: state.orderedProducts[action.id] - 1
        }
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        orderedProducts: {
          ...state.orderedProducts,
          [action.id]: 0
        }
      }
    default:
      return state;
  }
};

export default productsReducer;

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import productsReducer from './products/productsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  form: formReducer
});

export default rootReducer;

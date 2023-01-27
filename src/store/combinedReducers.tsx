import { combineReducers } from "redux";
// import languageReducer from './reducers/language';
// import loaderReducer from './reducers/loader';
import productsReducer from "./reducers/products";

export default combineReducers({
  products: productsReducer,
});

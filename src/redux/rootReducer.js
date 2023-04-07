import { combineReducers } from "redux";
import cartProduct from "./cart/reducer";
import addProduct from "./product/reducer";

const rootReducer = combineReducers({
  products: addProduct,
  cart: cartProduct,
});

export default rootReducer;

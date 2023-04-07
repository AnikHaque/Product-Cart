import { productId } from "../product/productId";
import { ADDTOCART, DELETETOCART, REMOVETOCART } from "./actionTypes";
import { initialState } from "./initialStates";

const addToCart = (id, price, state) => {
  // console.log(id, price, state);
  let checker = false;
  const newState = state.map((product) => {
    if (product.id !== id) {
      return product;
    } else {
      checker = true;
      return { ...product, quantity: product.quantity + 1 };
    }
  });
  return checker ? newState : [...state, { id, quantity: 1, price }];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      return addToCart(action.payload.id, action.payload.price, state);
    case REMOVETOCART:
      return state.map((product) => {
        if (action.payload === product.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    case DELETETOCART:
      return state.filter((product) => action.payload !== product.id);

    default:
      return state;
  }
};
export default reducer;

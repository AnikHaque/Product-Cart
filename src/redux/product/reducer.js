import { ADDPRODUCT, ADDTOSTOCK, REMOVETOSTOCK } from "./actionTypes";
import { initialState } from "./initialStates";
import { productId } from "./productId";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [...state, { ...action.payload, id: productId(state) }];
    case ADDTOSTOCK:
      const { id, quantity } = action.payload;
      return state.map((product) => {
        if (id === product.id) {
          return {
            ...product,
            quantity: product.quantity + (quantity ? quantity : 1),
          };
        }
        return product;
      });
    case REMOVETOSTOCK:
      return state.map((product) => {
        if (action.payload === product.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });

    default:
      return state;
  }
};
export default reducer;

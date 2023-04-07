import { ADDPRODUCT, ADDTOSTOCK, REMOVETOSTOCK } from "./actionTypes";

export const addProduct = (products) => {
  return {
    type: ADDPRODUCT,
    payload: products,
  };
};

export const addToStock = (id, quantity) => {
  return {
    type: ADDTOSTOCK,
    payload: { id, quantity },
  };
};

export const removeToStock = (id) => {
  return {
    type: REMOVETOSTOCK,
    payload: id,
  };
};

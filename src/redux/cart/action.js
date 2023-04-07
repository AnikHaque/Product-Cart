import { ADDTOCART, DELETETOCART, REMOVETOCART } from "./actionTypes";

export const addToCart = (id, price) => {
  return {
    type: ADDTOCART,
    payload: { id, price },
  };
};

export const removeToCart = (id) => {
  return {
    type: REMOVETOCART,
    payload: id,
  };
};
export const deleteToCart = (id) => {
  return {
    type: DELETETOCART,
    payload: id,
  };
};

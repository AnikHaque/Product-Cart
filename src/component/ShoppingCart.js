import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, deleteToCart, removeToCart } from "../redux/cart/action";
import { addToStock, removeToStock } from "../redux/product/action";

const ShoppingCart = ({ product, quantity }) => {
  // console.log("product:", product);
  // console.log("quantity:", quantity);

  const dispatch = useDispatch();

  const handleIncrement = (id, price) => {
    dispatch(addToCart(id, price));
    dispatch(removeToStock(id));
  };
  const handleDecrement = (id) => {
    dispatch(removeToCart(id));
    dispatch(addToStock(id));
  };
  const handleDelete = (id, quantity) => {
    dispatch(deleteToCart(id));
    dispatch(addToStock(id, quantity));
  };

  return (
    <div>
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          {/* <!-- cart image --> */}
          <img className="lws-cartImage" src={product?.imgUrl} alt="product" />
          {/* <!-- cart item info --> */}
          <div className="space-y-2">
            <h4 className="lws-cartName">{product.name}</h4>
            <p className="lws-cartCategory">{product.category}</p>
            <p>
              BDT <span className="lws-cartPrice">{product.price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/* <!-- amount buttons --> */}
          <div className="flex items-center space-x-4">
            <button
              className="lws-incrementQuantity"
              disabled={!product.quantity}
              onClick={() => handleIncrement(product.id, product.price)}
            >
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
            <span className="lws-cartQuantity">{quantity}</span>
            <button
              className="lws-decrementQuantity"
              disabled={quantity === 0}
              onClick={() => handleDecrement(product.id, product.quantity)}
            >
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>
          {/* <!-- price --> */}
          <p className="text-lg font-bold">
            BDT
            <span className="lws-calculatedPrice">
              {quantity * product.price}
            </span>
          </p>
        </div>
        {/* <!-- delete button --> */}
        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button
            className="lws-removeFromCart"
            onClick={() => handleDelete(product.id, quantity)}
          >
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

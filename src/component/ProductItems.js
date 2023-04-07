import React from "react";
import { useDispatch } from "react-redux";
import { removeToStock } from "../redux/product/action";
import { addToCart } from "../redux/cart/action";

const ProductItems = ({ pd }) => {
  const dispatch = useDispatch();
  // console.log(pd);
  const { id, name, category, imgUrl, price, quantity } = pd;

  const handleAddToCart = (id, price) => {
    dispatch(removeToStock(id));
    dispatch(addToCart(id, price));
  };

  return (
    <div>
      <div className="lws-productCard">
        <img className="lws-productImage" src={imgUrl} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{name}</h4>
          <p className="lws-productCategory">{category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{quantity}</span>
            </p>
          </div>
          <button
            disabled={!quantity}
            className="lws-btnAddToCart"
            onClick={() => handleAddToCart(id, price)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;

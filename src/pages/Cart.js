import React from "react";
import BillDetails from "../component/BillDetails";
import ShoppingCart from "../component/ShoppingCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const getCartProduct = (id) => {
    return products.filter((product) => id === product.id)[0];
  };

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {/* <!-- Cart Item --> */}
            {cartItem.length < 1
              ? "your cart is empty"
              : cartItem?.map((item) => (
                  <ShoppingCart
                    product={getCartProduct(item.id)}
                    quantity={item.quantity}
                    key={item.id}
                  />
                ))}
            {/* <!-- Cart Items Ends --> */}
          </div>
          <BillDetails />
          {/* <!-- Bill Details --> */}
        </div>
      </div>
    </main>
  );
};

export default Cart;

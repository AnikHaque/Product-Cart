import React from "react";
import { useSelector } from "react-redux";
import logo from "../images/logo.png";
const Navbar = ({ setActivePage }) => {
  const cart = useSelector((state) => state.cart);
  // console.log("cart:", cart);
  // const { quantity } = cart;
  const countedProduct = cart?.reduce(
    (totalQuantity, product) => totalQuantity + product.quantity,
    0
  );

  const handleChangeRoute = (e, route) => {
    e.preventDefault();
    setActivePage(route);
  };
  return (
    <div>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="index.html">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <a
              href="#home"
              className="navHome"
              id="lws-home"
              onClick={(e) => handleChangeRoute(e, "home")}
            >
              Home
            </a>
            <a
              href="cart.html"
              className="navCart"
              id="lws-cart "
              onClick={(e) => handleChangeRoute(e, "cart")}
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{countedProduct}</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

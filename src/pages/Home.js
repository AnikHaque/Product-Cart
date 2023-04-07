import React from "react";
import { useSelector } from "react-redux";
import ProductInput from "../component/ProductInput";
import ProductItems from "../component/ProductItems";

const Home = () => {
  const products = useSelector((state) => state.products);
  return (
    <main className="py-16">
      <div className="productWrapper">
        {/* <!-- products container --> */}
        <div className="productContainer" id="lws-productContainer">
          {/* <!-- product item --> */}
          {products.length === 0 && (
            <span className="font-bold ">Add Products</span>
          )}
          {products.map((pd) => (
            <ProductItems pd={pd} key={pd.id} />
          ))}

          {/* <!-- product item ends --> */}
        </div>
        {/* <!-- products container ends --> */}
        <div>
          {/* <!-- Product Input Form --> */}
          <ProductInput />
          {/* <!-- Product Input Form Ends --> */}
        </div>
      </div>
    </main>
  );
};

export default Home;

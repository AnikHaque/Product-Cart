import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/action";

const ProductInput = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const id = Date.now();
    const products = { name, category, imgUrl, price, quantity };
    // console.log("products:", products);
    dispatch(addProduct(products));
    e.target.reset();
  };

  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={handleSubmit}
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label for="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label for="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label for="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label for="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label for="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductInput;

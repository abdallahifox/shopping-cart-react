import React, { useContext } from "react";
import ProductsContext from "../../Context/products-context";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const { addToItems } = useContext(ProductsContext);

  const addToCart = () => {
    addToItems({ ...product, qty: 1 });
  };

  return (
    <>
      {product && (
        <div className="text-slate-800 flex flex-col w-full h-full justify-center">
          <div className="flex items-center w-full justify-center">
            {product.image ? (
              <img src={product.image} alt="Product" className="mb-3 h-32" />
            ) : (
              "no image found"
            )}
          </div>
          <h3 className="text-md font-bold text-center md:text-left mb-3">
            {product.title || "No Title Found"}
          </h3>

          <span className="text-right mb-2 font-bold">{product.price}$</span>
          <div className="flex items-center justify-center  md:justify-between gap-3 ">
            <button
              onClick={addToCart}
              type="button"
              className="bg-sky-800 py-2 px-4 rounded text-white hover:bg-sky-700 cursor-pointer text-sm"
            >
              Add To Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="font-semibold text-md underline"
            >
              See More
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductItem;

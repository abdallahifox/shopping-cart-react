import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../utilites/getProducts";

import ProductsContext from "../Context/products-context";

function ProductID() {
  const [product, setProduct] = useState({});

  const { addToItems } = useContext(ProductsContext);

  const addToCart = () => {
    addToItems({ ...product, qty: 1 });
  };

  //route
  let { id } = useParams();

  useEffect(() => {
    getProduct(id).then((product) => setProduct(product));
  }, []);
  return (
    <div className="bg-slate-800 grid md:grid-cols-2 gap-4 p-4 fade-in">
      <>
        <div className="text-center">
          <div className="flex flex-col items-center  justify-center">
            <h1 className="text-md md:text-xl font-bold">{product.title}</h1>
            <div className="w-32 my-4">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        </div>
        {product && (
          <div className="flex flex-col h-full text-center md:text-left items-center justify-center">
            <p>{product.description}</p>
            <div className="flex items-center justify-center md:justify-start md:items-start w-full mt-3 gap-3">
              <button
                onClick={addToCart}
                className="bg-sky-800 py-2 px-4 rounded text-white hover:bg-sky-700 cursor-pointer text-sm"
              >
                Add To Cart
              </button>
              <Link
                to="/"
                className="bg-red-800 py-2 px-4 rounded text-white hover:bg-sky-700 cursor-pointer text-sm"
              >
                Go Back
              </Link>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default ProductID;

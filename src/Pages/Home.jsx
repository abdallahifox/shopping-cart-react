import React, { useContext } from "react";
import ProductsContext from "../Context/products-context";

import Products from "./../Components/Landing/Products";
function Home() {
  const { loading } = useContext(ProductsContext);

  return (
    <>
      {!loading && (
        <div className="bg-slate-800 py-10 fade-in">
          <Products />
        </div>
      )}
      {loading && (
        <div className="flex items-center justify-center">
          <h1>Loading</h1>
        </div>
      )}
    </>
  );
}

export default Home;

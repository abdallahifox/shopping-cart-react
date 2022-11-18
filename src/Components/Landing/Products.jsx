import React, { useMemo, useContext } from "react";
import ProductsContext from "../../Context/products-context";
import ProductItem from "./ProductItem";
function Products() {
  const { products } = useContext(ProductsContext);

  //Memo The Products
  const newProducts = useMemo(() => {
    return products;
  }, [products]);
  return (
    <div className="container mx-auto ">
      <div className="p-3 rounded grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {newProducts.map((item) => {
          return (
            <div key={item.id} className="bg-white p-3">
              <ProductItem product={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;

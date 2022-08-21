import React, { useContext, useEffect } from "react";
import ProductsContext from "../../Context/products-context";
function CartItem() {
  const { items, incressItem, decressItem, total, getTotal } =
    useContext(ProductsContext);

  // to watch the total of the items
  useEffect(() => {
    getTotal();
  }, [items]);
  return (
    <>
      <h2 className="text-center mb-10 font-bold text-2xl">Your Cart</h2>
      {items.length > 0
        ? items.map((item) => {
            return (
              <div className="px-4 mb-8" key={item.id}>
                <div className="grid md:grid-cols-2">
                  <div className="flex flex-col items-center">
                    <img
                      src={item.image}
                      alt="w-16 h-16"
                      className="w-48 h-48"
                    />
                  </div>
                  <div className="flex flex-col text-center md:text-left mt-3 md:mt-0">
                    <h1 className="text-xl font-bold mb-3">{item.title}</h1>
                    <p>{item.description}</p>
                    <div className="flex items-center my-4  gap-4">
                      <button
                        onClick={() => incressItem(item.id)}
                        className="bg-red-800 hover:bg-sky-800 px-4 py-1 font-bold text-xl"
                      >
                        +
                      </button>
                      <p className="font-2xl font-bold">{item.qty}</p>
                      <button
                        onClick={() => decressItem(item.id)}
                        className="bg-red-800 hover:bg-sky-800 px-4 py-1 font-bold text-xl"
                      >
                        -
                      </button>
                      <p className="bg-yellow-800 py-1 px-3">
                        {" "}
                        Price {item.price}$
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : ""}

      <span className="mt-8 font-bold flex items-center justify-center">
        {" "}
        <span className="bg-orange-800 px-3 py-1">Total</span> : {total} $
      </span>
    </>
  );
}

export default CartItem;

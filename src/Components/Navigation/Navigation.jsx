import React, { useMemo, useContext } from "react";
import ProductsContext from "../../Context/products-context";

import { Link } from "react-router-dom";
import { routesInt } from "./../../Routes/index";

function Navigation() {
  const { items } = useContext(ProductsContext);

  // Memo To Memories The Navigation components and Prevent It From Rerendering
  const itemsLength = useMemo(() => {
    return items.length;
  }, [items]);
  return (
    <nav className="h-[56px] py-4 px-2 flex items-center bg-sky-800">
      <div className="container mx-auto flex items-center justify-between ">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src="https://api.iconify.design/logos:highcharts.svg" alt="" />
            <p className="text-md font-bold">Shopping cart</p>
          </Link>
        </div>
        <ul className="flex items-center gap-4">
          <li className="text-bold text-md ">
            <Link to={routesInt.home}> Home</Link>
          </li>
          <li className="flex gap-3">
            <Link to={routesInt.cart} className="flex gap-3">
              <img
                src="https://api.iconify.design/ic:baseline-add-shopping-cart.svg"
                alt=""
                className="w-[20px]"
              />
            </Link>
            <span className="bg-red-400  px-2  rounded-full">
              {itemsLength}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

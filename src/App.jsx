import React from "react";
import { Route, Routes } from "react-router-dom";
import { routesInt } from "./Routes/index";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navigation from "./Components/Navigation/Navigation";
import ProductID from "./Pages/ProductID";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path={routesInt.home} element={<Home />} />
        <Route path={routesInt.cart} element={<Cart />} exact />
        <Route path={routesInt.product} element={<ProductID />} exact />{" "}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "./../utilites/getProducts";

const ProductsContext = React.createContext({
  loading: false,
  products: [],
  items: [],
  total: 0,
  addToItems: (paylod) => {},
  incressItem: (id) => {},
  decressItem: (id) => {},
  getTotal: () => {},
});

export const ProductsContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  //Route Navigator

  const Navigate = useNavigate();

  // Add New ITEM To The Cart

  const addToItems = (paylod) => {
    const indexID = items.findIndex((item) => item.id === paylod.id);

    if (indexID === -1) {
      setItems((prev) => [...prev, paylod]);
    } else {
      setItems((prev) => {
        prev[indexID].qty++;
        return [...prev];
      });
    }

    Navigate("/cart");
  };

  // incress Item Qty From The Cart

  const incressItem = (id) => {
    const indexID = items.findIndex((item) => item.id === id);

    setItems((prev) => {
      prev[indexID].qty++;
      return [...prev];
    });
    setTotal((prev) => getTotal());
  };

  // decress Item Qty From The Cart

  const decressItem = (id) => {
    const indexID = items.findIndex((item) => item.id === id);

    setItems((prev) => {
      prev[indexID].qty--;

      // Checking the items and remove items from the arrays

      if (prev[indexID].qty === 0) {
        prev.splice(indexID, 1);
        return [...prev];
      } else {
        return [...prev];
      }
    });
    setTotal((prev) => getTotal());
  };

  // get all the total of price

  const getTotal = () => {
    let total = items.map((item) => item.qty * item.price);
    let tx = 0;
    for (let i = 0; i < total.length; i++) {
      tx += total[i];
    }
    setTotal(parseFloat(tx).toFixed(0));
  };

  useEffect(() => {
    setLoading(true);
    let data = getProducts("https://fakestoreapi.com/products").then((res) => {
      setProducts([...res]);
      setLoading(false);
    });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        loading: loading,
        items: items,
        products: products,
        total: total,
        addToItems: addToItems,
        incressItem: incressItem,
        decressItem: decressItem,
        getTotal: getTotal,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;

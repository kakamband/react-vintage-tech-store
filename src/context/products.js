import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL';
export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios.get(url).then(storeProducts => console.log(storeProducts));
    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
}

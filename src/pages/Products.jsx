import React, { useContext } from 'react';
import { ProductContext } from '../context/products';

export default function Products() {
  const { greeting } = useContext(ProductContext);

  return <h1>hello from products page {greeting}</h1>;
}

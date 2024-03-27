"use client";
import React, { useEffect, useState } from "react";
import { server } from "@/mocks/server";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then(({ products }) => setProducts(products));
  }, []);

  return (
    <div>
      {products.map((prod) => {
        return (
          <h2 className="p-5" key={prod.id}>
            {prod.title}
          </h2>
        );
      })}
    </div>
  );
};

export default Products;

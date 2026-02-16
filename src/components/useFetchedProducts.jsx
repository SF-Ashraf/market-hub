import React from "react";
import { useEffect, useState } from "react";
function useFetchedProducts() {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Requsted Faild");
        }

        const data = await  res.json();
        setFetchedProducts(data);
      } catch (error) {
        isError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getAllProducts();
  },[] );

  return {fetchedProducts , isLoading , isError}
}

export default useFetchedProducts;

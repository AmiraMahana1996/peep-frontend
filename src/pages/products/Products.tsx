import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../interfaces/Product";
import { getProducts } from "../../store/actions/products";
export default function Products() {
  const products: Product[] = useSelector((state: any) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getProducts());
    console.log(products, "products");
  }, []);
  return (
    <>
      {products.map((product: Product) => {
        return <>test</>;
      })}
    </>
  );
}

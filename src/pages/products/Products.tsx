import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";
import { IProduct } from "../../interfaces/Product";
import { getProducts } from "../../store/actions/products";
import "./style.css";

export default function Products() {
  const products: IProduct[] = useSelector((state: any) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getProducts());
    console.log(products, "products");
  }, []);

  return (
    <>
      {products.map((product: IProduct) => {
        return (
          <>
            <Grid
              item
              xs={4}
            >
              <Product
                key={product._id}
                name={product.name}
                img={product?.imageURL}
              />
              <br />
            </Grid>
          </>
        );
      })}
    </>
  );
}

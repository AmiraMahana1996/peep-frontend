import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./style.css";
import { useParams } from "react-router-dom";
import { IProduct } from "../../interfaces/Product";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";
export default function ProductDetails() {
  const products: IProduct[] = useSelector((state: any) => state.products);
  const [product, setProduct] = useState<any>({});
  const { id } = useParams();

  useEffect(() => {
    const productt = products.find((product) => product._id === id);
    setProduct(productt);
  }, []);

  return (
    <>
      <Grid
        container
        className="pro-details-container"
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
      >
        <Grid
          xs={2}
          sm={4}
          md={4}
        >
          <img
            src={product?.imageURL}
            alt="product_image"
            height={500}
            width={400}
          />
        </Grid>
        <Grid
          xs={2}
          sm={4}
          md={4}
        >
          <div className="sec-container">
            <span className="head-text">Name:</span>
            <span className="value-text">{product?.name}</span>
          </div>

          <div className="sec-container">
            <span className="head-text">Price:</span>
            <span className="value-text">${product?.price}</span>
          </div>
          <div className="sec-container">
            <span className="head-text">Review:</span>
            <span className="value-text">
              <Rating
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
            </span>
          </div>
        </Grid>
        <Grid
          xs={2}
          sm={4}
          md={4}
        >
          <Card
            sx={{ minWidth: 275 }}
            className={"add-cart-card"}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
              >
                {product?.name}
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum sint officia neque corrupti enim molestiae sed, ad
                saepe error impedit cumque eveniet, unde maiores id ea nesciunt
                accusantium dicta magnam.
              </Typography>
              <Typography variant="body2">Quantity: 1</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="large"
                color="warning"
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

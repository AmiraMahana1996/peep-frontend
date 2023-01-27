import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./style.css";
export default function Product(props: any) {
  console.log(props);
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.product.imageURL}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>

        <Link
          className="nav-product"
          to={`product/${props.product._id}`}
        >
          <Button size="small">MORE DETAILS</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

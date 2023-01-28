import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { addProductToFavorite } from "../../store/actions/products";

export default function Product(props: any) {
  const [isfav, setIsfav] = useState(false);
  const dispatch = useDispatch();
  const handleFav = () => {
    //  toggle
    setIsfav((current: any) => !current);
    console.log(isfav);
    dispatch<any>(addProductToFavorite(props.product._id, isfav));
  };
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
        <FavoriteIcon
          fontSize="inherit"
          className="fav-border-icon"
          style={{
            color: isfav ? "red" : "",
          }}
          onClick={handleFav}
        />

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

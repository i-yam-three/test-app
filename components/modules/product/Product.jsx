import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../../scss/home/_product.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { AddBoxRounded } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function Product({name,place,price,image,key}) {
  return (
    <Box className="product-card" key={key}>
      <img
        src={image}
        alt=""
        style={{
          borderRadius: "0.5rem 0.5rem 0 0",
          height: "180px",
          width: "100%",
        }}
      />
      <Box className="details">
        <Box className="title-icon-wrap" sx={{ marginTop: "0.5rem" }}>
          <p className="title">{name}</p>
          <p onClick={()=>alert("please login")} style={{cursor:"pointer"}}>
            <FavoriteBorderOutlinedIcon  />
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
          }}
        >
          <p className="">
            <LocationOnOutlinedIcon />
          </p>
          <p>{place}</p>
        </Box>

        <p style={{ color: "red" }}>Rs {price}</p>
        <p
          style={{
            textAlign: "right",
            fontWeight: "bold",
            color: "#0d6efd",
            marginTop: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          Explore Now
        </p>
      </Box>
    </Box>
  );
}

export default Product;

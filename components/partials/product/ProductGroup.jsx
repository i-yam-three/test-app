import React from "react";
import Slider from "react-slick";
import { settings } from "../../../assets/settings/carouselSettings";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { Box, Container } from "@mui/system";
import Product from "../../modules/product/Product";
import "../../../scss/home/_productGroup.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

function ProductGroup({ key, title, icon, products }) {
  return (
    <Container key={ title}>
   
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "20px",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          {icon}
          <p style={{ marginLeft: "0.5rem" }}>{title}</p>
        </div>
        <p style={{ color: "#0d6efd" }}>Explore Now</p>
      </Box>
      <Slider {...settings}>
        {products.map((item, index) => (
          <Product
            key={index}
            name={item.name}
            place={item.place}
            price={item.price}
            image={item.image}
          />
        ))}
      </Slider>
    </Container>
  );
}

export default ProductGroup;

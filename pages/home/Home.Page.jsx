import { FormGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FormBanner from "../../components/partials/home/FormBanner";
import Navbar from "../../components/partials/navs/Navbar";
import "../../scss/home/_home.scss";
import {
  drawerDatas,
  drawerDividerDatas1,
} from "../../assets/datas/home/drawerDatas";
import ProductGroup from "../../components/partials/product/ProductGroup";
import { productDatas } from "../../assets/datas/home/productDatas";
import Footer from "../../components/partials/navs/Footer";
import SecondBanners from "../../components/partials/home/SecondBanners";
import Header from "../../components/partials/navs/Header";
import SecondHeader from "../../components/partials/navs/SecondHeader";

function HomePage() {
  return (
    <Box>
      <Navbar
        drawerDatas={drawerDatas}
        drawerDividerDatas1={drawerDividerDatas1}
      />
      <Box sx={{position:'absolute',top:"100px",width:"100%"}}>
      <Header/>
      <FormBanner />
      <SecondHeader/>
      <SecondBanners/>
      {productDatas.map((item, index) => (
        <ProductGroup
          key={index}
          title={item.heading}
          icon={item.icon}
          products={item.products}
        />
      ))}

      <Footer/>
      </Box>
    </Box>
  );
}

export default HomePage;

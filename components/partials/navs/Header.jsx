import { Box, Container } from "@mui/system";
import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "#012b72",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding:"0.2rem 5%"
      }}
    >

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "auto auto" }}>
          <FmdGoodOutlinedIcon />
        </div>
        <div>
          <p>Commercial shop</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "auto auto" }}>
          <FmdGoodOutlinedIcon />
        </div>
        <div>
          <p>Commercial shop</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "auto auto" }}>
          <FmdGoodOutlinedIcon />
        </div>
        <div>
          <p>Commercial shop</p>
        </div>
      </div>
    </div>
  );
}

export default Header;

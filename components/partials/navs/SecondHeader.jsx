import { Box, Container } from "@mui/system";
import React from "react";
import store from "../../../assets/images/home/store.png";


function SecondHeader() {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding:"0.2rem 1rem"
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
          <img src={store} alt="" height="25px" width="25px" />
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
        <img src={store} alt="" height="25px" width="25px" />

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
        <img src={store} alt="" height="25px" width="25px" />

        </div>
        <div>
          <p>Commercial shop</p>
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;

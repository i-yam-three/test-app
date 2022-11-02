import { Box, Container } from "@mui/system";
import React from "react";
import img1 from "../../../assets/images/home/img1.jpg";
import img2 from "../../../assets/images/home/img2.jpg";

function SecondBanners() {
  return (
    <Container sx={{ display: "flex",marginTop:"2rem" }}>
      <Box sx={{ width: "70%" }}>
        <img
          
          src={img2}
          alt=""
          style={{ maxWidth: "100%", width:"100%",height:"350px",borderRadius:"5px",padding:"0.5rem" }}
        />
      </Box>
      <Box sx={{ width: "30%" }}>
        <img
          src={img1}
          alt=""
          style={{ maxWidth: "100%",width:"100%", height:"350px",borderRadius:"5px",padding:"0.5rem" }}
        />
      </Box>
    </Container>
  );
}

export default SecondBanners;

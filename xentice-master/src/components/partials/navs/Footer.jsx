import { Box, Container } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#012b72", color: "white" }}>
      <Container>
        <Box
          sx={{
            // display: "flex",
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <Box>
            <h3>ABOUT</h3>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
          </Box>
          <Box>
            <h3>ABOUT</h3>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
          </Box>
          <Box>
            <h3>ABOUT</h3>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
          </Box>
          <Box>
            <h3>ABOUT</h3>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
            <p>How Xentice Works</p>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box style={{ maxWidth: "500px" }}>
            <h2>Dislaimer</h2>
            <p>
              Please do not share your xentice password, Credit/Debit card pin,
              other confidential information with anyone even if he/she claims
              to be from xentice. We advise our customers to completely ignore
              such communications & report to us at support@xentice.com
            </p>
          </Box>
          <Box sx={{ dipslay: "flex", flexDirection: "row" }}>
            <div>
              <img
                src="https://miro.medium.com/max/600/1*xqT83bMEz92IBYxS9UQNow.png"
                alt=""
                style={{ width: "150px", height: "auto" }}
              />
            </div>
            <div>
              <img
                src="https://miro.medium.com/max/600/1*nZu0dsnlCQltPT1QMCHFAA.png"
                alt=""
                style={{ width: "150px", height: "auto" }}
              />
            </div>
          </Box>
        </Box>
        <hr style={{ color: "white" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "60%" }}>
            <p>© Xentice Group of Companies 2022 . All Rights Reserved</p>
          </div>
          <div
          className="last-items-footer"
            style={{
              
            }}
          >
            <div> About Us</div>
            <div> Contact Us </div> <div> PrivacyPolicy</div>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Footer;

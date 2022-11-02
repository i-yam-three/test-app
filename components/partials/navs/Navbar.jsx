import * as React from "react";
import Box from "@mui/material/Box";
import "../../../scss/home/_navbar.scss";
import LoginIcon from "@mui/icons-material/Login";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import Divider from "@mui/material/Divider";

export default function Navbar({drawerDatas,drawerDividerDatas1}) {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <Box className="navbar">
      <Box className="left">
        <Box className="items">
          <MenuIcon className="icons" onClick={() => setOpenDrawer(true)} />
          xentice
        </Box>
      </Box>
      <Drawer
        className="drawer"
        anchor={"left"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box className="drawer-items" sx={{ width: "250px" }}>
          <Typography
            className="head"
            sx={{
              fontWeight: "400",
              color: "#2661d7",
              fontSize: "45px",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            Xentice
          </Typography>

          <List>
            {drawerDatas.map((item, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary={"Login/Signup"} />
              </ListItemButton>
            </ListItem>

            {drawerDividerDatas1.map((item, index) => (
              <ListItem disablePadding key={index} sx={{ marginTop: "1rem" }}>
                <ListItemButton>
                  <ListItemText
                    primary={item.text}
                    sx={{ textAlign: "center", color: "#01153d" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        className="right"
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Box className="items">
          <CampaignOutlinedIcon className="icons" />
          Post Ad
        </Box>
        <Box className="items">
          <FmdGoodOutlinedIcon className="icons" />
          Near Me
        </Box>
        <Box className="items">
          <LoginIcon className="icons" />
          Login/Sign Up
        </Box>
      </Box>
    </Box>
  );
}

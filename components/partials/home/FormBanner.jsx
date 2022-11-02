import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { formDatas } from "../../../assets/datas/home/formDatas";
import main from "../../../assets/images/home/main.jpg";
import "../../../scss/home/_homeFormBanner.scss";

function FormBanner() {
  const [selectedValue1, setSelectedValue1] = useState(formDatas[0][0]);
  const [selectedValue2, setSelectedValue2] = useState(formDatas[1][0]);

  return (
    <Box className="form-banner__home">
      <img src={main} className="main-banner" />
      <Box className="form">
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Choose from 25,00+ Spaces for your Business
        </Typography>
        <Typography variant="subtitle1">
          Get inspired and find your perfect place
        </Typography>
        <FormControl sx={{ width: "100%" }}>
          <Select
            value={selectedValue1}
            onChange={(e) => setSelectedValue1(e.target.value)}
          >
            {formDatas[0].map((item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
          <Select
            value={selectedValue2}
            onChange={(e) => setSelectedValue2(e.target.value)}
          >
            {formDatas[1].map((item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button className="search-btn">search</Button>
      </Box>
    </Box>
  );
}

export default FormBanner;

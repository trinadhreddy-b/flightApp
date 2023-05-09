import React from "react";
import { Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#ddd", p: 2}}>
      <Typography variant="body2" align="center" color="text.secondary">
        © {new Date().getFullYear()} Flight Booking App. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;

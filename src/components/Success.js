// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";


const BookingConfirmation = () => {

    return (

    <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minHeight="100vh"
        >
        <Header />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Congratulations!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Your booking was successful.
      </Typography>
      </Box>
     <Footer />
    </Box>
  );
};

export default BookingConfirmation;

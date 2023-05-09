import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import flights from "../data/flights.json";

const Flights = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { tripType, fromCity, toCity, departureDate, returnDate } =
    location.state;
  console.log(fromCity, toCity, departureDate, returnDate);

  // Filter flights based on user input
  const filteredFlights = flights.filter(
    (flight) =>
      flight.fromCity === fromCity &&
      flight.toCity === toCity &&
      flight.departureDate === departureDate
  );

  const returnFlights = flights.filter(
    (flight) =>
      flight.fromCity === toCity &&
      flight.toCity === fromCity &&
      flight.departureDate === returnDate
  );

  const modifyHandler=()=>{
    navigate('/');
  }

  return (
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} >
      <Header />
      <Box sx={{ flex: "1 0 auto", p: 2 }}>
        <Stack direction="row" justifyContent="space-between">
      <Typography variant="h5" gutterBottom color="primary">
        Available Flights
      </Typography>
      <Button variant="outlined" onClick={modifyHandler}>Modify selection</Button>
      </Stack>
      <Stack color="primary" container spacing={2}>
        {filteredFlights.map((flight) => (
          <Stack item xs={12} key={flight.id}>
            <Paper sx={{ p: 2 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6" color="primary">
                  {flight.fromCityName} - {flight.toCityName}
                </Typography>

                <Typography color="primary">
                  Departure: {flight.departureDate} {flight.departureTime}{" "}
                </Typography>
                <Typography color="primary">
                  Arrival: {flight.arrivalDate}
                  {"  "} {flight.arrivalTime}
                </Typography>
                <Typography variant="h5" color="primary">
                  ₹{flight.price}
                </Typography>
                <Button variant="contained">Book</Button>
              </Stack>
            </Paper>
          </Stack>
        ))}
      </Stack>

      <Stack color="primary" container spacing={2}>
        {tripType === "round-trip" &&
          returnFlights.map((flight) => (
            <Stack item xs={12} key={flight.id}>
              <Paper sx={{ p: 2 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6" color="primary">
                    {flight.fromCityName} - {flight.toCityName}
                  </Typography>

                  <Typography color="primary">
                    Departure: {flight.departureDate} {flight.departureTime}{" "}
                  </Typography>
                  <Typography color="primary">
                    Arrival: {flight.arrivalDate}
                    {"  "} {flight.arrivalTime}
                  </Typography>
                  <Typography variant="h5" color="primary">
                    ₹{flight.price}
                  </Typography>
                  <Button variant="contained">Book</Button>
                </Stack>
              </Paper>
            </Stack>
          ))}
      </Stack>

      
    </Box>
    <Footer />
    </Box>
  );
};

export default Flights;

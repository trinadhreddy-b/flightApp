import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import { useState, useContext } from "react";
import { useSnackbar } from "notistack";
import {FlightsContext} from "../context/FlightsProvider";

const Flights = () => {
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const navigate = useNavigate();
  const [flightsData, setFlightsData] = useContext(FlightsContext);
  const [totalPrice,setTotalPrice]=useState(0);

  const [bookingInfo,setBookingInfo]=useState([]);


  const { tripType, fromCity, toCity, departureDate, returnDate, passengers } =
    location.state;
  console.log(fromCity, toCity, departureDate, returnDate);

  // Filter flights based on user input
  const filteredFlights = flightsData.filter(
    (flight) =>
      flight.fromCity === fromCity &&
      flight.toCity === toCity &&
      flight.departureDate === departureDate &&
      flight.availableSeats >= parseInt(passengers)
  );

  const returnFlights = flightsData.filter(
    (flight) =>
      flight.fromCity === toCity &&
      flight.toCity === fromCity &&
      flight.departureDate === returnDate &&
      flight.availableSeats >= parseInt(passengers)
  );

  const modifyHandler=()=>{
    navigate('/');
  }

  const addToBooking=(id,noOfSeats)=>{
    const bookingItem = {
      id: id,
      noOfSeats: noOfSeats
    };
    setBookingInfo([...bookingInfo, bookingItem]);
      console.log(flightsData[id].price,parseInt(noOfSeats),bookingItem);
      const flight = flightsData.find((item)=>item.id===id)
       const price= totalPrice + flight.price * parseInt(noOfSeats);
       setTotalPrice(price);
  }

  const removeBooking=(id,noOfSeats)=>{
    const newBookingInfo= bookingInfo.filter((booking)=>booking.id!==id);
    setBookingInfo([...newBookingInfo]);
    const flight = flightsData.find((item)=>item.id===id)
    const price= totalPrice - flight.price * parseInt(noOfSeats);
    setTotalPrice(price);
  }

  const handleCompleteBooking = (e) => {
    e.preventDefault();

    if(bookingInfo.length<=0){
      enqueueSnackbar("Add one trip atleast",{variant:"warning"});
    }
    // Find the selected flight in the flightsData array
    console.log(bookingInfo);
    for(let booking in bookingInfo){
      console.log(bookingInfo[booking].id);
    const selectedFlight = flightsData.find(flight => flight.id === bookingInfo[booking].id);
    
  
    // If the selected flight is found, update its available seats
    if (selectedFlight) {
      console.log(selectedFlight);
      const updatedFlightsData = flightsData.map(flight => {
        if (flight.id === selectedFlight.Id) {
          // Reduce the available seats by 1 for the selected flight
          console.log({...flight,
            availableSeats: flight.availableSeats - parseInt(bookingInfo[booking].noOfSeats)});
          return {
            ...flight,
            availableSeats: flight.availableSeats - parseInt(bookingInfo[booking].noOfSeats)
          };
        } else {
          return flight;  
        }
      });
  
      // Update the flightsData state with the updated array
      setFlightsData(updatedFlightsData);
      
    }
  }

    navigate('/success');

  };
  
  
  return (
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} >
      <Header />
      <Box sx={{ flex: "1 0 auto", p: 2 }}>
        <Stack direction="row" justifyContent="space-between" sx={{p:2}}>
      <Typography variant="h5" gutterBottom color="primary">
        Available Flights
      </Typography>
      <Button variant="outlined" onClick={modifyHandler}>Modify selection</Button>
      </Stack>
      <Stack color="primary" container spacing={2}>
        {filteredFlights.length===0 && <Typography variant="h6" color="primary">
                  No Flights found
                </Typography>}
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
                {/* <Button variant="contained" onClick={()=>addToBooking(flight.id,passengers)}>Add to Booking</Button> */}
                {bookingInfo.find((booking) => booking.id === flight.id) ? (
                    <Button variant="contained" onClick={()=>removeBooking(flight.id,passengers)}>
                      Remove
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => addToBooking(flight.id, passengers)}
                    >
                      Add to Booking
                    </Button>
                  )}
              </Stack>
            </Paper>
          </Stack>
        ))}
      </Stack>

      <Stack color="primary" container spacing={2}>
        {tripType === "round-trip" && returnFlights.length===0 && <Typography variant="h6" color="primary">
                  No Return Flights found
                </Typography> }
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
                  {/* <Button variant="contained" onClick={()=>addToBooking(flight.id,passengers)}>Add to Booking</Button> */}
                  {bookingInfo.find((booking) => booking.id === flight.id) ? (
                    <Button variant="contained" onClick={()=>removeBooking(flight.id,passengers)}>
                      Remove
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => addToBooking(flight.id, passengers)}
                    >
                      Add to Booking
                    </Button>
                  )}
                </Stack>
              </Paper>
            </Stack>
          ))}
      </Stack>
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Typography variant="h6" color="primary">Total Price: ₹{totalPrice}</Typography>
      </Stack>
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button onClick={handleCompleteBooking}>Complete booking</Button>
      </Stack>
      
    </Box>
    <Footer />
    </Box>
  );
};

export default Flights;

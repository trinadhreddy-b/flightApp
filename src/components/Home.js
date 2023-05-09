import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "./Footer";
import "./Home.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";


const cities = {
  DEL: "New Delhi",
  BOM: "Mumbai",
  BLR: "Bengaluru",
  HYD: "Hyderabad",
  MAA: "Chennai",
  CCU: "Kolkata",
  AMD: "Ahmedabad",
  };

function Home() {
  const [tripType, setTripType] = useState("one-way");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers,setPassengers] = useState(0);
  const navigate=useNavigate();

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleFromCityChange = (event) => {
    setFromCity(event.target.value);
  };

  const handleToCityChange = (event) => {
    setToCity(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };
  const handlePassengerChange=(event)=>{
    setPassengers(event.target.value);
  }
  const searchFlight=()=>{
    const searchData = {tripType, fromCity, toCity, departureDate, returnDate };
    navigate('/flights', { state: searchData });
    
  }

  return (
      <>
      <Header />
      <Box>
      <div className="hero-image">
        <Grid item xs={12} sm={6} md={4} className="search-form">
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Book your flight
            </Typography>
            <div  className="radio-form">
            <RadioGroup
              aria-label="trip-type"
              name="trip-type"
              value={tripType}
              onChange={handleTripTypeChange}
            >
              <FormControlLabel
                value="one-way"
                control={<Radio />}
                label="One-way"
              />
              <FormControlLabel
                value="round-trip"
                control={<Radio />}
                label="Round-trip"
              />
            </RadioGroup>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField
                    id="from"
                    label="From City"
                    variant="outlined"
                    fullWidth
                    select
                    SelectProps={{
                      native: true,
                    }}
                    placeholder="Select City"
                    value={fromCity}
                    onChange={handleFromCityChange}
                  >
                    <option value="" />
                    {Object.keys(cities).map((cityShortcut) => (
                      <option key={cityShortcut} value={cityShortcut}>
                        {cities[cityShortcut]}
                      </option>
                    ))}
                  </TextField>
              </Grid>
              <Grid item xs={12}>
              <TextField
                    id="to"
                    label="To City"
                    variant="outlined"
                    fullWidth
                    select
                    placeholder="Select City"
                    SelectProps={{
                      native: true,
                    }}
                    value={toCity}
                    onChange={handleToCityChange}
                  >
                    <option value="" />
                    {Object.keys(cities).map((cityShortcut) => (
                      <option key={cityShortcut} value={cityShortcut}>
                        {cities[cityShortcut]}
                      </option>
                    ))}
                  </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="date"
                  label="Journey Date"
                  variant="outlined"
                  fullWidth
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleDepartureDateChange}
                />
              </Grid>
              {tripType === "round-trip" && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="return-date"
                    label="Return Date"
                    variant="outlined"
                    fullWidth
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    
                    onChange={handleReturnDateChange}
                  />
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="passengers"
                  label="No of Passengers"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={passengers}
                  onChange={handlePassengerChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SearchIcon />}
                  fullWidth
                  onClick={searchFlight}
                >
                  Search Flight
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
      
      <Footer />
    </Box>
    </>
  );
}

export default Home;

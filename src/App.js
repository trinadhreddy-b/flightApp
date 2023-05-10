import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

import Booking from "./components/Flights";
import AdminDashboard from "./components/AdminDashboard";

import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Flights from "./components/Flights";
import Login from "./components/Login";
import Register from "./components/Register";
import BookingConfirmation from "./components/Success";
import { FlightsProvider } from "./context/FlightsProvider";

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <FlightsProvider >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/flights" element={<Flights />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/success" element={<BookingConfirmation />} />
        </Routes>
      </BrowserRouter>
      </FlightsProvider>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

import Booking from "./components/Flights";
import AdminDashboard from "./components/AdminDashboard";

import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Flights from "./components/Flights";
import Login from "./components/Login";

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/flights" element={<Flights />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

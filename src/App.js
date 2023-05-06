import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Search from "./components/Search";
import Booking from "./components/Booking";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/admin" component={AdminDashboard} />
      </Routes>
      
    </Router>
    
  );
}

export default App;

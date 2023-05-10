import React, { useState, useEffect, useContext } from "react";

import { FlightsContext } from "../context/FlightsProvider";

import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Box,
  Stack,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import AdminLogin from "./AdminLogin";
// import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [bookingsToday, setBookingsToday] = useState(0);
  const [emptySeatsToday, setEmptySeatsToday] = useState(0);
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);
  const [flightsData] = useContext(FlightsContext);
  const [date,setDate]=useState("")
  
  // const navigate=useNavigate();

  useEffect(() => {
    // Calculate the number of bookings and empty seats for today
    
    let bookingsCount = 0;
    let emptySeatsCount = 0;
    for (const flight of flightsData) {
      if (flight.departureDate === date) {
        bookingsCount += flight.totalSeats - flight.availableSeats;
        emptySeatsCount += flight.availableSeats;
      }
    }
    setBookingsToday(bookingsCount);
    setEmptySeatsToday(emptySeatsCount);
  }, [date,flightsData]);

    const handleDateUpdate=(e)=>{
      setDate(e.target.value)
    }
  return (
    <>
      {!isAdminLoggedIn ? (
        <AdminLogin setAdminLoggedIn={setAdminLoggedIn} />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minHeight="100vh"
        >
          <Header setAdminLoggedIn={setAdminLoggedIn} loggedIn />
          <div className="container">
            <Stack direction="row" justifyContent="center">
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                color="primary"
              >
                Admin Dashboard
              </Typography>
              <TextField sx={{marginTop:2}}
                  id="date"
                  label="Report Date"
                  variant="outlined"
                  fullWidth
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleDateUpdate}
                />
            </Stack>
            <Box minWidth={100}>
              <Card variant="outlined" className="card">
                <CardHeader
                  title={`Bookings Today: ${bookingsToday}`}
                  className="cardHeader"
                />

                <CardContent>
                  <Typography variant="h6" component="h3" className="cardTitle">
                    Flight-wise listing
                  </Typography>

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Flight Number</TableCell>
                        <TableCell>From</TableCell>
                        <TableCell>To</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Bookings</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {flightsData.map((flight) => {
                        if (flight.date === date) {
                          return (
                            <TableRow key={flight.id}>
                              <TableCell>{flight.flightNumber}</TableCell>
                              <TableCell>{flight.from}</TableCell>
                              <TableCell>{flight.to}</TableCell>
                              <TableCell>{flight.date}</TableCell>
                              <TableCell>
                                {flight.seats - flight.availableSeats}
                              </TableCell>
                            </TableRow>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Box>
            <Card variant="outlined" className="Card">
              <CardHeader
                title={`Empty Seats Today: ${emptySeatsToday}`}
                className="cardHeader"
              />

              <CardContent>
                <Typography variant="h6" component="h3" className="cardTitle">
                  Flight-wise listing
                </Typography>

                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Flight Number</TableCell>
                      <TableCell>From</TableCell>
                      <TableCell>To</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Empty Seats</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {flightsData.map((flight) => {
                      if (flight.departureDate === date) {
                        return (
                          <TableRow key={flight.id}>
                            <TableCell>{flight.id}</TableCell>
                            <TableCell>{flight.fromCityName}</TableCell>
                            <TableCell>{flight.toCityName}</TableCell>
                            <TableCell>{flight.departureDate}</TableCell>
                            <TableCell>{flight.availableSeats}</TableCell>
                          </TableRow>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <Footer />
        </Box>
      )}
    </>
  );
}

export default AdminDashboard;

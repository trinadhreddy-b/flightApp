// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import flightsData from "../data/flights.json";

// function AdminDashboard() {
//   const [bookingsToday, setBookingsToday] = useState(0);
//   const [emptySeatsToday, setEmptySeatsToday] = useState(0);

//   // Calculate the number of bookings and empty seats for today
//   const today = new Date().toLocaleDateString();
//   let bookingsCount = 0;
//   let emptySeatsCount = 0;
//   console.log(flightsData);
//   for (const flight of flightsData) {
//     if (flight.date === today) {
//       bookingsCount += flight.seats - flight.availableSeats;
//       emptySeatsCount += flight.availableSeats;
//     }
//   }
//   setBookingsToday(bookingsCount);
//   setEmptySeatsToday(emptySeatsCount);

//   return (
//     <div className="container my-5">
//       <h2>Admin Dashboard</h2>
//       <div className="card mb-3">
//         <div className="card-header">
//           <strong>Bookings Today:</strong> {bookingsToday}
//         </div>
//         <div className="card-body">
//           <h5 className="card-title">Flight-wise listing</h5>
//           <table className="table table-striped">
//             <thead>
//               <tr>
//                 <th>Flight Number</th>
//                 <th>From</th>
//                 <th>To</th>
//                 <th>Date</th>
//                 <th>Bookings</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flightsData.map((flight) => {
//                 if (flight.date === today) {
//                   return (
//                     <tr key={flight.id}>
//                       <td>{flight.flightNumber}</td>
//                       <td>{flight.from}</td>
//                       <td>{flight.to}</td>
//                       <td>{flight.date}</td>
//                       <td>{flight.seats - flight.availableSeats}</td>
//                     </tr>
//                   );
//                 }
//                 else{
//                   return null;
//                 }
//               }
//              )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="card">
//         <div className="card-header">
//           <strong>Empty Seats Today:</strong> {emptySeatsToday}
//         </div>
//         <div className="card-body">
//           <h5 className="card-title">Flight-wise listing</h5>
//           <table className="table table-striped">
//             <thead>
//               <tr>
//                 <th>Flight Number</th>
//                 <th>From</th>
//                 <th>To</th>
//                 <th>Date</th>
//                 <th>Empty Seats</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {flightsData.map((flight) => {
//                 if (flight.date === today) {
//                   return (
//                     <tr key={flight.id}>
//                       <td>{flight.flightNumber}</td>
//                       <td>{flight.from}</td>
//                       <td>{flight.to}</td>
//                       <td>{flight.date}</td>
//                       <td>{flight.availableSeats}</td>
//                       <td>
//                         <Link
//                           to={`/admin/edit/${flight.id}`}
//                           className="btn btn-sm btn-primary"
//                         >
//                           Edit
//                         </Link>
//                       </td>
//                     </tr>
//                   );
//                 }
//                 else{
//                   return null;
//                 }
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import flightsData from "../data/flights.json";

function AdminDashboard() {
  const [bookingsToday, setBookingsToday] = useState(0);
  const [emptySeatsToday, setEmptySeatsToday] = useState(0);

  useEffect(() => {
    // Calculate the number of bookings and empty seats for today
    const today = new Date().toLocaleDateString();
    let bookingsCount = 0;
    let emptySeatsCount = 0;
    for (const flight of flightsData) {
      if (flight.date === today) {
        bookingsCount += flight.seats - flight.availableSeats;
        emptySeatsCount += flight.availableSeats;
      }
    }
    setBookingsToday(bookingsCount);
    setEmptySeatsToday(emptySeatsCount);
  }, []);

  return (
    <div className="container my-5">
      <h2>Admin Dashboard</h2>
      <div className="card mb-3">
        <div className="card-header">
          <strong>Bookings Today:</strong> {bookingsToday}
        </div>
        <div className="card-body">
          <h5 className="card-title">Flight-wise listing</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Flight Number</th>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                <th>Bookings</th>
              </tr>
            </thead>
            <tbody>
              {flightsData.map((flight) => {
                if (flight.date === new Date().toLocaleDateString()) {
                  return (
                    <tr key={flight.id}>
                      <td>{flight.flightNumber}</td>
                      <td>{flight.from}</td>
                      <td>{flight.to}</td>
                      <td>{flight.date}</td>
                      <td>{flight.seats - flight.availableSeats}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <strong>Empty Seats Today:</strong> {emptySeatsToday}
        </div>
        <div className="card-body">
          <h5 className="card-title">Flight-wise listing</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Flight Number</th>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                <th>Empty Seats</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {flightsData.map((flight) => {
                if (flight.date === new Date().toLocaleDateString()) {
                  return (
                    <tr key={flight.id}>
                      <td>{flight.flightNumber}</td>
                      <td>{flight.from}</td>
                      <td>{flight.to}</td>
                      <td>{flight.date}</td>
                      <td>{flight.availableSeats}</td>
                      <td>
                        <Link
                          to={`/admin/edit/${flight.id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import flightsData from "../data/flights.json";

function Booking() {
  const { id } = useParams();
  const flight = flightsData.find((flight) => flight.id === id);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [seats, setSeats] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking confirmed for ${seats} seats on flight ${flight.flightNumber} from ${flight.from} to ${flight.to} on ${flight.date} at ${flight.departureTime}`
    );
  };

  return (
    <div className="container my-5">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seats">Number of Seats</label>
          <input
            type="number"
            className="form-control"
            id="seats"
            value={seats}
            min="1"
            max={flight.seats}
            onChange={(e) => setSeats(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Flight Details</label>
          <div>
            <strong>Flight Number:</strong> {flight.flightNumber}
          </div>
          <div>
            <strong>From:</strong> {flight.from}
          </div>
          <div>
            <strong>To:</strong> {flight.to}
          </div>
          <div>
            <strong>Date:</strong> {flight.date}
          </div>
          <div>
            <strong>Departure Time:</strong> {flight.departureTime}
          </div>
          <div>
            <strong>Arrival Time:</strong> {flight.arrivalTime}
          </div>
          <div>
            <strong>Price:</strong> {flight.price}
          </div>
          <div>
            <strong>Available Seats:</strong> {flight.seats}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default Booking;

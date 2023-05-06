import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SearchResults({ flights }) {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const navigate = useNavigate();
  const handleBook = () => {
    navigate(`/booking/${selectedFlight.id}`);
  };

  return (
    <div className="container my-5">
      <h2>Search Results</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Price</th>
            <th>Seats</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.date}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.arrivalTime}</td>
              <td>{flight.price}</td>
              <td>{flight.seats}</td>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flightRadio"
                    id={`flightRadio${flight.id}`}
                    value={flight.id}
                    checked={selectedFlight === flight}
                    onChange={() => setSelectedFlight(flight)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedFlight && (
        <button className="btn btn-primary" onClick={handleBook}>
          Book Selected Flight
        </button>
      )}
    </div>
  );
}

export default SearchResults;

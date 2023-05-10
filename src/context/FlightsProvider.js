import React, { createContext, useState } from "react";
import flights from "../data/flights-data.json";

export const FlightsContext = createContext();

export const FlightsProvider = ({ children }) => {
  const [flightsData, setFlightsData] = useState([...flights]);

  return (
    <FlightsContext.Provider value={[flightsData, setFlightsData]}>
      {children}
    </FlightsContext.Provider>
  );
};

import React, { createContext, useContext } from "react";
import destinationsJSON from "../destinations.json";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const destinations = destinationsJSON;

  return (
    <DataContext.Provider value={{ destinations }}>
      {children}
    </DataContext.Provider>
  );
};

export const DestinationsData = () => {
  return useContext(DataContext);
};

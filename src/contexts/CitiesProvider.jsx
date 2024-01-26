import React, { createContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);

  const url = `http://localhost:8000/cities`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export { CitiesProvider, CitiesContext };

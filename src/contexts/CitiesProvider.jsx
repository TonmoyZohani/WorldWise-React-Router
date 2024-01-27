import React, { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState([]);

  const url = `http://localhost:8000/cities`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  function getCity(id) {
    const url = `http://localhost:8000/cities/${id}`;

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setCurrentCity(data));
    }, []);
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        getCity
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined) {
    throw new Error("CitiesContext was used outside Cities Provider");
  }

  return context;
}

export { CitiesProvider, CitiesContext, useCities };

import React, { useContext } from "react";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { CitiesContext, useCities } from "../contexts/CitiesProvider";

const CityList = () => {
  // const { cities } = useContext(CitiesContext);
  const { cities } = useCities();

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
};

export default CityList;

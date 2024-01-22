import React from "react";
import styles from "./CountryList.module.css";
import CityItem from "./CityItem";

const CountryList = ({ cities }) => {
  console.log(cities);

  const countries = cities.filter(())



  return (
    <ul className={styles.countryList}>
      {/* {cities.map((city) => (
        <CityItem city={city} key={city.id}/>
      ))} */}
    </ul>
  );
};

export default CountryList;

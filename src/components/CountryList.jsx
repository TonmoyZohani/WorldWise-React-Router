import React, { useContext } from "react";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import { CitiesContext, useCities } from "../contexts/CitiesProvider";

const CountryList = () => {
  // const { cities } = useContext(CitiesContext);

  const { cities } = useCities();

  const countries = cities.reduce((arr, city) => {
    if (!arr.some((el) => el.country === city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
};

export default CountryList;

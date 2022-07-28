import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
console.log(countries[0]);
  const value = {
    countries,
    filteredCountries,
    filterCountriesByName: (countryName) => {
      if (countryName) {
        const filterCountryName = countries.filter((country) =>
          country.name.toLowerCase().includes(countryName.toLowerCase())
        );
        setFilteredCountries(filterCountryName);
        return;
      }
      setCountries(countries);
    },
    filterCountriesByRegion: (region) => {
      if (region) {
        const filterCountryName = countries.filter(
          (country) => country.region === region
        );
        setFilteredCountries(filterCountryName);
        return;
      }
      setCountries(countries);
    },
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export default CountryContextProvider;

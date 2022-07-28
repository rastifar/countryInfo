import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContextProvider";

const Card = ({ item }) => {
  const { theme } = useContext(ThemeProvider);

  return (
    <div className={theme}>
      <div className="element  card-container">
        <Link to={`/${item.name}`} className="text">
          <img src={item.flag} />
          <h4>{item.name}</h4>
          <p>Population : {item.population.toLocaleString()}</p>
          <p>Region : {item.region}</p>
          <p>Capital : {item.capital}</p>
        </Link>
      </div>
    </div>
  );
};

export default Card;

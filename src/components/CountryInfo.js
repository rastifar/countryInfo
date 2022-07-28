import React, { useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
//Context
import { CountryContext } from "../context/CountryContextProvider";
import { ThemeProvider } from "../context/ThemeContextProvider";
//Icon
import { BiArrowBack } from "react-icons/bi";

const CountryInfo = () => {
  const { theme } = useContext(ThemeProvider);
  const { name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { countries } = useContext(CountryContext);
  const country = countries.find((item) => item.name === name);

  const findCountryNameByAlfa3Code = (alpha3Code) => {
    const countryName = countries.find((item) => item.alpha3Code === alpha3Code);
    return countryName.name
  }

  const backHandler = () => {
    navigate(-1);
  };

  const borderNavigation = (item) => {
    navigate(`/${item}`, { state: location.pathname });
  };
  return (
    <div className={theme}>
      <div className="background text country-details-container">
        <div className="country-details-layout">
          
            <div
              className="element text back-to-countries"
              onClick={backHandler}
            >
              <div className="search-icon">
                <BiArrowBack />
              </div>
              <div>
                <label>Back</label>
              </div>
            </div>
          
          <div className="flex country-details-content">
            <div className="country-details-image">
              <img src={country?.flag} />
            </div>
            <div className="country-details-info">
              <h3>{country?.name}</h3>
              <div className="flex country-info-container">
                <div className="country-info-1st-part">
                  <p>Native Name : {country?.nativeName}</p>
                  <p>Population : {country?.population.toLocaleString()}</p>
                  <p>Region : {country?.region}</p>
                  <p>Subregion : {country?.subregion}</p>
                  <p>Capital : {country?.capital}</p>
                </div>
                <div className="country-info-2nd-part">
                  <p>
                    Top Level Domain :{" "}
                    {country?.topLevelDomain?.map((item) => item+', ')}
                  </p>
                  <p>
                    Currencies : {country?.currencies?.map((item) => item.name+', ')}
                  </p>
                  <p>
                    Languages : {country?.languages?.map((item) => item.name+', ')}
                  </p>
                </div>
              </div>
              <div className="flex country-borders">
                <div className="country-borders-left">Border Countries :</div>
                <div className="country-borders-rigth">
                  {country?.borders ? (
                    country?.borders.map((item,index) => (
                      // <Link to={`/${item}`}>
                      <span
                        key={index}
                          className="element text country-link"
                          onClick={() => borderNavigation(findCountryNameByAlfa3Code(item))}
                        >
                        {findCountryNameByAlfa3Code(item)}
                       
                        </span>
                    
                    ))
                  ) : (
                    <p>No borders</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;



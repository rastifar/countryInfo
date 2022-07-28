import React, { useContext } from "react";
import { CountryContext } from "../context/CountryContextProvider";
import { FaSearch } from "react-icons/fa";
import { ThemeProvider } from "../context/ThemeContextProvider";
import { useSearchParams, useLocation } from "react-router-dom";

const Search = () => {
  const { theme } = useContext(ThemeProvider);
  const [searchParams, setSearchParams] = useSearchParams({});

  const { filterCountriesByName, filterCountriesByRegion } =
    useContext(CountryContext);

  const filteringCountries = (e) => {
    if (e.target.name === "regionFilter") {
      filterCountriesByRegion(e.target.value);
      return;
    }
    // setSearchParams({ hello: "world"  });
    setSearchParams(e.target.value );
    filterCountriesByName(e.target.value);
  };

  return (
    <>
      <div className={`${theme} flex top-filter`}>
        <div className="element  search">
          <div className="text search-icon">
            <FaSearch />
          </div>
          <div className="search-input">
            <input
              className="element text"
              type="search"
              name="inputFilter"
              placeholder="search for a country..."
              onChange={filteringCountries}
            />
          </div>
        </div>
        <div className={theme}>
          <div className="element filter-region">
            <select
              className="element text"
              name="regionFilter"
              onChange={filteringCountries}
            >
              <option className="element text" value="0">
                Filter by region(All)
              </option>
              <option className="element text" value="Africa">
                Africa
              </option>
              <option className="element text" value="Americas">
                America
              </option>
              <option className="element text" value="Asia">
                Asia
              </option>
              <option className="element text" value="Europe">
                Europe
              </option>
              <option className="element text" value="Oceania">
                Oceania
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

{
  /* <table>
              <tbody>
                <tr>
                  <td className="text search-icon">
                    <FaSearch />
                  </td>
                  <td>
                    <input
                      className="element text"
                      type="search"
                      name="inputFilter"
                      placeholder="search for a country..."
                      onChange={filteringCountries}
                    />
                  </td>
                </tr>
              </tbody>
            </table> */
}

import React, { useContext } from "react";
import { CountryContext } from "../context/CountryContextProvider";
import { ThemeProvider } from "../context/ThemeContextProvider";


import Card from "./Card";
import Search from "./Search";

const Main = () => {
  //country context
  const { countries, filteredCountries } = useContext(CountryContext);
  const { theme } = useContext(ThemeProvider);
  console.log(countries);
  return (
    <>
      <div className={theme}>
        <div className="background main-container">
          <div className="main-content">
            <Search />
            <div className="flex country-container">
              {!countries.length ? (
                <h1>Is loading ...</h1>
              ) : filteredCountries.length >= 1 ? (
                filteredCountries.map((item) => (
                  <Card item={item} key={item.name} />
                ))
              ) : (
                countries.map((item) => <Card item={item} key={item.name} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

// {!countries.length ? (
//   <h1>"is Loading..."</h1>
// ) : filteredCountries.length >= 1 ? (
//   <>
//     <div className={theme}>
//       <div className="background main-container">
//         <div className="main-content">
//           <Search />
//           <div className="flex country-container">
//             {filteredCountries?.map((item) => (
//               <Card item={item} key={item.name} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// ) : (
//   <>
//     <div className={theme}>
//       <div className="background main-container">
//         <div className="main-content">
//           <Search />
//           <div className="flex country-container">
//             {countries.map((item) => (
//               <Card item={item} key={item.name} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// )}

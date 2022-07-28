import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import CountryContextProvider from "./context/CountryContextProvider";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import CountryInfo from "./components/CountryInfo";
import Test from "./components/Test";
import ThemeContextProvider from "./context/ThemeContextProvider";
import { FaUserInjured } from "react-icons/fa";
const App = () => {
  return (
    <div>
      <CountryContextProvider>
        <ThemeContextProvider>
          <Header />
          <Routes>
            {/* <Route path="/countryInfo" element={<Header />}> */}
              <Route path="/countryInfo" element={<Main />} />
              <Route path="/countryInfo/:name" element={<CountryInfo />} />
            {/* </Route> */}
            <Route path="/*" element={<Navigate to="/countries" />} />
          </Routes>
        </ThemeContextProvider>
      </CountryContextProvider>
    </div>
  );
};



export default App;

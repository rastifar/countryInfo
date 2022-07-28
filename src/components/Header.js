import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContextProvider";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeProvider);

  return (
    <>
      <div className={theme}>
        <div className='element flex header-container'>
        <span className="text">Where in the world</span>
        <span onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <span className="text">Light Mode</span> : <span className="text"> Dark Mode</span>}
          </span>
          </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;

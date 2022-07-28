import React, { useContext }  from "react";
import { ThemeProvider } from "../context/ThemeContextProvider";


const Test = () => {
    const { theme, setTheme } = useContext(ThemeProvider);
  return (
      <div className={theme }>
          <div className="background">
              <div>
                  <div className="element flex">
                      ksld
                  </div>
              </div>
        <h2 className="text">hi</h2>
      </div>
    </div>
  );
};

export default Test;

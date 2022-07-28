import React, { createContext, useState } from 'react';

export const ThemeProvider = createContext()

const ThemeContextProvider = ({children}) => {
    const[theme,setTheme] = useState('dark')
    return (
        <ThemeProvider.Provider value={{theme,setTheme}}>
            {children}
        </ThemeProvider.Provider>
    );
};

export default ThemeContextProvider;
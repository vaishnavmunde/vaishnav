import { createContext, useState} from "react";

export const ThemeContext = createContext();

function ThemeProvider(props){
    const [theme,setTheme]= useState('light');
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );

}
export default ThemeProvider;
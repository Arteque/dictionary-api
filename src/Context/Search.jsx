import {useState, createContext, useContext } from "react";

const GlobalDataContext = createContext()


export const useGlobalData = () => useContext(GlobalDataContext)

export const GlobalDataProvider = ({children}) => {
    const [globalData, setGlobalData] = useState("Keyboard")


    return (
        <GlobalDataContext.Provider value={{globalData, setGlobalData}}>
            {children}
        </GlobalDataContext.Provider>
    )

}
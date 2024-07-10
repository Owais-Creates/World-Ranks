import { createContext, useContext, useEffect } from "react";
import { fetchCountryData } from '../utils/api';

const CountryContext = createContext();

export const useCountry = () => {
    return useContext(CountryContext);
}

export const CountryProvider = (props) => {

    // useEffect(() => {
    //     fetchCountryData();
    // }, [])

    return (

        <CountryContext.Provider>
            {props.children}
        </CountryContext.Provider>

    )

}

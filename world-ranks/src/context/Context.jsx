import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchCountryData } from '../utils/api';

const CountryContext = createContext();

export const useCountry = () => {
    return useContext(CountryContext);
}

export const CountryProvider = (props) => {

    const [allCountryData, setAllCountryData] = useState([]);
    const [sortedCountries, setSortedCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCountryData(); 
                setAllCountryData(data);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Sort countries by population (descending order) after fetching data
        const sortedData = [...allCountryData].sort((a, b) => b.population - a.population);
        setSortedCountries(sortedData);
    }, [allCountryData]); 

    return (
        <CountryContext.Provider value={{ allCountryData, sortedCountries }}>
            {props.children}
        </CountryContext.Provider>
    );
}

export default CountryProvider;

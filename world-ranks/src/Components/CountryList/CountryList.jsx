import React from 'react';
import './CountryList.css';
import { useCountry } from '../../context/Context';

const CountryList = () => {
    const { allCountryData , sortedCountries } = useCountry();

    return (
        <div className='country-list-container'>
            <table>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Area km <sup>2</sup></th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCountries.slice(0, 10).map((item, index) => (
                        <tr key={index}>
                            <td><img className='all-country-image' src={item.flags?.svg} alt="" /></td>
                            <td>{item.name?.common}</td>
                            <td>{item.population}</td>
                            <td>{item.area}  km<sup>2</sup></td>
                            <td>{item.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CountryList;

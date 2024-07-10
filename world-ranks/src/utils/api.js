
export const fetchCountryData = async () => {

    const data = await fetch('https://restcountries.com/v3.1/all');
    const res = data.json()
    return res;


}
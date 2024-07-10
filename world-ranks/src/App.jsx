import React from 'react';
import Hero from './Components/Hero/Hero';
import CountryList from './Components/CountryList/CountryList';
import Search from './Components/Search/Search';



const App = () => {
  return (

    <div className='main-parent' >
        <Hero />
      <div className='components-div' >
        <Search />
        <CountryList />
      </div>
    </div>

  );
}

export default App;

import React from 'react';
import Country from './Country';
import { useGlobalContext } from '../context';

const Countries = () => {
  const { countries, isLoading, query } = useGlobalContext();

  const filterCountries = ({ filter, type }) => {
    if (type === 'region') {
      if (filter === 'all') {
        return countries;
      }
      return countries.filter(
        (country) => country.region.toLowerCase() === filter
      );
    }

    if (type === 'user' && filter) {
      return countries.filter((country) =>
        country.name.toLowerCase().includes(filter)
      );
    }

    return countries;
  };

  if (isLoading)
    return (
      <div className="msg">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <>
      {filterCountries(query).length > 0 ? (
        <div className=" countries-container">
          {filterCountries(query).map((country, i) => {
            return <Country {...country} key={i} />;
          })}
        </div>
      ) : (
        <div className="msg">
          <h1>Country Not Found...</h1>
        </div>
      )}
    </>
  );
};

export default Countries;

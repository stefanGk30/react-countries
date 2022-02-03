import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Country = ({ name, img, population, region, capital }) => {
  const { formatNumber } = useGlobalContext();
  return (
    <Link to={`/single-country/${name}`} className="country-card">
      <div className="flag-img">
        <img src={img} alt="" />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p className="population">
          Population: <span>{formatNumber(population)}</span>
        </p>
        <p className="region">
          Region: <span>{region}</span>
        </p>
        <p className="capital">
          Capital: <span>{capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default Country;

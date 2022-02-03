import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const CountryInfo = () => {
  const { countries, formatNumber } = useGlobalContext();
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [borders, setBorders] = useState([]);

  const getBorderName = (shortName) => {
    let country = countries.find((c) => c.alpha3Code === shortName);
    return country.name;
  };

  useEffect(() => {
    const newCountry = countries.find((c) => c.name === name);
    setCountry(newCountry);
  }, [countries, name]);

  useEffect(() => {
    if (country && country.borders) {
      setBorders(country.borders.map((item) => getBorderName(item)));
    }
  }, [country]);

  if (!country) {
    return (
      <div className="msg">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    const {
      name: cName,
      img,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
    } = country;

    return (
      <div className="single-wrapper">
        <div className="flag-container">
          <img src={img} alt="" />
        </div>

        <div className="single-info-container">
          <h2>{cName}</h2>
          <div className="info-columns">
            <div className="col-1">
              <p>
                Native Name: <span>{nativeName}</span>
              </p>
              <p>
                Population: <span>{formatNumber(population)}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subregion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div className="col-2">
              <p>
                Top Level Domain: <span>{topLevelDomain}</span>
              </p>
              <p>
                Currencies:
                <span>{currencies[0].name}</span>
              </p>
              <p>
                Languages:{' '}
                {languages.map((lang, index) => {
                  return <span key={index}>{lang.name}</span>;
                })}
              </p>
            </div>
          </div>
          <div className="borders">
            {borders.length > 0 ? (
              borders.map((border, i) => {
                return (
                  <Link
                    key={i}
                    to={`/single-country/${border}`}
                    className="border-link"
                  >
                    {border}
                  </Link>
                );
              })
            ) : (
              <p>none</p>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default CountryInfo;

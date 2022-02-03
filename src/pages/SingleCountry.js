import React from 'react';
import CountryInfo from '../components/CountryInfo';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const SingleCountry = () => {
  const { setTerm, setQuery } = useGlobalContext();

  return (
    <section className="section-center single-container">
      <Link
        to="/"
        className="back-btn"
        onClick={() => {
          setTerm('');
          setQuery({ filter: '', type: '' });
        }}
      >
        Back
      </Link>
      <CountryInfo />
    </section>
  );
};

export default SingleCountry;

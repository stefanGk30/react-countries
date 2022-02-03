import React, { useRef } from 'react';
import { useGlobalContext } from '../context';

const Filters = () => {
  const { term, setTerm, setQuery } = useGlobalContext();
  const selectInput = useRef(null);

  const handleChange = (e) => {
    console.log('changed');
    selectInput.current.value = 'default';
    setTerm(e.target.value);
    setQuery({ filter: e.target.value, type: 'user' });
  };

  return (
    <div className="filters">
      <form className="filters-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="search for a country..."
          value={term}
          onChange={handleChange}
        />

        <select
          defaultValue={'default'}
          onChange={(e) => {
            setTerm('');
            setQuery({ filter: e.target.value, type: 'region' });
          }}
          ref={selectInput}
        >
          <option value={'default'} disabled>
            Filter by Region
          </option>
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

export default Filters;

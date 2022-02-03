import React, { useContext, useState, useEffect } from 'react';
import App from './App';

const AppContext = React.createContext(0);

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const url = 'https://restcountries.com/v2/all';

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState('');
  const [query, setQuery] = useState({ filter: '', type: '' });
  const [dark, setDark] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error(resp.statusText);

      const data = await resp.json();

      const newCountries = data.map((item) => {
        const {
          capital,
          population,
          region,
          subregion,
          topLevelDomain,
          nativeName,
          name,
          currencies,
          borders,
          alpha3Code,
          languages,
          flags: { svg: img },
        } = item;

        return {
          capital,
          population,
          region,
          subregion,
          topLevelDomain,
          nativeName,
          name,
          currencies,
          borders,
          alpha3Code,
          languages,
          img,
        };
      });

      setCountries(newCountries);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        countries,
        formatNumber,
        setCountries,
        isLoading,
        setIsLoading,
        term,
        setTerm,
        dark,
        setDark,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };

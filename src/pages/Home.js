import React from 'react';
import Filters from '../components/Filters';
import Countries from '../components/Countries';

const Home = () => {
  return (
    <section className="section-center main-section">
      <Filters />
      <Countries />
    </section>
  );
};

export default Home;

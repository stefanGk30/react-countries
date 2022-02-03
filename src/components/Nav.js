import React from 'react';
import { useGlobalContext } from '../context';

const Nav = () => {
  const { dark, setDark } = useGlobalContext();
  return (
    <nav>
      <div className="nav-content section-center">
        <h1>Where in the world?</h1>
        <button className="toggle-mode" onClick={() => setDark(!dark)}>
          {dark ? (
            <span className="dark">switch to light </span>
          ) : (
            <span className="light">switch to dark </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;

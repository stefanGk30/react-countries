import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';

// pages
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/single-country/:name"
          children={<SingleCountry />}
        ></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

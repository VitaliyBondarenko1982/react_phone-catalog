import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './utils/vars.scss';
import './App.scss';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Phones } from './components/Phones';
import { Favorites } from './components/Favorites';
import { Cart } from './components/Cart';

const App = () => (
  <div className="container">
    <Header />
    <main className="main-content">
      <Switch>
        <Route
          path="/"
          component={Home}
          exact
        />
        <Route
          path="/phones"
          component={Phones}
          exact
        />
        <Route
          path="/favorites"
          component={Favorites}
          exact
        />
        <Route
          path="/Cart"
          component={Cart}
          exact
        />
      </Switch>
    </main>
  </div>
);

export default App;

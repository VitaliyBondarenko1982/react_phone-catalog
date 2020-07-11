import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './utils/vars.scss';
import './App.scss';
import Loader from 'react-loader-spinner';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Phones } from './components/Phones';
import { Favorites } from './components/Favorites';
import { CartPage } from './components/CartPage';

const PhonePageLazy = lazy(() => import('./components/PhonePage')
  .then(({ PhonePage }) => ({ default: PhonePage })));

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
          component={CartPage}
          exact
        />
        <Suspense fallback={(
          <Loader
            type="TailSpin"
            color="#000"
            height={100}
            width={100}
          />
        )}
        >
          <Switch>
            <Route
              path="/phones/:phoneId"
              component={PhonePageLazy}
              exact
            />
          </Switch>
        </Suspense>
      </Switch>
    </main>
  </div>
);

export default App;

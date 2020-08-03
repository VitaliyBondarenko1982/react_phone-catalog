import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './utils/vars.scss';
import './App.scss';
import Loader from 'react-loader-spinner';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Phones } from './components/Phones';
import { Favourites } from './components/Favourites';
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
          component={HomePage}
          exact
        />
        <Route
          path="/phones"
          component={Phones}
          exact
        />
        <Route
          path="/favourites"
          component={Favourites}
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

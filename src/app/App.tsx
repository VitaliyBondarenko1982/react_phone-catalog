import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

import './App.scss';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

const App = () => (
  <div className="app">
    <Header />
    <Breadcrumbs />
    <div className="app__content">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default App;

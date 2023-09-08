import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

import s from './App.module.scss';

const App = () => (
  <div className={s.container}>
    <Header />
    <Breadcrumbs />
    <div className={s.page}>
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default App;

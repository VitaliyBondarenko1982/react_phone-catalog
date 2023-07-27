import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

import './App.scss';

const App = () => (
  <div className="app">
    <Header />
    <div className="app__content">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default App;

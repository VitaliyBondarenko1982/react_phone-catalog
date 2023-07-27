import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default App;

import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

import './App.scss';

const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default App;

import { Routes, Route } from 'react-router-dom';
import App from '../App';
import {
  Accessories,
  Cart,
  Favorites,
  Home,
  NotFound,
  Phones,
  PhonesDetails,
  Tablets,
} from '../pages';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="phones">
          <Route index element={<Phones />} />
          <Route path=":slug" element={<PhonesDetails />} />
        </Route>
        <Route path="tablets" element={<Tablets />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
        <Route />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
};

export default Root;

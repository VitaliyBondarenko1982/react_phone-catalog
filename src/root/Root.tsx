import { Routes, Route } from 'react-router-dom';
import App from '../app';
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
import { AppRoutes } from '../constants';

const Root = () => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<App />}>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.PHONES}>
          <Route index element={<Phones />} />
          <Route path=":slug" element={<PhonesDetails />} />
        </Route>
        <Route path={AppRoutes.TABLETS} element={<Tablets />} />
        <Route path={AppRoutes.ACCESSORIES} element={<Accessories />} />
        <Route path={AppRoutes.CART} element={<Cart />} />
        <Route path={AppRoutes.FAVORITES} element={<Favorites />} />
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

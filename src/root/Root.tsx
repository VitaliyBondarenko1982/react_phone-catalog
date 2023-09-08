import { Route, Routes } from 'react-router-dom';

import App from '../app';
import { AppRoutes } from '../constants';
import {
  Accessories,
  Cart,
  Favorites,
  Home,
  NotFound,
  PhoneDetails,
  Phones,
  Tablets,
} from '../pages';

const Root = () => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<App />}>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.PHONES}>
          <Route index element={<Phones />} />
          <Route path=":slug" element={<PhoneDetails />} />
        </Route>
        <Route path={AppRoutes.TABLETS} element={<Tablets />} />
        <Route path={AppRoutes.ACCESSORIES} element={<Accessories />} />
        <Route path={AppRoutes.CART} element={<Cart />} />
        <Route path={AppRoutes.FAVORITES} element={<Favorites />} />
        <Route />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Root;

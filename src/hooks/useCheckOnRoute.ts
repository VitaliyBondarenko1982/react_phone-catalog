import { useLocation } from 'react-router-dom';

import { AppRoutes } from '../constants';

type Routes = AppRoutes[] | AppRoutes;
type Options = {
  exact?: boolean;
};

const useCheckOnRoute = (routes: Routes, options: Options = {}): boolean => {
  const { pathname } = useLocation();
  const { exact } = options;

  if (Array.isArray(routes)) {
    return routes.some((route) => {
      return exact ? route === pathname : pathname.includes(route);
    });
  }

  return exact ? routes === pathname : pathname.includes(routes);
};

export default useCheckOnRoute;

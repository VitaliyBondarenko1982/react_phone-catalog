import { Link, useLocation } from 'react-router-dom';

import { Fragment } from 'react';
import { AppRoutes, EXCLUDE_BREADCRUMBS_ROUTES, Icons } from '../../constants';
import { Icon } from '../ui';
import { useCheckOnRoute } from '../../hooks';

import s from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/').filter((c) => !!c);
  const excludeBreadcrumbs = useCheckOnRoute(EXCLUDE_BREADCRUMBS_ROUTES, {
    exact: true,
  });

  if (excludeBreadcrumbs) {
    return null;
  }

  return (
    <div className={s.container}>
      <Link to={AppRoutes.HOME} className={s.item}>
        <Icon iconId={Icons.HOME} />
      </Link>
      <Icon iconId={Icons.ARROW_RIGHT} className={s.item} />
      {crumbs.map((crumb, index) => {
        const link = `/${crumbs.slice(0, index + 1).join('/')}`;
        const title = crumb.split('-').join(' ');

        if (index === crumbs.length - 1) {
          return (
            <span key={crumb} className={s.item}>
              {title}
            </span>
          );
        }

        return (
          <Fragment key={crumb}>
            <Link to={link} className={s.item}>
              {title}
            </Link>
            <Icon iconId={Icons.ARROW_RIGHT} className={s.item} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

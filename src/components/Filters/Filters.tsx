import {
  PAGINATION_OPTIONS,
  ParamsNames,
  SORT_BY_OPTIONS,
} from '../../constants';
import Dropdown from '../Dropdown';

import s from './Filters.module.scss';

const Filters = () => (
  <div className={s.container}>
    <Dropdown
      options={SORT_BY_OPTIONS}
      label="By sort"
      defaultValue="Select sort by"
      paramsName={ParamsNames.SORT}
    />
    <Dropdown
      options={PAGINATION_OPTIONS}
      label="Items on page"
      paramsName={ParamsNames.PER_PAGE}
      defaultValue="All"
    />
  </div>
);

export default Filters;

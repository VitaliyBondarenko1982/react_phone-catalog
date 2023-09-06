import './filters.scss';
import Dropdown from '../Dropdown';
import { PAGINATION_OPTIONS, SORT_BY_OPTIONS } from '../../constants';
import { ParamsNames } from '../../types';

const Filters = () => {
  return (
    <div className="filters">
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
      />
    </div>
  );
};

export default Filters;

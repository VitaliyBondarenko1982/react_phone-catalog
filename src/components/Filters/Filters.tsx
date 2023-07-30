import './filters.scss';
import Dropdown from '../Dropdown';
import { PAGINATION_OPTIONS, SORT_BY_OPTIONS } from '../../constants';

const Filters = () => {
  return (
    <div className="filters">
      <Dropdown options={SORT_BY_OPTIONS} label="By sort" />
      <Dropdown options={PAGINATION_OPTIONS} label="Items on page" />
    </div>
  );
};

export default Filters;

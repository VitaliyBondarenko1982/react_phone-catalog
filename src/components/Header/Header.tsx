import Icon from '../Icon';
import { Icons } from '../../constants';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <Icon iconId={Icons.LOGO} className="header__icon" />
    </div>
  );
};

export default Header;

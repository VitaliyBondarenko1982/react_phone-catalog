import Logo from '../Logo';
import NavBar from '../NavBar';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.container}>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;

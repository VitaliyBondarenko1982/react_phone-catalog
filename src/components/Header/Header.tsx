import Logo from '../Logo';
import NavBar from '../NavBar';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;

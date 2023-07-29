import { Link } from 'react-router-dom';

import Logo from '../Logo';

import './footer.scss';
import { Button, Icon } from '../ui';
import { Icons } from '../../constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo />
        <ul className="footer__list">
          <li className="footer__item">
            <Link
              to="https://www.linkedin.com/in/vitalii-bondarenko-755b001a2/"
              className="footer__link"
            >
              Github
            </Link>
          </li>
          <li className="footer__item">
            <Link
              to="https://www.linkedin.com/in/vitalii-bondarenko-755b001a2/"
              className="footer__link"
            >
              Contacts
            </Link>
          </li>
        </ul>
        <div className="footer__on-top">
          <p className="footer__on-top-text">Back to top</p>
          <Button onClick={scrollToTop} type="secondary">
            <Icon iconId={Icons.ARROW_TOP} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

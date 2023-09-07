import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { Button } from '../ui';
import { Icons } from '../../constants';

import s from './Footer.module.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={s.container}>
      <div className={s.content}>
        <Logo />
        <ul className={s.list}>
          <li className={s.item}>
            <Link
              to="https://www.linkedin.com/in/vitalii-bondarenko-755b001a2/"
              className={s.link}
            >
              Github
            </Link>
          </li>
          <li className={s.item}>
            <Link
              to="https://www.linkedin.com/in/vitalii-bondarenko-755b001a2/"
              className={s.link}
            >
              Contacts
            </Link>
          </li>
        </ul>
        <div className={s.onTop}>
          <p className={s.onTopText}>Back to top</p>
          <Button
            onClick={scrollToTop}
            type="secondary"
            icon={Icons.ARROW_TOP}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

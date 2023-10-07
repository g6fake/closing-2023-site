import styles from './Header.module.scss';
import logo_black from '../../images/logo_black.svg';
// import menu_icon from '../../images/menu_icon.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '../baseComponents/Button';

export function Header() {
  const navigate = useNavigate();
  const element = document.getElementById('root');

  return (
    <header className={styles.header}>
      <span className="logo">
        <Button
          fill="logo"
          onClick={(e) => {
            navigate('/');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}>
          <img src={logo_black} alt="" />
        </Button>
      </span>
      <div className={styles.menu}>
        {/* <Button
          fill="menu"
          onClick={() => {
            navigate('/useful');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}>
          Полезное
        </Button> */}
        {/* <Button
          fill="menu"
          onClick={() => {
            navigate('/program');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}>
          Программа
        </Button> */}
        {/* <Button
          fill="menu"
          onClick={() => {
            navigate('/night');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}>
          Ночная
        </Button> */}
        {/* <Button
          fill="menu"
          onClick={() => {
            navigate('/team');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}>
          Команда
        </Button> */}
      </div>
      {/* <div>
        <img src={menu_icon} alt="" />
      </div> */}
    </header>
  );
}

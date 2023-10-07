import { CSSProperties, ReactElement, ReactNode } from 'react';
import scrollUpImage from '../../images/scroll_up_image.svg';
import styles from './components.module.scss';

export function Button({
  style,
  fill,
  children,
  type,
  className,
  onClick,
}: {
  style?: CSSProperties;
  fill?: 'menu' | 'logo' | 'scrollup';
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}): ReactElement {
  return (
    <button
      style={style}
      type={type}
      className={`${styles.button} ${fill === 'menu' ? styles.menu : ''} ${
        fill === 'scrollup' ? styles.scrollup : ''
      } ${fill === 'logo' ? styles.logo : ''} ${className ? className : ''}`}
      onClick={onClick}>
      {fill === 'scrollup' && <img src={scrollUpImage} alt="" />}
      {children}
    </button>
  );
}

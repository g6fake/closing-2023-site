import { ReactElement } from 'react';
import { Header } from '../components/Header/Header';
import styles from './styles.module.scss';

export function Night(): ReactElement {
  return (
    <div className={styles.team}>
      Маршрут построен таким образом, чтобы лоси не ждали более менедленных ребят, но при этом
      медленные ребята ехали в комфортном для них темпе. Каким образом? Покажем на ночной! Ждём
      тебя!
    </div>
  );
}

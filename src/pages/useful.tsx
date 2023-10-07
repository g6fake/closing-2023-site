import { ReactElement } from 'react';
import styles from './styles.module.scss';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import test from '../images/main_page_img.jpg';
import { NightRouteMap } from '../components/Ymaps/NightRouteMap';
import { DistrictsMap } from '../components/Ymaps/DistrictsMap';

export function Useful(): ReactElement {
  return (
    <div className={styles.useful}>
      <div className={styles.table_of_contents}>
        <div>Районы</div>
        <div>Где поесть</div>
        <div>Уфимско-русский словарь</div>
        <div>Где погулять</div>
      </div>
      <DistrictsMap />
      <NightRouteMap />
      <div className={styles.disctricts}>
        {/* <PhotoProvider>
          <div className="foo">
            <PhotoView src={test}>
              <img src={test} alt="" />
            </PhotoView>
          </div>
        </PhotoProvider> */}
      </div>
      <div className={styles.eat}></div>
      <div className={styles.vocabulary}></div>
      <div className={styles.walk}></div>
    </div>
  );
}

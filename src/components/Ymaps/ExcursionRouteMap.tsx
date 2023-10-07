import {
  YMaps,
  Map,
  ZoomControl,
  FullscreenControl,
  Placemark,
  Polyline,
} from '@pbe/react-yandex-maps';
import { ReactElement } from 'react';

export function ExcursionRouteMap(): ReactElement {
  return (
    <YMaps>
      <Map
        style={{ width: '100vw', height: '80vh', maxHeight: '80vh' }}
        defaultState={{ center: [54.735152, 55.958736], zoom: 12 }}>
        <ZoomControl />
        <FullscreenControl />
        <Polyline geometry={[]} />
      </Map>
    </YMaps>
  );
}

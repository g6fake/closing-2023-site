import { YMaps, Map, ZoomControl, FullscreenControl, Polygon } from '@pbe/react-yandex-maps';
import { ReactElement } from 'react';

export function DistrictsMap(): ReactElement {
  return (
    <YMaps>
      <Map
        style={{ width: '100vw', height: '80vh', maxHeight: '80vh' }}
        defaultState={{ center: [54.735152, 55.958736], zoom: 12 }}>
        <ZoomControl />
        <FullscreenControl />
        {/* Черниковка */}
        <Polygon
          geometry={[
            [
              [54.8121, 56.039547],
              [54.800007, 56.114565],
              [54.802638, 56.143984],
              [54.822055, 56.129975],
              [54.836141, 56.062265],
            ],
          ]}
          options={{
            fillColor: '#00FF00',
            strokeColor: '#0000FF',
            opacity: 0.5,
            strokeWidth: 5,
            strokeStyle: 'shortdash',
          }}
        />
        {/* Сипа */}
        <Polygon
          geometry={[
            [
              [54.786273, 56.073942],
              [54.781157, 56.053094],
              [54.76199, 56.042728],
              [54.758208, 56.046294],
              [54.758208, 56.065713],
              [54.765931, 56.085681],
              [54.774055, 56.087813],
            ],
          ]}
          options={{
            fillColor: '#00FF00',
            strokeColor: '#0000FF',
            opacity: 0.5,
            strokeWidth: 5,
            strokeStyle: 'shortdash',
          }}
        />
      </Map>
    </YMaps>
  );
}

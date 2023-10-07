import {
  YMaps,
  Map,
  ZoomControl,
  FullscreenControl,
  Placemark,
  Polyline,
} from '@pbe/react-yandex-maps';
import { ReactElement } from 'react';
import { defaultMapLocations } from '../../utils/constants';
import { IProgram } from '../../utils/interfaces';

export function ProgramMap(props: IProgram): ReactElement {
  const { id, start, finish, interPoints, route } = props;

  return (
    <div>
      {/* <YMaps> */}
      <Map
        onLoad={(e) => {
          console.log(id, e);
        }}
        style={{
          height: '60vh',
          maxHeight: '60vh',
          boxShadow: '0 0.2rem 0.5rem #0000001a, 0 0 0.05rem',
          width: '100%',
        }}
        defaultState={{
          center: defaultMapLocations[id].center,
          zoom: defaultMapLocations[id].zoom,
        }}
        // options={{ autoFitToViewport: 'ifNull' }}
      >
        <ZoomControl />
        <FullscreenControl />
        {start && (
          <Placemark
            geometry={start.yandexLocation}
            options={{
              preset: 'islands#darkGreenStretchyIcon',
              openBalloonOnClick: true,
              openEmptyBalloon: true,
            }}
            properties={{ iconContent: start.shortName || start.name }}
          />
        )}
        {interPoints &&
          interPoints.map((interPoint) => (
            <Placemark
              geometry={interPoint.yandexLocation}
              options={{ preset: 'islands#darkGreenStretchyIcon', openBalloonOnClick: true }}
              properties={{ iconContent: interPoint.shortName || interPoint.name }}
            />
          ))}
        {finish && (
          <Placemark
            geometry={finish.yandexLocation}
            options={{ preset: 'islands#darkGreenStretchyIcon', openBalloonOnClick: true }}
            properties={{ iconContent: finish.shortName || finish.name }}
          />
        )}
        {route && <Polyline geometry={route} options={{ strokeWidth: 4, strokeColor: '#000' }} />}
      </Map>
      {/* </YMaps> */}
    </div>
  );
}

import { Button } from '../components/baseComponents/Button';
import styles from './styles.module.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
import { GradientBlock } from '../components/GradientBlock';
import { CSSProperties, ReactElement, ReactNode } from 'react';
import { IProgram } from '../utils/interfaces';
import { programs } from '../utils/constants';
import { ProgramMap } from '../components/Ymaps/ProgramMap';
import { YMaps } from '@pbe/react-yandex-maps';
import dGis_logo from '../images/2gis_icon.png';
import yMaps_logo from '../images/y_maps_icon.svg';

function Place({
  name,
  shortName,
  dLink,
  yLink,
  isShort,
}: {
  name: string;
  shortName?: string;
  dLink: string;
  yLink: string;
  isShort?: boolean;
}): ReactElement {
  return (
    <div
      style={
        isShort
          ? {
              display: 'flex',
              alignItems: 'center',
              gap: '0 8px',
            }
          : {
              display: 'flex',
              flexDirection: 'column',
              gap: '8px 0',
            }
      }>
      <div className="naming">
        Где: <span>{name}</span>
        <span>{shortName ? ` (${shortName})` : ''}</span>
      </div>
      <div
        className="navigations"
        style={{ display: 'flex', justifyContent: 'center', gap: '0 8px' }}>
        <a href={dLink} target="_blank" rel="noreferrer">
          <img src={dGis_logo} alt="" width="24px" height="24px" />
        </a>
        <a href={yLink} target="_blank" rel="noreferrer">
          <img src={yMaps_logo} alt="" width="24px" height="24px" />
        </a>
      </div>
    </div>
  );
}

function ProgramShortInfo(
  props: IProgram & { disabledText?: string; newPlace?: IProgram },
): ReactElement {
  const { id, name, date, start, shortDescription, disabledText, newPlace } = props;

  return (
    <div className={`${styles.block} ${disabledText ? styles.disabled : ''}`}>
      {disabledText && <div className={styles.disabled_block}>{disabledText}</div>}
      {!newPlace && (
        <span
          style={{
            fontWeight: 'bold',
            fontSize: '24px',
            textDecoration: newPlace ? 'line-through' : 'none',
          }}>
          {name}
        </span>
      )}
      {newPlace && (
        <span
          style={{
            fontWeight: 'bold',
            fontSize: '24px',
          }}>
          {newPlace.name}
        </span>
      )}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0 8px',
          textDecoration: newPlace ? 'line-through' : 'none',
        }}>
        Когда: <span style={{ fontWeight: 'bold' }}>{date}</span>
      </span>
      {newPlace && (
        <span style={{ display: 'flex', alignItems: 'center', gap: '0 8px' }}>
          Когда: <span style={{ fontWeight: 'bold' }}>{newPlace.date}</span>
        </span>
      )}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0 8px',
          textDecoration: newPlace ? 'line-through' : 'none',
        }}>
        <Place
          name={start.shortName || start.name}
          yLink={start.yandexLink}
          dLink={start.dgisLink}
          isShort
        />
      </span>
      {newPlace && (
        <span style={{ display: 'flex', alignItems: 'center', gap: '0 8px' }}>
          <Place
            name={newPlace.start.shortName || newPlace.start.name}
            yLink={newPlace.start.yandexLink}
            dLink={newPlace.start.dgisLink}
            isShort
          />
        </span>
      )}
      {!newPlace && <span>{shortDescription}</span>}
      {newPlace && <span>{newPlace.shortDescription}</span>}

      <Button style={{ fontSize: '20px', marginTop: '16px', borderRadius: '12px' }}>
        <Link to={!newPlace ? id : newPlace.id} smooth={true} offset={-68} duration={300}>
          Подробнее
        </Link>
      </Button>
    </div>
  );
}

function ProgramBlock(
  props: IProgram & {
    backgroundColor?: string;
    children?: ReactNode;
  },
): ReactElement {
  const {
    id,
    name,
    description,
    date,
    leader,
    temp,
    start,
    interPoints,
    finish,
    backgroundColor,
    children,
  } = props;

  return (
    <div
      id={id}
      style={{
        backgroundColor: backgroundColor || 'transparent',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px 0',
      }}
      className={styles.event_full_info}>
      <h2>{name}</h2>
      <div className={styles.smart_info_block}>
        <span className={styles.head}>Когда:</span>
        <div>{date}</div>
      </div>
      {temp && (
        <div className={styles.smart_info_block}>
          <span className={styles.head}>Темп:</span>
          <div>{temp}</div>
        </div>
      )}
      {leader && (
        <div className={styles.smart_info_block}>
          <span className={styles.head}>Ведёт:</span>
          <div>{leader}</div>
        </div>
      )}
      <div className={styles.smart_info_block}>
        <span className={styles.head}>Место сбора:</span>
        <Place
          name={start.name}
          shortName={start.shortName}
          yLink={start.yandexLink}
          dLink={start.dgisLink}
        />
      </div>
      {interPoints && (
        <div className={styles.smart_info_block}>
          <span className={styles.head}>Остановки:</span>
          <div>
            {interPoints.map((point) => (
              <Place
                name={point.name}
                shortName={point.shortName}
                yLink={point.yandexLink}
                dLink={point.dgisLink}
              />
            ))}
          </div>
        </div>
      )}
      {finish && (
        <div className={styles.smart_info_block}>
          <span className={styles.head}>Место финиша:</span>
          <Place
            name={finish.name}
            shortName={finish.shortName}
            yLink={finish.yandexLink}
            dLink={finish.dgisLink}
          />
        </div>
      )}
      <div className={styles.smart_info_block}>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}

export function Program(): ReactElement {
  return (
    <>
      <div className={styles.program}>
        <GradientBlock
          background="#99CCFF"
          bottomColor="#ff9933"
          className={styles.table_of_contents}>
          <ProgramShortInfo disabledText="Пережито" {...programs['evening']} />
          <ProgramShortInfo disabledText="Пережито" {...programs['night-velo']} />
          <ProgramShortInfo disabledText="Пережито" {...programs['bar']} />
          <ProgramShortInfo disabledText="Пережито" {...programs['excursion']} />
          <ProgramShortInfo disabledText="Пережито" {...programs['night']} />
          <ProgramShortInfo
            disabledText="Проедено"
            {...programs['activity']}
            newPlace={programs['kebabs']}
          />
        </GradientBlock>
        <YMaps>
          <ProgramBlock backgroundColor="#ff9933" {...programs['evening']}>
            <ProgramMap {...programs['evening']} />
          </ProgramBlock>
          <ProgramBlock backgroundColor="#FFCC66" {...programs['night-velo']}>
            <ProgramMap {...programs['night-velo']} />
          </ProgramBlock>
          <ProgramBlock backgroundColor="#ff9933" {...programs['bar']} />
          <ProgramBlock backgroundColor="#FFCC66" {...programs['excursion']}>
            <ProgramMap {...programs['excursion']} />
          </ProgramBlock>
          <ProgramBlock backgroundColor="#ff9933" {...programs['night']}>
            <ProgramMap {...programs['night']} />
          </ProgramBlock>
          {/* <ProgramBlock backgroundColor="#FFCC66" {...programs['activity']} /> */}
          <ProgramBlock backgroundColor="#FFCC66" {...programs['kebabs']} />
        </YMaps>
      </div>
    </>
  );
}

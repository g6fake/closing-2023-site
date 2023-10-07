import { ReactElement } from 'react';
import { Button } from '../components/baseComponents/Button';
import { GradientBlock } from '../components/GradientBlock';
import logo from '../images/main_page_img.jpg';
import styles from './styles.module.scss';

function Block({ title, content }: { title: string; content: string }): ReactElement {
  return (
    <div className={styles.info_block}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export function MainPage(): ReactElement {
  return (
    <div className={styles.main_page}>
      {/* <div className={styles.block_hero}> */}
      <GradientBlock background={logo}>
        <div style={{ padding: '200px 0', zIndex: '3' }}>
          <h1>Уфа - деревня, но не такая, какой ты её представляешь</h1>
          <p>Тут какой-то текст про Уфу и кнопочка по типу "узнать больше"</p>
          <Button>Тык</Button>
        </div>
      </GradientBlock>
      {/* </div> */}
      <div className={styles.brief_info}>
        <Block
          title="4 заезда во всех районах города"
          content="За 2 дня и 3 заезда объедем все катабельные районы Уфы, чтобы тебе было, что рассказать
            знакомым и друзьям и было, с чем сравнить этот город"
        />
        <Block
          title="48 часов уфимских пейзажей"
          content="Подготовили для тебя действительно стоящие места Уфы, а не те заезженные 2 км, по которым экскурсоводы водят туристов"
        />
        <Block
          title="Десятки метров перепада высот"
          content="Уфа построена на семи холмах, горки здесь отменные, перепад высот достигает 150 метров,
          поэтому улыбка и немного адреналина в крови на спусках тебе обеспечены"
        />
        <Block
          title="Понравится и лосям, и колёсообразным помедленнее"
          content="Темп ночной составлен таким образом, чтобы ты получил удовольствие от катания независимо от того, летаешь
          по дорогам быстрее машин или же пугаешь обезумевших прохожих своей адекватностью"
        />
      </div>
      <div id="tt">Краткий план действий (программа) + переходы на них</div>
      {/* Добавить карту с районами + расшифровка названий районов, сделать уфимско-русский словарь мест */}
    </div>
  );
}

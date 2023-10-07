import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/baseComponents/Button';
import { GradientBlock } from '../components/GradientBlock';

export function WillBeSoon(): ReactElement {
  const navigate = useNavigate();
  return (
    <div style={{ height: 'calc(100vh - 68px)' }}>
      <GradientBlock
        background="#99CCFF"
        bottomColor="#ff9933"
        style={{
          textAlign: 'center',
          padding: '10vh 5vw',
        }}>
        <h2>Страница создаётся</h2>
        <p>
          Стараемся как можно скорее закончить эту страницу, чтобы рассказать тебе здесь об
          интересных вещах
        </p>
        <p>А пока ты можешь посмотреть программу, которую мы подготовили на закрытие</p>
        <Button
          onClick={() => {
            navigate('/program');
          }}>
          Программа
        </Button>
      </GradientBlock>
    </div>
  );
}

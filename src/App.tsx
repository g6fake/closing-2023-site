import React, { ReactElement, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage';
import { Program } from './pages/program';
import { Useful } from './pages/useful';
import { Night } from './pages/night';
import { Team } from './pages/team';
import { Header } from './components/Header/Header';
import { Button } from './components/baseComponents/Button';
import { WillBeSoon } from './pages/willBeSoon';

function BtnScrollUp(): ReactElement {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button fill="scrollup" onClick={scrollToTop} style={{ display: visible ? 'flex' : 'none' }} />
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <BtnScrollUp />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                // <MainPage />
                // <WillBeSoon />
                <Program />
              }
            />
            <Route
              path="/useful"
              element={
                // <Useful />
                <WillBeSoon />
              }
            />
            <Route path="/program" element={<Program />} />
            <Route
              path="/night"
              element={
                // <Night />
                <WillBeSoon />
              }
            />
            <Route
              path="/team"
              element={
                // <Team />
                <WillBeSoon />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Text } from './text.svg';
import Clock from './clock.png';
import BannerImg from './banner.png';
import Header from './components/Layout/Header/Header.jsx';
import Nav from './components/Layout/Header/Nav.jsx';
import Footer from './components/Layout/Footer/Footer';
import Banner from './components/Layout/Banner/Banner';
import Index from './components/Layout/Index/Index';
import navData from './store/NavData';
import Hamberger from './menu.svg';
import Close from './close.svg';
import { useState } from 'react';




function App() {
  return (
    <div className='App'>
      {/* 헤더 */}
      <Header Logo={Logo} Text={Text} Hamberger = {Hamberger} navData={navData}/>
      {/* 네비바 */}
      <Nav navData={navData} Close = {Close}/>
      {/* 배너 */}
      <Banner BannerImg={BannerImg} />
      {/* 컨텐츠 */}
      <Index Clock={Clock} navData={navData}/>
      {/* 푸터 */}
      <Footer Logo={Logo} Text={Text} />
    </div>
  );
}

export default App;

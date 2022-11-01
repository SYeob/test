import './App.css';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Text } from './text.svg';
import Header from './components/Layout/Header/Header.jsx';
import Nav from './components/Layout/Header/Nav.jsx';
import Footer from './components/Layout/Footer/Footer';
import navData from './store/NavData';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      {/* 헤더 */}
      <Header Logo={Logo} Text={Text} />
      {/* 네비바 */}
      <Nav navData={navData} />


      {/* 컨텐츠 */}
      <div className='container'>

        {/* 배너 */}
        <div className='banner'>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        
      </div>


      {/* 푸터 */}
       <Footer Logo={Logo} Text={Text}/>
    </div>
  );
}

export default App;

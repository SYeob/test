/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  let navigate = useNavigate();
  let hamberger = useRef(null);

  const onHbgBtn =  () => { 
    hamberger.current.style.left = "0px";
  }

  return (
    <div>
      {/* 헤더 */}
      <header>
        <a
          onClick={() => {
            navigate(props.navData[0].home);
          }}
          className='logo'
        >
          <props.Logo />
          <span />
          <props.Text />
        </a>
        <input type='text' className='searchBar' placeholder='검색어를 입력해 주세요' />
        <a className='loginText' onClick={() => {onHbgBtn();}}>
          <img src={props.Hamberger} alt='menu' ref={hamberger}/>
          <span className='dpNone'>로그인/회원가입</span>
        </a>
      </header>
    </div>
  );
};


export default Header;

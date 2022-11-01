import './Header.css'

const Header = (props) => {
  return (
    <div>
      {/* 헤더 */}
      <header>
        <a href='/#' className='logo'>
          <props.Logo />
          <span />
          <props.Text />
        </a>
        <input type='text' className='searchBar' placeholder='검색어를 입력해 주세요' />
        <a href='/#' className='loginText'>
          로그인/회원가입
        </a>
      </header>
    </div>
  );
};

export default Header;

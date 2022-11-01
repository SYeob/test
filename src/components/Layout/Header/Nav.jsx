/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Nav = (props) => {
  let navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul className='navContent'>
          {props.navData.map(function (a, i) {
            return (
              <li key={i}>
                <a
                  onClick={() => {
                    navigate(props.navData[i].link);
                  }}
                >
                  {props.navData[i].title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

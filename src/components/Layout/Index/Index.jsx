/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './Index.css';
import { useNavigate } from 'react-router-dom';

const Index = (props) => {
  let navigate = useNavigate();

  return (
    <div>
      <div className='container'>
        <div className='flex'>
          <h5>전체상품</h5>
          <a
            onClick={() => {
              navigate(props.navData[0].link);
            }}
          >
            더 보기
          </a>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes4.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex'>
          <h5>전체상품</h5>
          <a href='/#'>더 보기</a>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes4.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex'>
          <h5>전체상품</h5>
          <a href='/#'>더 보기</a>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <img src='https://codingapple1.github.io/shop/shoes4.jpg' />
            <div className='text-wrap'>
              <h5>나이키 신발</h5>
              <p>용인시 기흥구</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>75,000</p>
                  <img src={props.Clock} />
                  <h5>03:30:12 초</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

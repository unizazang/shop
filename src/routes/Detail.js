// import { useParams } from "react-router-dom";

import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import styled from "styled-components";

import  "../App.css";
// css 임포트할때는 뭐뭐 가 아니고 그냥 import App.css

// context API 쓰려면 보관함 import
import { Context1 } from './../App.js';
import { addToCart } from '../store/userSlice.js';
import { useSelector, useDispatch } from "react-redux";

let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;



/* ========== Styled component 사용법 ==============================
  let YellowBtn = styled.button`
    background: yellow;
    color: black;
    padding: 10px;
  ` //백틱으로 써서 그 안에 스타일을 집어넣음

  이걸 변수에 저장해서 내가 원하는데에 갖다 쓸 수 있다.
  스타일이 입혀진 하나의 컴포넌트를 생성하는 문법이기 때문에 대문자로 작명해야 한다

  * props 문법 쓰는법
    let YellowBtn = styled.button`
    background: ${ props => props.bg }; //bg 를 입력할수 있음
  `
  <YellowBtn bg='blue'></YellowBtn>
  <YellowBtn bg='orange'></YellowBtn>

  * 기존 스타일 복사
  let NewBtn = styled.button(YellowBtn)`
    수정할 것들 
  `;

  장점
  1. CSS 안열어도된다
  2. 여기서 짠 스타일은 다른 js 파일에 오염되지 않는다 (리액트가 하나로 합쳐서 다른페이지에 오염될수도 있는데)
      ㄴ CSS 파일 만들때 App.module.css < 이렇게 작명하면 그 App 에만 종속되는 스타일 만들수 있음
  3. 로딩시간이 단축

  단점
  1. JS 파일이 매우더러워짐
  2. style 재사용하려면 export/import해야하는데 그럴거면 CSS 씀
  3. 협업시 CSS 숙련도 이슈

*/





/* ===================== 컴포넌트 생명주기 , useEffect =====================
  컴포넌트 lifecycle
    >장착됨(mount)
    >업데이트됨(update)
    >제거됨(unmount)

  저 때에 내가 간섭(코드실행)가능
  갈고리를 달아서...

  
  옛날에 class 방식으로 컴포넌트 만들때는 
  componentDidMount
  componentDidUpdate
  componentWillUnmount
  이런 함수를 이용할수있었는데

  요즘은 function >> use어쩌고로 시작하는 useEffect


  ☆☆☆☆☆☆☆☆☆☆☆ useEffect ☆☆☆☆☆☆☆☆☆☆☆☆
  
  useEffect(()=>{
    Detail 컴포넌트가 mount, Update 될때 코드 실행해준다. })

  언제쓰냐? 실행시점이 약간 다름.
  
  useEffect (()=>{
    요 안에 적은 코드는 HTML 렌더링이 다 되고 나서 실행된다.
  })
  만약에 복잡한 연산을 해야한다면? - EX. for문을 만번 해.
  js는 위에서부터 차례로 읽기 떄문에 반복문부터 실행하고 HTML이 나중에 렌더링될거임
  => 빠르게 HTML을 못보여주니까,,,

  1. 시간 오래걸리는 어려운 작업들은 이 안에 쓰는게 관습임.
  2. 서버에서 데이터 가져오는 작업 (중요도가 HTML보다 떨어지니까)
  3. 타이머 부착

  Side Effect  : 함수 핵심기능과 상관없는 부가기능.
  에서 따온 함수명
  핵심 기능이 아닌 side effect 코드들 보관함인 셈.

  타이머---
  setTimeout(()=>{
    실행할 코드
    },1000) 




    useEffect 빡통식 정리
    1. 재렌더링마다 실행하고 싶으면 useEffect(()=>{ 이 안에 코드 작성 })
    2. 컴포넌트 로드될때 1회만 코드실행하고 싶으면 
    useEffect(()=>{ 이 안에 코드 작성 },[]) //대괄호

    3. 이 컴포넌트가 삭제될때 딱 한번 코드를 실행하고 싶다
    useEffect(()=>{ return ()=>{ 이 안에 코드 작성
      4. useEffect 실행 전에 뭔가 실행하고 싶을때도 여기 작성
    } 
    },[])

    5. 특정 state 변경시에만 실행하려면 useEffect(()=>{ 이 안에 코드 작성 },[count])
    */



function Detail(props) {
  // let { id } = useParams(); //유저가 URL 파라미터에 입력한 거 가져올 수 있는 훅
  
  let [a,setA] = useState(0);
  
  let [num, setNum] = useState(0);
  let [visible, setVisible] = useState(true);
  // let [tabs, setTabs] = useState([{},{},{}]);

  useEffect(()=>{
    let timer = setTimeout(()=>{
      setVisible(false)
    },2000);

    // num == 1 ? alert('경고 : 숫자만 입력하세요') : null;
    if (num === 1) {
      alert("경고: 숫자만 입력하세요!");
      setNum(0); // 상태를 초기화하여 경고 반복 방지
    }
    console.log(2);
    // 이 안에 리턴을 추가할수 있음 (옵션)
    // 이 return 안의 코드는 useEffect 가 실행되기 전에 실행됨.
    return ()=>{ 
      // 별명 : clean up function
      // 리액트 특성상 재랜더링이 좀 잦은데 타이머가 예상치않게 100개 1000개 생성되고 성능에 영향을 줄 수도 있음
      // 기존 타이머는 제거해주세요~ 하는 코드를 써야함
      // 그런 식으로 기존 코드를 치우는 걸 여기서 많이 작성함
      // 참고 ) clean up function은 mount 시엔 실행되지 않고 특이하게 unmount 될때는 실행된다.

      console.log(1);
      clearTimeout(timer);
    
      }

    // + useEffect를 서버랑 데이터 가져올때도 많이 쓰는데 그걸 가져오는동안 재랜더링이 되어버리면
    // 요청하는코드가 계속 계속 계속 다시가서 100개 돼버릴수도 있다
    // 기존 데이터 요청은 제거해 주세요~ 라고 써놓으면 기존 데이터랑 충돌 없이 가능


    console.log('변수 변함');

  },[a, num]); //<- [] 이거 있으면 더 정확했음

// 만약에 이걸 그냥 [] 이렇게 비워둔 채로 넣어두면 mount 때만 실행되고 update 될 때는 실행안하게 할 수 있음
// 딱 마운트때 1회만 실행하려면 이렇게...



  /*  ================ Dependency ===================
  
 useEffect(()=>{

   },[count, alert, a]);
    이 안에다가 변수나 state 같은거를 몇개고 집어넣을 수 있다.
    여기에 state나 변수를 집어넣으면 mount, update될 때마다 실행

  - > 근데 dependency 추가하면 이 안에있는 변수가 변할 때 만!!! 실행함.
  맨날 업데이트 될때마다 실행되는게 아니라 count 라는 변수가 변할 때만 코드 실행되는 것
  이거 있어도 맨 처음에 컴포넌트 로드될땐 한번 실행하고 지나감


  
  */

  let cartState = useSelector((state) => state);
  let dispatch = useDispatch();

  let [count, setCount] = useState(0);
  let [activeTab, setActiveTab] = useState(0);
  let tabContent = ['탭1내용','탭2내용','탭3내용','탭4내용'];



  let { id } = useParams();
  let foundProduct = props.shoes.find((product) => {
    return product.id === parseInt(id);
  });
  console.log(cartState);

  let [fade2, setFade2] = useState('');
  useEffect(()=>{
    let newTimer = setTimeout(()=>{ setFade2('end'); }, 1000);
    return () => { 
      setFade2(' white');
      clearTimeout(newTimer);
    }
  } , [])
  

  let {stock} = useContext(Context1); // 보관함 해체해주는 함수
  // 이 자리에 object 형식으로 나옴 { 1, 2, 3, 4 }

  /* 오늘의 응용 =====================
    /detail/0 접속시 0번째 상품이 아니라(정렬시 이상해짐)
    상품id가 0인 걸 보여주면 좋을 듯.
  */
  return foundProduct ? (
    <div className={"product-detail "+ fade2}>
      {
        visible == true ? 
        <div className="sale-alert">
          🎉 2초 이내 구매시 할인
        </div> 
        : null
      }
      
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            className="product-image"
            alt={foundProduct.title}
          />
        </div>
        <div className="col-md-6">
          <div className="product-info">
            <h4 className="product-title">{foundProduct.title}</h4>
            <p className="product-content">{foundProduct.content}</p>
            <p className="product-price">{foundProduct.price.toLocaleString()}원</p>
            <button 
              className="order-button"
              onClick={()=>{
                dispatch(addToCart(foundProduct));
                console.log(cartState);
              }}
            >
              장바구니에 담기
            </button>
          </div>
        </div>
      </div>

      <div className="tab-container">
        <Nav variant="tabs" defaultActiveKey="link0">
          {[0,1,2,3].map((i)=>{
            return <CustomTab key={i} i={i} btnIdx={i+1} activeTab={activeTab} setActiveTab={setActiveTab} />
          })}
        </Nav>

        <div className="tab-content">
          <TabContent activeTab={activeTab} product={foundProduct} />
        </div>
      </div>
    </div>
  ) : (
    <div className="container text-center py-5">
      <h3>상품을 찾을 수 없습니다.</h3>
      <p>요청하신 상품이 존재하지 않거나 삭제되었을 수 있습니다.</p>
    </div>
  );
}

function CustomTab(props){
  return(
    <Nav.Item>
      <Nav.Link eventKey={`link${props.i}`}
      onClick={()=>{
        props.setActiveTab(props.i);
      }}
      >
      {
        props.i === 0 ? '상품정보' :
        props.i === 1 ? '상세이미지' :
        props.i === 2 ? '배송/교환/반품' :
        '상품후기'
      }
      </Nav.Link>
    </Nav.Item>
  )
}

function TabContent({activeTab, product}){
  let [fade, setFade] = useState('');

  useEffect(()=>{
    // 리액트 18버전 automatic batching 때문에 시간차 약간 줘야함
    let timer = setTimeout(()=>{ setFade('end') }, 100);
    return ()=>{
      clearTimeout(timer);
      setFade('');
    }
  }, [activeTab]);

  const renderContent = () => {
    switch(activeTab) {
      case 0:
        return (
          <div className="product-details">
            <h3>제품 특징</h3>
            <ul>
              <li>프리미엄 가죽 소재 사용</li>
              <li>편안한 착화감을 위한 쿠션 인솔</li>
              <li>내구성이 뛰어난 고무 아웃솔</li>
              <li>다양한 스타일링이 가능한 디자인</li>
            </ul>
            <h3>소재</h3>
            <p>겉감: 천연가죽 100%<br/>안감: 면 100%<br/>창: 고무</p>
          </div>
        );
      case 1:
        return (
          <div className="product-images">
            <div className="row">
              <div className="col-md-12 mb-4">
                <img 
                  src="https://codingapple1.github.io/shop/shoes1.jpg" 
                  className="img-fluid detail-image" 
                  alt="상품 상세 이미지"
                />
              </div>
              <div className="col-md-6 mb-4">
                <img 
                  src="https://codingapple1.github.io/shop/shoes2.jpg" 
                  className="img-fluid detail-image" 
                  alt="상품 착용 이미지"
                />
              </div>
              <div className="col-md-6 mb-4">
                <img 
                  src="https://codingapple1.github.io/shop/shoes3.jpg" 
                  className="img-fluid detail-image" 
                  alt="상품 착용 이미지"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="shipping-info">
            <h3>배송 안내</h3>
            <p>- 배송비: 3,000원 (50,000원 이상 구매 시 무료배송)<br/>
               - 배송방법: CJ대한통운<br/>
               - 평균 배송기간: 2-3일 (주말/공휴일 제외)</p>
            
            <h3>교환/반품 안내</h3>
            <p>- 교환/반품 기간: 상품 수령 후 7일 이내<br/>
               - 교환/반품 배송비: 6,000원 (왕복)<br/>
               - 교환/반품 불가 사유: 착용한 상품, 포장 훼손, 세탁한 상품</p>
          </div>
        );
      case 3:
        return (
          <div className="reviews">
            <div className="review-item">
              <div className="review-header">
                <span className="reviewer">김**</span>
                <span className="rating">★★★★★</span>
                <span className="date">2025.02.07</span>
              </div>
              <p className="review-content">정말 편하고 디자인도 예뻐요! 사이즈도 딱 맞습니다.</p>
            </div>
            <div className="review-item">
              <div className="review-header">
                <span className="reviewer">이**</span>
                <span className="rating">★★★★☆</span>
                <span className="date">2025.02.06</span>
              </div>
              <p className="review-content">배송이 빠르고 품질도 좋네요. 다만 생각보다 조금 작은 느낌이에요.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={'start ' + fade}>
      {renderContent()}
    </div>
  )
}

export default Detail;

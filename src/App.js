/* eslint-disable */
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// import 작명 from '이미지 경로';

// import 작명 from "./data.js";
// 중괄호로 export 했었으니까 import 할때도 {a, b} 이렇게 중괄호로 받아야 함.
// + ☆☆☆☆☆여기서는 자유롭게 작명이 안되고 export 했던 변수명 똑같이 써야 함.☆☆☆☆☆
// 참고 : 함수도 export 가능 > 컴포넌트 코드가 너무 길다 > 그러면 import 해서 쓸수도 있음

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// public/index.html에서 넣어도 됨
// public 폴더 안에 이미지 보관 가능.
// 참고 : public 폴더 안에 있는 거는 압축이 안됨. 온전히 그대로 보존됨. 그러니까 /이미지경로 이렇게... 쓰면됨
// public폴더 사용시 주의점 : 서브경로(.com/aaaa/) < 에서 문제가 됨 > create-react-app 에서
// 현재경로를 다 가져와주는거 > {process.env.PUBLIC_URL + '/logo.png'} < 이게 public폴더 이미지 쓰는 권장 방식

import data from "./data.js";
import Detail from "./Detail.js";

function App() {
  let [shoes] = useState(data);
  // 너무 기니까 다른파일로 뺄수있음 > export, import 해야함
  // 이 변수는 함수 안에넣어야함!!!!!!!!!!!!!!☆☆☆☆☆

  // use어쩌구 ~ > Hook임.
  let navigate = useNavigate(); //이 안에는 페이지 이동을 도와주는 함수 하나가 들어있습니다. 이걸 변수에 저장해서 씀

  return (
    <div className="App">
      {/* 갖다 쓰려면 component 를 import 해야함 */}
      <Navbar bg="dark" data-bs-theme="dark" className="nav">
        <Container>
          <Navbar.Brand href="#home">C Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
                // 여기 입력한 경로로 이동시켜줌
                // navigate(1) > 앞으로 한 페이지 이동해주세요
                // navigate(-1) > 뒤로 한 페이지 이동해주세요 (뒤로가기)
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
                // 여기 입력한 경로로 이동시켜줌
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈으로</Link>
      <Link to="/detail">상세페이지로</Link>
      {/* 페이지 이동버튼은 <Link></Link>
to = 경로 */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div class="container ">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Product index={i} shoes={shoes} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
        {/* Detail로 그냥 import했을때 <Detail /> 이렇게 넣기 가능!!!!
        
        어? 왜지? 내가 Detail 로 쓰면 되는데 <Detail />은 오류가 뜬다. */}
        {/* 이게 페이지임, path="경로"
        이 detail 로 접속했을 때 보여줄 html을 element에 씀
        메인페이지로 접속했을때 : path="/"
        */}

        <Route path="*" element={<div>없는페이지요</div>} />
        {/* path="*" < 위에 만들어놓은 라우트 외에 모든것. */}

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>

        {/* 경로 뒤에 슬래시 몇개인건 전혀 상관이 없음 */}
      </Routes>
      {/* ============ Nested Route ===============

        /about 뿐 아니라 /about/member /about/location  이런식으로... 만들고 싶을때

        <Route path="/about" element={<About />} />
        <Route path="/about/member" element={<About />} />
        <Route path="/about/location" element={<About />} /> 이렇게 해도 되지만

        장점 > nested route 접속하면 element 2개 보임
        <Route path="/about" element={<About1 />}>
          <Route path="member" element={<About2  />} /> 이거 두개가 다 보임

          근데 nested route는 이 어바웃의 어디에 보여줄건지를 작성을 해줘야 보인다. 위애꺼 내부에 보여주기 때문에...(부모 안에다가 보여줌)
          About 안에 작성
          > 아웃렛이라고 작성 - nested route 안에 있는걸 보여줄 자리. 그 컴포넌트 안에 넣어놔야함


          이거 언제씀?
          > 여러 유사한 페이지가 필요할 때

          
*/}
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Product(props) {
  // let imgcpy = [...이미지];

  // let cpy = [...props.shoes];
  // console.log(cpy);
  return (
    <div class="col-md-4">
      <img src={props.shoes[props.index].img} width="80%" />
      <h4>{props.shoes[props.index].title}</h4>
      <p>{props.shoes[props.index].price}</p>
    </div>
  );
}
/* 답...=======================
  똑같은 컴포넌트인데 내용을 다르게 보여주고 싶으면 props를 이용하면 된다!!!
  각각 다른 내용의 props로 전송해주면 되는거.

  <Product shoes={shoes[0]}>
  <Product shoes={shoes[1]}>
  <Product shoes={shoes[2]}>
  이렇게 해줘도 됨.

  >> 이러면 각각 shoes에는 각 자리의 슈즈가 들어있으니까
  불러서 쓸때는 props.shoes.title 이렇게만 해도 됨

  img는 링크가 shoes1 shoes2 shoes3 이었으니까

  <Product shoes={shoes[0]} i={1}/> 이렇게 보내고
  <img src={'https://codingapple1.github.io/shop/shoes'+props.i+'.jpg'} width="80%" />
  이렇게 출력해도 됨.

  >>> 이렇게 하면 map을 이렇게

  shoes.map((a, i)=>{
    return(
      <Product shoes={shoes[0]} i={i}/> 
    )
    })

    i = 0 1 2 ... 이렇게 가는데 우리가 필요한건 1 2 3 ... 이니까

    function() Card(props){
    <img src={'https:/~~'+(props.i+1) <<< 여기서 i+1로 해줬음.
    }
*/
export default App;

/* ================== 라우트 ====================
react는 SPA라서 html파일을 하나밖에 사용을 안함 (index.html)

 > 리액트 사용 안한 경우
  ㄴ html파일을 만들어서 상세페이지 내용을 채움
  ㄴ 누가 /detail로 접속하면 detail.html을 보여줌
 
  > 리액트 사용한 경우 ☆ 
  ㄴ detail 컴포넌트를 만들어서 상세페이지 내용을 채움
  ㄴ 누가 /detail로 접속하면 기존 html을 싹 비우고 detail 컴포넌트를 보여줌
  (이걸 코드로 짤 수 있지만 길어지고 귀찮으니 일반적으로 react-router-dom이라는 라이브러리를 쓴다)
  (페이지 구분 - routing)
    ㄴ index.js에 가서 <App/>을 <BrowserRouter>컴포넌트로 감싸면 끝.


    > Routes, Route
    - Route가 페이지임


    Router 장점
    1. 뒤로가기 버튼 만들수있음
    2. 페이지 이동이 쉬움 (UI 스위치 조작이 쉬움)

*/

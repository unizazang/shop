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

function Appex() {
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

      {/* <Link to="/">홈으로</Link>
      <Link to="/detail">상세페이지로</Link> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div class="container ">
                <div className="row">
                  {/* <Product shoes={shoes} img={이미지} /> */}
                  {shoes.map((a, i) => {
                    return <Product index={i} shoes={shoes} />;
                  })}
                </div>
              </div>
            </>
          }
        ></Route>
        <Route path="/detail" element={<div>서ㅏㅇ세페이지임</div>}>
          상세페이징로
        </Route>
        <Route path="/about" element={<div>어바웃페이지임</div>}>
          <Route path="member">멤버임</Route>
          <Route path="location">location</Route>
        </Route>
      </Routes>
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
export default Appex;

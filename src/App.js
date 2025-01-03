/* eslint-disable */
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";

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

function App() {
  let [shoes] = useState(data);
  // 너무 기니까 다른파일로 뺄수있음 > export, import 해야함
  // 이 변수는 함수 안에넣어야함!!!!!!!!!!!!!!☆☆☆☆☆

  return (
    <div className="App">
      {/* 갖다 쓰려면 component 를 import 해야함 */}
      <Navbar bg="dark" data-bs-theme="dark" className="nav">
        <Container>
          <Navbar.Brand href="#home">C Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      {/* <Container>
        <Row>
          <Col md="4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md="4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md="4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container> */}
      <div class="container ">
        <div className="row">
          {/* <Product shoes={shoes} img={이미지} /> */}
          {shoes.map((a, i) => {
            return (
              // <div class="col-md-4">
              //   <img src={shoes[i].img} width="80%" />
              //   <h4>{shoes[i].title}</h4>
              //   <p>{shoes[i].price}</p>
              // </div>
              <Product index={i} shoes={shoes} />
            );
          })}
        </div>
      </div>
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



*/

/* eslint-disable */
import { Button, Navbar, Container, Nav } from "react-bootstrap";

import logo from "./logo.svg";

// import 작명 from '이미지 경로';

import bg from "./img/캡처3.PNG";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// public/index.html에서 넣어도 됨

function App() {
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
    </div>
  );
}

export default App;

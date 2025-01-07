// import { useParams } from "react-router-dom";

import { useParams } from "react-router-dom";
import styled from "styled-components";

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

function Detail(props) {
  // let { id } = useParams(); //유저가 URL 파라미터에 입력한 거 가져올 수 있는 훅

  let { id } = useParams();
  let foundProduct = props.shoes.find((product) => {
    return product.id === parseInt(id);
  });
  console.log(foundProduct);

  /* 오늘의 응용 =====================
    /detail/0 접속시 0번째 상품이 아니라(정렬시 이상해짐)
    상품id가 0인 걸 보여주면 좋을 듯.
  */
  return foundProduct ? (
    <div className="container">
      <YellowBtn>버튼</YellowBtn>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{foundProduct.title}</h4>
          <p>{foundProduct.content}</p>
          <p>{foundProduct.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  ) : (
    <div>상품을 찾을 수 없ㅅ브니다.</div>
  );
}

export default Detail;

/* ===================== 컴포넌트 생명주기 =====================
  컴포넌트 lifecycle
    >장착됨(mount)
    >업데이트됨(update)
    >제거됨(unmount)

  저 
*/
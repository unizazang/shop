import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams(); //유저가 URL 파라미터에 입력한 거 가져올 수 있는 훅

  /* 오늘의 응용 =====================
    /detail/0 접속시 0번째 상품이 아니라(정렬시 이상해짐)
    상품id가 0인 걸 보여주면 좋을 듯.
  */
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;

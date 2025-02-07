import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeAge, increaseCount, decreaseCount } from "../store/userSlice.js";

function Cart() {
  // redux store에 보관한 변수 꺼내쓰기 -----------------------

  let state = useSelector((state) => {
    return state;
  }); // 가져와주는 함수
  // 이 안에는 store 에 있던 모든 state가 들어있다

  let dispatch = useDispatch();
  //  store.js 한테 요청 보내주는 함수

  // console.log(state[1]);
  console.log(state.user);
  console.log(state.user.age);

  /* --------------------- useSelector 사용 팁 ----------------------- 
    useSelector((state)=>{return state}) <- 여기에는 store 안에있는 모든 state를 뜻하기 때문에
    어떤 state를 가져오고 싶은지 여기에 써줄수 있다!!
    let userState = useSelector((state)=>{return state.user})
    이런 식으로 딱 가져오고 싶은 state만 따로 변수에 담을 수가 있음.
    
    당연하지만 중괄호 return 생략해도 됨
    useSelector(state => state.stock) 
    
    */

  let cart = useSelector((state) => state.cart);

  // 장바구니 총액 계산
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.count), 0);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>장바구니</h2>
        <p className="cart-user">
          {state.user.name}님의 장바구니
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>장바구니가 비어있습니다.</p>
          <button className="shopping-button">쇼핑 계속하기</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, i) => (
              <div className="cart-item" key={i}>
                <div className="item-image">
                  <img 
                    src="https://codingapple1.github.io/shop/shoes1.jpg" 
                    alt={item.name}
                  />
                </div>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p className="item-price">{item.price.toLocaleString()}원</p>
                </div>
                <div className="item-quantity">
                  <button 
                    className="quantity-btn" 
                    onClick={() => {
                      dispatch(decreaseCount(item.id));
                    }}
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => {
                      dispatch(increaseCount(item.id));
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  {(item.price * item.count).toLocaleString()}원
                </div>
                <button className="remove-btn">
                  <span>×</span>
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-item">
              <span>총 상품금액</span>
              <span>{calculateTotal().toLocaleString()}원</span>
            </div>
            <div className="summary-item">
              <span>배송비</span>
              <span>{calculateTotal() >= 50000 ? '무료' : '3,000원'}</span>
            </div>
            <div className="summary-total">
              <span>결제예정금액</span>
              <span>
                {(calculateTotal() + (calculateTotal() >= 50000 ? 0 : 3000)).toLocaleString()}원
              </span>
            </div>
            <button className="checkout-button">
              주문하기
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

// tr - 가로줄
// th / td - 세로줄

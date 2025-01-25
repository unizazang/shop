import {Table} from "react-bootstrap";
import { useSelector , useDispatch } from "react-redux";
import { changeName , changeAge } from "./../store.js";

function Cart(){

  // redux store에 보관한 변수 꺼내쓰기 -----------------------

 let state = useSelector((state)=>{return state}) // 가져와주는 함수
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

    let cart = useSelector((state) => state.cart)

    return (
        <div>

          <h1>{state.user.name} {state.user.age} 의 장바구니</h1>
          <button onClick={()=>{
            // state.user.age = 30;
            dispatch(changeAge(100));
            // dispatch(()=>{ state.user.age ++ })
            // dispatch() 안에 익명함수를 쓸 수 없음,
            // reducers : 안에다가 쓰더라도 익명함수를 쓸 수 없음 : reducer함수여야 하기 때문
          }}> 버튼 </button>
           <Table>
            <thead>
              <tr> 
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((_, i)=>{
                  return (
                    <tr key={i}> 
                    {/* key 속성은 여기 tr에 */}
                      <td>{cart[i].id}</td>
                      <td>{cart[i].name}</td>
                      <td>{cart[i].count}</td>
                      <td><button onClick={()=>{
                          dispatch(changeName())
                      }}> + </button></td>
                    </tr>
                  )
                })
              }
            </tbody>
                {/* <tr> 
                  <th>{cart[0].id}</th>
                  <th>{cart[0].name}</th>
                  <th>{cart[0].count}</th>
                  <th>변경하기</th>
                </tr>

                <tr>
                  <td>{cart[1].id}</td>
                  <td>{cart[1].name}</td>
                  <td>{cart[1].count}</td>
                  <td>변경하기</td>
                </tr> */}

            </Table>  
        </div>
    )
}

export default Cart;

// tr - 가로줄
// th / td - 세로줄

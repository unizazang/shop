import {Table} from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart(){

  // redux store에 보관한 변수 꺼내쓰기 -----------------------

 let state = useSelector((state)=>{return state.stock}) // 가져와주는 함수
    // 이 안에는 store 에 있던 모든 state가 들어있다
    console.log(state[1]);

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
           <Table>
              {
                cart.map((_, i)=>{
                  return (
                    <tr> 
                      <th>{cart[i].id}</th>
                      <th>{cart[i].name}</th>
                      <th>{cart[i].count}</th>
                      <th>변경하기</th>
                    </tr>
                  )
                })
              }
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

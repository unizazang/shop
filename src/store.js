// redux 쓰면 State 보관하는 통이 하나 필요함 > 그걸 store 라고 많이 부름
// redux 세팅법
// 1. 하단 코드 복붙
// 2. index.js 가서 <Provider store={store}> 라는 걸로 App 감싸기
// -> 그럼 App 과 그 자식 컴포넌트들은 다 store.js에 있는 state 사용 가능.

// 근데 store에다가 모든 state를 보관할 필요는 없다!!!!! 공유 안하는 거는 필요한 데만 useState()로 만들어서 쓰면 됨...

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";
import cart from "./store/userSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    // state를 만들었다고 끝이아니고 이 안에 ★★등록★★해야 사용이 가능!!!
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
// 객체로 들어있으니까 안에서 콤마로 구분

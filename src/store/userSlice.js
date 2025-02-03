import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  // 초기값을 여기 넣는 거임

  reducers: {
    increaseCount(state, action) {
      // 파라미터는 보통 action이라고 작명한다

      let idx = state.findIndex( (item ) => item.id === action.payload);
      if(idx !== -1){
        state[idx].count += 1;
      }
      /* 이렇게 써서 틀림;;
      let idx = state.findIndex( (item) => item.id === actions.id);
      if(idx !== -1){
        state[id].count++;
      }
      */
    },
    addToCart(state,action){
      state.push(action.payload);
    }
  }
});

// state 만드는 법 - 이거 state 하나를 slice 라고 부른다
// createSlice()는 useState()랑 비슷한 용도
let user = createSlice({
  name: "user", // state 이름
  initialState: { name: "kim", age: 20 }, //state 값
  reducers: {
    changeName(state, i) {
      // return { name : 'park' , age: 20}
      // return 하고 새로운 값을 넣어주면 이 값으로 기존 state를 갈아치워 준다.
      // 여기서 기존 state 의 값이 필요한 경우 파라미터 하나 추가
      //   state.name = "park";
      // 배열이나 오브젝트는 return 안쓰고 직접 변경해도 봐준다(immer.js 도움)
      // 그래서 하나짜리 문자열도 그냥 객체 안에 담기도 함 (그래야 수정하기 편하니까)
      // cart[i].id = cart[i].id + 1;
    },
    changeAge(state, a) {
      state.age += a.payload;
    },

    // state 변경함수에 파라미터 뚫는 법
    // 정확히 하려면 payload 라고 써 줘야 파라미터자리에 들어있던 숫자가 들어온다.
    // 파라미터를 작명할때 주로 action이라고 많이들 작명하는데
    // 이 화물(payload) 뿐만 아니라 이 action에 대한 여러가지 정보들도 들어있기 때문
    // action이 뭐임? : 이 state 변경함수들을 전부 action 이라고 함
  },

  /* store에 들어있는 state 수정하기 --------------
  1. state 만든 데 가서 수정하는 함수 만들기
  2. 만든 함수를 export 해줘야함
    export 할때 
    changeName(state){
      return 'john ' + state  << 요 상태로는 export가 안 되니까
    },

    user.actions < 하면 reducers : { 여기 있는 애들이 남는다 }

    변수 선언하고 내보내야 되는데 관습적으로 이렇게 씀
    export 하고싶은 함수명들을 이렇게 다 적어줌
    export let { changeName , func1 , func2 } = user.actions 이런 식으로 쓴다

    이것도 destructuring 문법임
    오른쪽에 있는 자료를 변수로 빼는 거

    3. 만든 함수를 import해서 사용한다
    import 하고나서 useDispatch() 라는 함수도 필요함
    변수에 저장해서 쓴다

    let dispatch = useDispatch();
    dispatch( state 변경함수 () ) < 이렇게 사용해야함



    store.js 에 수정함수 만들고
    컴포넌트가 필요하면 store.js에 
    ㄴ 수정함수 좀 실행해주세요 ~~ 함
    그래서 dispatch로 실행해달라고 메세지를 보낸다.
    실제 함수 실행은 store.js 가 해준다

    왜이렇게하는거야?
    ㄴ 모든 컴포넌트들이 store.js에 있는 state 를 맘대로 갖다 쓰면 어디서 버그가 났는지 찾기가 너무 힘들다 (모든 컴포넌트를 다 뒤져봐야 함)
    그래서 store.js에 있는 수정함수에 부탁하는 식으로 하면 훨씬 버그 추적이 쉽다.
    store.js만 뒤지면 되니까

    */
});

export {user, cart };

export let { changeName, changeAge } = user.actions;
// 이 안에 객체 로 넣어야함!!!

export let { increaseCount, addToCart } = cart.actions;

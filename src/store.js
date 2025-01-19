// redux 쓰면 State 보관하는 통이 하나 필요함 > 그걸 store 라고 많이 부름
// redux 세팅법
// 1. 하단 코드 복붙
// 2. index.js 가서 <Provider store={store}> 라는 걸로 App 감싸기
// -> 그럼 App 과 그 자식 컴포넌트들은 다 store.js에 있는 state 사용 가능.

// 근데 store에다가 모든 state를 보관할 필요는 없다!!!!! 공유 안하는 거는 필요한 데만 useState()로 만들어서 쓰면 됨...


import { configureStore , createSlice } from '@reduxjs/toolkit'


// state 만드는 법 - 이거 state 하나를 slice 라고 부른다
// createSlice()는 useState()랑 비슷한 용도
let user = createSlice({
  name : 'user' , // state 이름
  initialState : 'kim', //state 값
  reducers : {
    changeName(state){
      return 'john ' + state 
      // return 하고 새로운 값을 넣어주면 이 값으로 기존 state를 갈아치워 준다.
      // 여기서 기존 state 의 값이 필요한 경우 파라미터 하나 추가
    },
    function(){

    }

  }

  

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

    3. 만든 함수를 import한다
*/

});  

export let { changeName } = user.actions;
// 이 안에 객체 로 넣어야함!!!

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
  // 초기값을 여기 넣는 거임

})

export default configureStore({
  reducer: {
  // state를 만들었다고 끝이아니고 이 안에 ★★등록★★해야 사용이 가능!!!
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer,
   }
}) 
// 객체로 들어있으니까 안에서 콤마로 구분
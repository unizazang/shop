// redux 쓰면 State 보관하는 통이 하나 필요함 > 그걸 store 라고 많이 부름
// redux 세팅법
// 1. 하단 코드 복붙
// 2. index.js 가서 <Provider store={store}> 라는 걸로 App 감싸기
// -> 그럼 App 과 그 자식 컴포넌트들은 다 store.js에 있는 state 사용 가능.

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { }
}) 
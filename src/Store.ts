import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers/RootReducer";


// Redux 중앙 집중식 상태 저장소
const store= configureStore({
    reducer: rootReducer,
})

export default store;
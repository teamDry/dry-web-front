import { Store, applyMiddleware, configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from "./reducers/RootReducer";


const store= configureStore({
    reducer: rootReducer,
})

export default store;
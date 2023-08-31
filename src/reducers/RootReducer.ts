import { combineReducers } from "redux";
import AdminLoginReducer, { LoginState } from "./AdminReducer";

export interface RootState {
    adminLogin: LoginState;
}

const rootReducer = combineReducers({
    adminLogin: AdminLoginReducer
});

export default rootReducer;
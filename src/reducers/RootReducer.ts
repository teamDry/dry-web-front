import { combineReducers } from "redux";
import AdminLoginReducer, { LoginState } from "./Admins/AdminLoginReducer";
import InputReducer, { InputState } from "./Admins/InputReducer";
import { SignUpState } from "./Admins/AdminSignUpReducer";
import AdminSignUpReducer from "./Admins/AdminSignUpReducer";

// combineReducer로 통합된 Reducer들이 사용하는 객체 타입과 이름 정의
// 상태를 가져올 때 사용될 이름임
export interface RootState {
    adminLogin: LoginState,
    inputData: InputState,
    adminSignUp: SignUpState
}

// 여러 Reducer을 하나로 합쳐주는 Reducer
const rootReducer = combineReducers({
    adminLogin: AdminLoginReducer,
    inputData: InputReducer,
    adminSignUp: AdminSignUpReducer
});

export default rootReducer;
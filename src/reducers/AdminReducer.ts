import { produce } from "immer";
import { Admin, IdAndPassword, LoginAction } from "../actions/admins/Actions";
import { ActionTypes } from "../actions/admins/ActionTypes";

// Login과 관련된 상태 정의
export interface LoginState {
    admin: Admin | null;
    isLoginFailed: boolean;
    idAndPassword: IdAndPassword | null;
    id: string | null;
    password: string | null;
    alertText: string;
}

// 초기값
export const initialState: LoginState = {
    admin: null,
    isLoginFailed: false,
    idAndPassword: null,
    id: null,
    password: null,
    alertText: ""
}

// 액션 타입 받아서, 액션에 따라 상태 변경
const AdminLoginReducer = (state = initialState, action: LoginAction): LoginState => {
    return produce(state, draft => { // state를 베이스로 draft로 객체 변경 후 리턴 >> 불변성 유지
        switch (action.type) {
            case ActionTypes.LOGIN_REQUEST:
                draft.idAndPassword = action.payload;
                break;
            
            case ActionTypes.LOGIN_SUCCESS:
                draft.isLoginFailed = false;
                draft.idAndPassword = null;
                draft.admin = action.payload;
                draft.id = null;
                draft.password = null;
                break;

            case ActionTypes.LOGIN_FAILED:
                draft.alertText = action.payload;
                break;

            case ActionTypes.ID_BLUR:
                draft.id = action.payload;
                break;
            
            case ActionTypes.PASSWORD_BLUR:
                draft.password = action.payload;
                break;

            default:
                break;
        }
    })
}

export default AdminLoginReducer;
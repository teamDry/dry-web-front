import { produce } from "immer";
import { IdAndPassword, LoginAction } from "../../actions/admins/LoginActions";
import { ActionTypes, Admin } from "../../actions/admins/ActionTypes";

// Login과 관련된 상태 정의
export interface LoginState {
    admin: Admin | null;
    isLoginFailed: boolean;
    idAndPassword: IdAndPassword | null;
    id: string | null;
    password: string | null;
    alertText: string;
}

// 상태 초기값
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
        switch (action.type) { // 들어온 Action Type에 따라서 액션 변경
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

            default:
                break;
        }
    })
}

export default AdminLoginReducer;
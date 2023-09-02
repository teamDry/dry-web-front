import { ActionTypes, Admin } from "./ActionTypes";
import { InputAction } from "./InputActions";

export interface IdAndPassword {
    id: string,
    password: string
}

// Login 관련 Action시 요청 타입과 필요 데이터 정의
// type: 요청 타입
// payload: 필요 데이터
export interface LoginRequestAction {
    type: typeof ActionTypes.LOGIN_REQUEST;
    payload: IdAndPassword;
}

export interface LoginSuccessAction {
    type: typeof ActionTypes.LOGIN_SUCCESS;
    payload: Admin; // 성공시 사용할 객체
}

export interface LoginFailedAction {
    type: typeof ActionTypes.LOGIN_FAILED;
    payload: string; 
}


// Union Type 정의
export type LoginAction = 
    LoginRequestAction |
    LoginSuccessAction |
    LoginFailedAction |
    InputAction;


// Action Constructor Function
// 실제로 dispatch시 사용될 함수들
export const loginRequest = (idAndPassword: IdAndPassword): LoginAction => ({ // IdAndPassword 타입 받아서 LoginAction 타입 return
    type: ActionTypes.LOGIN_REQUEST,
    payload: idAndPassword
})

export const loginSuccess = (admin: Admin): LoginAction => ({ // Admin 타입을 받아서 LoginAction 타입 return
    type: ActionTypes.LOGIN_SUCCESS,
    payload: admin
})

export const loginFailed = (text: string): LoginAction => ({ // string 타입 받아서 LoginAction 타입 return
    type: ActionTypes.LOGIN_FAILED,
    payload: text
})



/**
 * type guard: TypeScript에서 변수의 타입을 좁혀나가는 기능 (typeof, instanceof, in 등)
 */
import { ActionTypes } from "./ActionTypes";

export interface IdAndPassword {
    id: string,
    password: string
}

export interface Admin {
    id: string,
    password: string,
    nickname: string,
    email: string
}

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

export interface IdBlurAction {
    type: typeof ActionTypes.ID_BLUR;
    payload: string;
}

export interface PasswordBlurAction {
    type: typeof ActionTypes.PASSWORD_BLUR;
    payload: string;
}

// Union Type 정의
export type LoginAction = 
    LoginRequestAction |
    LoginSuccessAction |
    LoginFailedAction |
    IdBlurAction |
    PasswordBlurAction;


// Action Constructor Function
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

export const idBlur = (id: string): LoginAction => ({
    type: ActionTypes.ID_BLUR,
    payload: id
})

export const passwordBlur = (password: string): LoginAction => ({
    type: ActionTypes.PASSWORD_BLUR,
    payload: password
})

/**
 * type guard: TypeScript에서 변수의 타입을 좁혀나가는 기능 (typeof, instanceof, in 등)
 */
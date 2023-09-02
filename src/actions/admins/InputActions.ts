import { ActionTypes } from "./ActionTypes";

// InputAction Union 타입 정의
export type InputAction = 
    IdChangeAction |
    PasswordChangeAction |
    NicknameBlurAction;

// Input에 관련된 Action을 할때 필요한 Action type과 Data type 정의
export interface IdChangeAction {
    type: typeof ActionTypes.ID_BLUR;
    payload: string;
}

export interface PasswordChangeAction {
    type: typeof ActionTypes.PASSWORD_BLUR;
    payload: string;
}

export interface NicknameBlurAction {
    type: typeof ActionTypes.NICKNAME_BLUR;
    payload: string;
}

// 실제로 dispatch시 사용될 함수들
export const idChange = (id: string): InputAction => ({
    type: ActionTypes.ID_BLUR,
    payload: id
})

export const passwordChange = (password: string): InputAction => ({
    type: ActionTypes.PASSWORD_BLUR,
    payload: password
})

export const nicknameBlur = (nickname: string): InputAction => ({
    type: ActionTypes.NICKNAME_BLUR,
    payload: nickname
})

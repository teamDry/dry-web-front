import { ActionTypes } from "./ActionTypes";
import { InputAction } from "./InputActions";

// 회원가입 시 제대로 값 넣었는지 확인하기 위한 타입 정의
export interface IdCheck {
    text: string,
    signColor: string;
}

export interface PasswordCheck {
    text: string,
    signColor: string;
}

export interface PasswordReCheck {
    text: string,
    signColor: string;
}

export interface NicknameCheck {
    text: string,
    signColor: string;
}

// 추상화 -> map() 함수로 여러 객체를 만들기 위해 공통 타입 만듬
export type Checkable =
    IdCheck |
    PasswordCheck |
    PasswordReCheck |
    NicknameCheck;

// SignUpAction Union type 정의
export type SignUpAction =
    InputAction |
    IdCheckAction |
    PasswordCheckAction |
    PasswordReCheckAction |
    NicknameCheckAction;


// 입력 했을때 상태 바꿔주는건 InputActions에서 함
// 여기는 입력된 값의 유효성 검증 액션
export interface IdCheckAction {
    type: typeof ActionTypes.ID_CHECK;
    payload: IdCheck;
}

export interface PasswordCheckAction {
    type: typeof ActionTypes.PASSWORD_CHECK;
    payload: PasswordCheck;
}

export interface PasswordReCheckAction {
    type: typeof ActionTypes.PASSWORD_RECHECK;
    payload: PasswordReCheck;
}

export interface NicknameCheckAction {
    type: typeof ActionTypes.NICKNAME_CHECK;
    payload: NicknameCheck;
}

// 실제로 dispatch시 사용될 함수들
export const idCheckRequest = (idCheck: IdCheck): SignUpAction => ({
    type: ActionTypes.ID_CHECK,
    payload: idCheck
})

export const passwordCheckRequest = (passwordCheck: PasswordCheck): SignUpAction => ({
    type: ActionTypes.PASSWORD_CHECK,
    payload: passwordCheck
})

export const passwordReCheckRequest = (passwordReCheck: PasswordReCheck): SignUpAction => ({
    type: ActionTypes.PASSWORD_RECHECK,
    payload: passwordReCheck
})
export const nicknameCheckRequest = (nicknameCheck: NicknameCheck): SignUpAction => ({
    type: ActionTypes.NICKNAME_CHECK,
    payload: nicknameCheck
})

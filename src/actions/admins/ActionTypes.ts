export const ActionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    ID_BLUR: 'ID_BLUR',
    PASSWORD_BLUR: 'PASSWORD_BLUR'
} as const



// 문자열 리터럴 유니온 타입 정의

/**
 * 문자열 리터럴 타입?
 * - TypeScript에서 문자열 값들의 유한 집합을 나타내는 타입
 * - 이를 통해 특정 문자열 값만을 허용하는 타입을 정의할 수 있음
 * 
 * 이유
 * 1. TypeScript는 문자열 리터럴 유니온 타입을 사용하면 해당 문자열 값만 허용하고 다른 문자열은 거부
 * >> 액션 타입 정의시 오타가 발생하는 것을 방지
 * 
 * 2. 문자열 리터럴 유니온 타입을 사용해 정의하면 IDE에서 해당 액션 타입에 대한 자동완성 지원
 * 
 * 3. 액션 타입이 명시적으로 나타나 코드 가독성이 좋아짐
 * 
 * 4. 문자열 리터럴 유니온 타입으로 정의된 액션 타입은 재사용이 가능해 새로운 액션 추가시 기존 코드를 수정하지 않고 확장 가능
*/
import { Checkable, IdCheck, NicknameCheck, PasswordCheck, PasswordReCheck, idCheckRequest, nicknameCheckRequest, passwordCheckRequest, passwordReCheckRequest } from "../../../../actions/admins/SignUpActions";
import store from "../../../../Store";
import { idChange, nicknameBlur, passwordChange } from "../../../../actions/admins/InputActions";
import { getAxios } from "../../../../utils/admins/AdminUtil";

// SignUpLogin의 모든 함수에서 다 같이 쓸 Axios 객체 정의
const axiosInstance = getAxios();

// 각 항목값을 잘 넣었는지 체크
let isIdOk = false;
let isPasswordOk = false;
let isPasswordCheckOk = false;
let isNicknameOk = false;

// 항목값을 잘 못넣었을 때 className을 바꿔서 표시해줄 것임
export const BLACK_DOT = 'black-dot';
export const RED_DOT = 'red-dot';
export const GREEN_DOT = 'green-dot';

// 상태에 들어갈 data 값 바꾸는 함수에 필요한 타입
interface ChangeCheckDataFunction {
    (data: Checkable, signColor: string, text: string): void;
}

// 상태에 들어갈 data의 signColor와 text를 바꾸는 함수
const changeCheckData: ChangeCheckDataFunction = (data, signColor, text) => {
    data.signColor = signColor;
    data.text = text;
}

// Id 유효성 검증
// 영어로만 구성된 4글자 이상의 값만 허용
const isValidId = (id: string) => {
    const regex = /^[가-힣]{0}$|^(?![!@#$%^&* ]+$)[a-zA-Z0-9 ]{4,}$/;
    return !regex.test(id);
}

// Id 체크 함수
export const idCheck = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // 상태에 들어갈 초기 데이터 설정
    const checkData: IdCheck = {
        signColor: "",
        text: ""
    }

    if (e.target.value.trim().length === 0) { // 만약 빈칸이면?
        return; // 오류메시지 띄우지 않음
    } else if (isValidId(e.target.value.trim())) { // 만약 한글이나 특수문자가 들어가면? >> 유효하지 않다면?
        changeCheckData(checkData, RED_DOT, "아이디는 4글자 이상의 영어와 숫자의 조합이여야 합니다."); // 신호를 붉은색으로 변경, 경고 메세지 변경
    } else { // 유효한 닉네임이라면?
        try {
            const response = await axiosInstance.get('/api/admins/id/check?id=' + e.target.value.trim()); // QueryString으로 해당 아이디를 DB로 보내서 중복 검사

            if (response.status === 200) { // 만약 중복이 아니라면?
                changeCheckData(checkData, GREEN_DOT, ""); // 신호를 녹색으로, 경고 메세지는 없음
                store.dispatch(idChange(e.target.value.trim())); // store를 통해 id값 상태 변경
                isIdOk = true; // 사용 가능한 아이디
            }

        } catch (error) { // 만약 중복이라면?
            changeCheckData(checkData, RED_DOT, "중복된 아이디 입니다."); // 신호를 붉은색으로 변경, 경고 메세지 변경
            isIdOk = false; // 사용 불가능한 아이디
        }
    }
    store.dispatch(idCheckRequest(checkData)); // 검사를 바탕으로 바뀐 data값을 상태로 변경
}

// 비밀번호 유효성 검사 함수
// 8글자 이상, 특수문자 포함할 것
const isValidPassword = (password: string) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return !passwordRegex.test(password);
}

// 비밀번호 체크 함수
export const passwordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 상태에 들어갈 초기 데이터 설정
    const checkData: PasswordCheck = {
        signColor: "",
        text: ""
    }

    if (e.target.value.trim().length === 0) { // 만약 빈칸이면?
        return; // 오류 메세지 띄우지 않음
    }

    if (isValidPassword(e.target.value.trim())) { // 유효성 검사에 걸리면
        changeCheckData(checkData, RED_DOT, "비밀번호는 특수문자를 포함해 8글자 이상이어야 합니다."); // 실패에 맞게 검사 데이터 변경
        isPasswordOk = false; // 사용 불가능한 비밀번호
    } else { // 유효성 검사 통과 시
        changeCheckData(checkData, GREEN_DOT, ""); // 유효성 검사 성공시 검사 데이터를 성공에 맞게 변경
        store.dispatch(passwordChange(e.target.value.trim())); // 유효성 검사 성공했으니 password 상태값 변경
        isPasswordOk = true; // 사용 가능한 비밀번호
    }

    store.dispatch(passwordCheckRequest(checkData)); // 검사 결과에 따른 데이터로 상태변경
}

// 비밀번호 한번 더 입력한거 검사 함수
export const passwordRecheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length === 0) { // 만약 공백이면?
        return; // 오류 메세지 출력 안함
    } else if (store.getState().inputData.password === "") { // 만약 비밀번호도 입력되지 않았으면?
        return; // 오류 메세지 출력 안함
    }

    // 상태에 들어갈 초기 데이터 설정
    const checkData: PasswordReCheck = {
        signColor: "",
        text: ""
    }

    if (e.target.value.trim() === store.getState().inputData.password) { // 비밀번호와 비밀번호 확인의 값이 같으면?
        changeCheckData(checkData, GREEN_DOT, ""); // 잘 입력한 신호, 오류 메세지 없음
        isPasswordCheckOk = true; // 비밀번호 확인 완료
    } else { // 비밀번호와 비밀번호 확인 값이 다르면?
        changeCheckData(checkData, RED_DOT, "입력한 비밀번호가 서로 다릅니다."); // 잘못 입력한 신호, 오류 메세지 출력
        isPasswordCheckOk = false; // 비밀번호 확인 오류
    }
    store.dispatch(passwordReCheckRequest(checkData)); // 검사 결과에 따른 데이터로 상태 변경
}

// 닉네임 유효성 검사
// 2~10 글자로 구성된, 특수문자가 없는 영어와 한글의 조합
const isValidNickname = (nickname: string) => {
    const regex = /^[A-Za-z가-힣]{2,10}$/;
    return !regex.test(nickname);
}

// 닉네임 검사 함수
export const nicknameCheck = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // 상태에 들어갈 초기 데이터 설정
    const checkData: NicknameCheck = {
        signColor: "",
        text: ""
    }

    if (e.target.value.trim().length === 0) { // 만약 빈칸이면?
        return; // 오류 메세지 출력 안함
    } else if (isValidNickname(e.target.value.trim())) { // 만약 유효성 검사에 걸리면?
        changeCheckData(checkData, RED_DOT, "닉네임의 길이는 2 ~ 10글자고 특수문자가 포함되지 않아야 합니다."); // 빨간 신호, 오류 메세지 출력
        isNicknameOk = false; // 사용 불가능한 닉네임
    } else {
        try {
            const response = await axiosInstance.get('/api/admins/nickname/check?nickname=' + e.target.value.trim()); // QueryString으로 DB에 중복된 닉네임 있는지 요청

            if (response.status === 200) { // 중복된 닉네임 없으면 200
                changeCheckData(checkData, GREEN_DOT, ""); // 녹색 신호, 오류 메세지 없음
                store.dispatch(nicknameBlur(e.target.value.trim())); // 유효한 닉네임이므로 nickname 상태 변경
                isNicknameOk = true; // 사용 가능한 닉네임
            }
        } catch (error) {
            changeCheckData(checkData, RED_DOT, "중복된 닉네임 입니다."); // 빨간 신호, 오류 메세지 출력
            isNicknameOk = false; // 사용 불가능한 닉네임
        }
    }
    store.dispatch(nicknameCheckRequest(checkData)); // 검사 결과에 맞게 상태 변경
}

// 모든 검사를 통화했는지 확인용 함수
const isSignUpCondition = () => {
    return isIdOk && isPasswordOk && isPasswordCheckOk && isNicknameOk;
}

export const signUpRequest = async () => {
    if (isSignUpCondition()) { // 만약 모든 검사를 통과 했다면
        try {
            const currentState = store.getState(); // 상태 최신화
            // BackEnd에 보낼 json 객체
            const data = {
                id: currentState.inputData.id,
                password: currentState.inputData.password,
                nickname: currentState.inputData.nickname,
                email: "iimim@naver.com" // 하드코딩 후에 이메일 기능과 함께 수정
            }

            const response = await axiosInstance.post('/api/admins/sign-up', data); // 해당 url에 data와 함께 요청
            if (response.status === 200) { // ok 응답시
                window.location.href = '/admins/'; // Login 페이지로 이동
            }
        } catch (error) {

            window.location.href ='/admins/errorPage' // errorPage 추후 구현 예정
        }
    } else { // 만약 검사 중 통과 못한게 있다면
        focusNotValidForm(); // 해당 입력 칸으로 포커스 이동
    }
}

const focusNotValidForm = () => { // 검사 실패한 항목으로 포커스 이동
    let element = null;
    if(!isIdOk) {
        element = document.getElementsByName("id");
    } else if(!isPasswordOk) {
        element = document.getElementsByName("password");
    } else if(!isPasswordCheckOk) {
        element = document.getElementsByName("password-check");
    } else if(!isNicknameOk) {
        element = document.getElementsByName("nickname");
    } else {
        return;
    }
    element[0].focus();

}
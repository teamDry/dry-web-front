import store from "../../../Store";
import { loginFailed, loginSuccess } from "../../../actions/admins/LoginActions";
import { getAxios } from "../../../utils/admins/AdminUtil";

export const loginRequest = async () => {
    try {
        const axiosInstance = getAxios(); // Util 폴더의 기본설정이 되있는 Axios 객체 가져옴
        const currentState = store.getState(); // state 최신화

        const data = { // 통신에 보낼 데이터
            id: currentState.inputData.id,
            password: currentState.inputData.password
        }
        // async await는 비동기 통신으로 await에서 통신이 끝나야 그 다음줄 실행함
        const response = await axiosInstance.post('/api/admins/login', data); // 통신 보낼 메서드, 데이터
        if (response.status === 200) { // 통신 성공시
            store.dispatch(loginSuccess(response.data)); // store에 로그인 성공 액션
            window.location.href = '/admins/main/dashboard' // 로그인 성공했으니 대쉬보드로
        }
    } catch (error) {
        store.dispatch(loginFailed(`You have entered the wrong ID or PASSWORD.`)); // 실패시 화면에 실패메세지 상태값 변경 -> 상태값이 변경되면 화면에 출력
    } 
}

export const handleKeyDown = (e: React.KeyboardEvent) => { // 엔터 눌렸을 때 login 요청 실행
    if (e.key === 'Enter') {
        loginRequest();
    }
}

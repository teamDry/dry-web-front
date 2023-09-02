import styled from 'styled-components'
import LoginMain from '../../components/admins/login/LoginMain';
import FormHeader from '../../components/admins/common/FormHeader';
import FormButton from '../../components/admins/common/FormButton';
import { RootState } from '../../reducers/RootReducer';
import { loginRequest } from '../../components/admins/login/LoginLogic';
import { useSelector } from 'react-redux';

const LoginPageBody = styled.div`
    height: 100vh;
    margin: 0;
    background-color: black;
    overflow-y: hidden; /* 수직 스크롤 비활성화 */
`

const LoginPageContainer = styled.div`
    width: 40%;
    height: 100%;
    margin: 0 auto;
    background: linear-gradient(to right, #FAF0E6, #BEADFA);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
`

const LoginFailedMessage = styled.span`
    margin-top: 24px;
    font-size: 18px;
    font-family: 'Roboto Mono', monospace;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
`
const LoginPage = () => {
    // useSelector로 상태 가져와야 store에서 변경된 상태값을 인식하여 값이 바뀜
    const textData = useSelector((state: RootState) => state.adminLogin.alertText);

    return (
        <LoginPageBody>
            <LoginPageContainer>
                <FormHeader img="login-login.svg" text="ADMIN LOGIN" />
                <LoginMain />
                <FormButton onClick={loginRequest} text="LOGIN" />
                <LoginFailedMessage>{textData}</LoginFailedMessage>
            </LoginPageContainer>
        </LoginPageBody>
    )

}

export default LoginPage
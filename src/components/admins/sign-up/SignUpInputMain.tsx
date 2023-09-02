import styled from 'styled-components'
import { prefixAdminImagePath } from '../../../utils/admins/AdminUtil';
import SignUpInputBox from './SignUpInputBox';
import { idCheck, nicknameCheck, passwordCheck, passwordRecheck } from './static/SignUpLogic';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/RootReducer';

const SignUpInputMainDiv = styled.main`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SignUpInputDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const SignUpInputMain = () => {

    const inputData = [{
        type: "text",
        id: "id",
        name: "id",
        img: prefixAdminImagePath("login-user.svg"),
        placeholder: "ID",
        onBlur: idCheck,
        checkData: useSelector((state: RootState) => state.adminSignUp.idCheck)

    }, {
        type: "password",
        id: "password",
        name: "password",
        img: prefixAdminImagePath("login-password.svg"),
        placeholder: "PASSWORD",
        onBlur: passwordCheck,
        checkData: useSelector((state: RootState) => state.adminSignUp.passwordCheck)
    }, {
        type: "password",
        id: "password-check",
        name: "password-check",
        img: prefixAdminImagePath("signUp-password-check.svg"),
        placeholder: "PASSWORD CHECK",
        onBlur: passwordRecheck,
        checkData: useSelector((state: RootState) => state.adminSignUp.passwordReCheck)
    }, {
        type: "text",
        id: "nickname",
        name: "nickname",
        img: prefixAdminImagePath("signUp-nickname.svg"),
        placeholder: "NICKNAME",
        onBlur: nicknameCheck,
        checkData: useSelector((state: RootState) => state.adminSignUp.nicknameCheck)
    }]

    return (
        <SignUpInputMainDiv>
            <SignUpInputDiv>
                {inputData.map((item, index) => (
                    <SignUpInputBox key={index} type={item.type} id={item.id} name={item.name} img={item.img} placeholder={item.placeholder} onBlur={item.onBlur} data={item.checkData} />
                ))}
            </SignUpInputDiv>
        </SignUpInputMainDiv>
    )

}

export default SignUpInputMain
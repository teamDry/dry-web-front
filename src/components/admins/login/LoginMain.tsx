import styled from 'styled-components'
import { prefixAdminImagePath } from '../../../utils/admins/AdminUtil';
import LoginOption from './LoginOption';
import LoginInput from './LoginInput';
import store from '../../../Store';
import { handleKeyDown } from './LoginLogic';
import { idChange, passwordChange } from '../../../actions/admins/InputActions';

const LoginMainDiv = styled.main`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LoginMainInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LoginMain = () => {
    const inputData = [{
        type: "text",
        id: "id",
        img: prefixAdminImagePath("login-user.svg"),
        name: "id",
        placeholder: "ID",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            store.dispatch(idChange(e.target.value.trim()));
        }
    }, {
        type: "password",
        id: "password",
        img: prefixAdminImagePath("login-password.svg"),
        name: "password",
        placeholder: "PASSWORD",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            store.dispatch(passwordChange(e.target.value.trim()));
        }
    }]
    return (
        <LoginMainDiv>
            <LoginMainInput>
                {inputData.map((item, index) => (
                    <LoginInput key={index} type={item.type} name={item.name} id={item.id} img={item.img} placeholder={item.placeholder} onChange={item.onChange} onKeyDown={handleKeyDown}/>
                ))}
                <LoginOption />
            </LoginMainInput>
        </LoginMainDiv>
    )

}

export default LoginMain
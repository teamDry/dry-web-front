import styled from 'styled-components'
import { getAxios, prefixAdminImagePath } from '../../../utils/admins/AdminUtil';
import LoginOption from './LoginOption';
import LoginInput from './LoginInput';
import store from '../../../Store';
import { idBlur, loginSuccess, passwordBlur } from '../../../actions/admins/Actions';
import { useSelector } from 'react-redux';
import { LoginState } from '../../../reducers/AdminReducer';
import { useState } from 'react';
import FormButton from '../common/FormButton';

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

interface LoginMainProps {
    submit: () => void;
}

const LoginMain = (props: LoginMainProps) => {
    const inputData = [{
        type: "text",
        id: "id",
        img: prefixAdminImagePath("login-user.svg"),
        name: "id",
        placeholder: "ID",
        onBlur: (e: React.ChangeEvent<HTMLInputElement>) => {
            store.dispatch(idBlur(e.target.value.trim()));
        }
    }, {
        type: "password",
        id: "password",
        img: prefixAdminImagePath("login-password.svg"),
        name: "password",
        placeholder: "PASSWORD",
        onBlur: (e: React.ChangeEvent<HTMLInputElement>) => {
            store.dispatch(passwordBlur(e.target.value.trim()));
        }
    }]

    const onKeyDown = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            props.submit();
        }
    }

    return (
        <LoginMainDiv>
            <LoginMainInput>
                {inputData.map((item, index) => (
                    <LoginInput key={index} type={item.type} name={item.name} id={item.id} img={item.img} placeholder={item.placeholder} onBlur={item.onBlur} onKeyDown={onKeyDown}/>
                ))}
                <LoginOption />
            </LoginMainInput>
        </LoginMainDiv>
    )

}

export default LoginMain
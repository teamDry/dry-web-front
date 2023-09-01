import React, { Component, useState } from 'react';
import styled from 'styled-components'
import LoginMain from '../../components/admins/login/LoginMain';
import FormHeader from '../../components/admins/common/FormHeader';
import FormButton from '../../components/admins/common/FormButton';
import store from '../../Store';
import { loginFailed, loginSuccess } from '../../actions/admins/Actions';
import { getAxios } from '../../utils/admins/AdminUtil';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/RootReducer';

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
    const textData = useSelector((state: RootState) => state.adminLogin.alertText);

    const loginRequest = async () => {
        console.log(textData);
        try {
            const axiosInstance = getAxios();
            const currentState = store.getState();

            const data = {
                id: currentState.adminLogin.id,
                password: currentState.adminLogin.password
            }
            const response = await axiosInstance.post('/api/admins/login', data);
            if (response.status === 200) {
                store.dispatch(loginSuccess(response.data));
                window.location.href = '/admins/main/dashboard'
            }
        } catch (error) {
            store.dispatch(loginFailed(`You have entered the wrong ID or PASSWORD.`));
        } 
        

    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            loginRequest();
        }
    }

    return (
        <LoginPageBody>
            <LoginPageContainer>
                <FormHeader img="login-login.svg" text="ADMIN LOGIN" />
                <LoginMain submit={loginRequest} />
                <FormButton onClick={loginRequest} text="LOGIN" />
                <LoginFailedMessage>{textData}</LoginFailedMessage>
            </LoginPageContainer>
        </LoginPageBody>
    )

}

export default LoginPage
import React, { Component, useState } from 'react';
import styled from 'styled-components'
import LoginMain from '../../components/admins/login/LoginMain';
import FormHeader from '../../components/admins/common/FormHeader';
import FormButton from '../../components/admins/common/FormButton';

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
const LoginPage = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LoginPageBody>
            <LoginPageContainer>
                <FormHeader img="login-login.svg" text="ADMIN LOGIN" />
                <LoginMain />
                <FormButton onClick={() => null} text="LOGIN" />
            </LoginPageContainer>
        </LoginPageBody>
    )

}

export default LoginPage
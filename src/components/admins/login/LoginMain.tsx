import React, { Component } from 'react';
import styled from 'styled-components'
import { prefixAdminImagePath } from '../../../utils/admins/AdminUtil';
import LoginOption from './LoginOption';
import LoginInput from './LoginInput';
import axios from 'axios';

const LoginMainDiv = styled.main`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LoginMainInput = styled.div`
    display: flex;
    flex-direction: column;
`

const LoginMain = () => {
    const inputData = [{
        type: "text",
        id: "id",
        img: prefixAdminImagePath("login-user.svg"),
        name: "id",
        placeholder: "ID"
    }, {
        type: "password",
        id: "password",
        img: prefixAdminImagePath("login-password.svg"),
        name: "password",
        placeholder: "PASSWORD"
    }]

    function requestLogin() {
        return axios.post('http://localhost:8080/api/admins/login')
        .then(response => response.data)
        .catch(error => {
            alert("로그인 에러");
        })
    }

    return (
        <LoginMainDiv>
            <LoginMainInput>
                {inputData.map((item, index) => (
                    <LoginInput key={index} type={item.type} name={item.name} id={item.id} img={item.img} placeholder={item.placeholder} />
                ))}
                <LoginOption />
            </LoginMainInput>
        </LoginMainDiv>
    )

}

export default LoginMain
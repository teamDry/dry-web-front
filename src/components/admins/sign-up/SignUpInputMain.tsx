import React, { Component } from 'react';
import styled from 'styled-components'
import { prefixAdminImagePath } from '../../../utils/admins/AdminUtil';
import SignUpInputBox from './SignUpInputBox';

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
        img: prefixAdminImagePath("login-user.svg"),
        placeholder: "ID",
    }, {
        type: "password",
        id: "password",
        img: prefixAdminImagePath("login-password.svg"),
        placeholder: "PASSWORD",
    }, {
        type: "password",
        id: "password-check",
        img: prefixAdminImagePath("signUp-password-check.svg"),
        placeholder: "PASSWORD CHECK",
    }, {
        type: "text",
        id: "nickname",
        img: prefixAdminImagePath("signUp-nickname.svg"),
        placeholder: "NICKNAME",
    }]

    return (
        <SignUpInputMainDiv>
            <SignUpInputDiv>
            {inputData.map((data, index) => (
                <SignUpInputBox key={index} type={data.type} id={data.id} img={data.img} placeholder={data.placeholder} />
            ))}
            </SignUpInputDiv>
        </SignUpInputMainDiv>
    )

}

export default SignUpInputMain
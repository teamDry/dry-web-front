import React, { Component } from 'react';
import styled from 'styled-components'
import { prefixAdminImagePath } from '../../../utils/admins/AdminUtil';

const LoginHeaderDiv = styled.header`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;
`

const LoginHeaderIcon = styled.img`
    width: 256px;
    height: 256px;
`

const LoginHeaderSpan = styled.span`
    font-family: 'Ubuntu', sans-serif;
    font-size: 64px;
    background: linear-gradient(to top, #4D3C77, #040D12);
    /* 그라데이션 설정 */
    -webkit-background-clip: text;
    /* 텍스트 내부에만 그라데이션 적용 */
    color: transparent;
    /* 텍스트 숨김 */
    font-family: 'Black Ops One'
`

interface FormHeaderProps {
    img: string,
    text: string
}

const FormHeader = (props: FormHeaderProps) => {

    return (
        <LoginHeaderDiv>
            <LoginHeaderIcon src={prefixAdminImagePath(props.img)}/>
            <LoginHeaderSpan className="no-copy">{props.text}</LoginHeaderSpan>
        </LoginHeaderDiv>
    )

}

export default FormHeader
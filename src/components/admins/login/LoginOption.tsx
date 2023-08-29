import React, { Component } from 'react';
import styled from 'styled-components'

const LoginOptionDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* 아이템들을 왼쪽과 오른쪽에 붙이기 */
    align-items: center;
    margin-top: 48px;

`

const LoginOptionBox = styled.div`
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginCheckboxLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 2px;
    font-size: 24px;

    &:hover {
        color: #ffffff;
        transition: color 0.3s; /* 배경색 전환 효과 추가 */
    }
`
const LoginCheckbox = styled.input`
    width: 24px;
    height: 24px;
    accent-color: #068FFF; /* 체크박스 색깔 변경*/
    margin-right: 8px;
`

const LoginFotgotPassword = styled.span`
    margin-left: auto;
    font-size: 24px;
    font-family: 'Caveat', cursive;
    color: #212A3E;
    font-weight: bold;

    &:hover {
        color: #ffffff;
        transition: color 0.3s; /* 배경색 전환 효과 추가 */
    }
`

const LoginOption = () => {

    return (
        <LoginOptionDiv>
            <LoginOptionBox>
                <LoginCheckboxLabel className="no-copy" htmlFor="checkbox">
                    <LoginCheckbox type="checkbox" id="checkbox" name="isRemember"/>
                    Remember Me
                </LoginCheckboxLabel>
            </LoginOptionBox>
            <LoginFotgotPassword className="no-copy">Forgot Password?</LoginFotgotPassword>
        </LoginOptionDiv>
    )

}

export default LoginOption
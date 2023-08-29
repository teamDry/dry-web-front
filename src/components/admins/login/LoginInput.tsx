import React, { Component } from 'react';
import styled from 'styled-components'

const LoginInputImg = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 18px;
    margin-top: 24px;
`

const LoginInputInput = styled.input`
    width: 80%;
    font-size: 36px;
    margin-top: 30px;
    border: none;
    border-bottom: 2px solid black;
    padding-bottom: 8px;

    &:focus {
        border-bottom: 1px solid #ffffff;
    }

    &::placeholder {
        color: #FFFFFF;
        font-size: 24px;
    }
`

const LoginInputDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    

`

const CheckSign = styled.span`
    margin-top: 16px;
    margin-left: 16px;
`
interface LoginInputProps {
    img: string,
    type: string,
    id: string,
    placeholder: string,
    name: string
}

const LoginInput = (props: LoginInputProps) => {

    return (
        <LoginInputDiv>
            <LoginInputImg src={props.img} />
            <LoginInputInput type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} autoComplete='off' />
        </LoginInputDiv>

    )

}

export default LoginInput
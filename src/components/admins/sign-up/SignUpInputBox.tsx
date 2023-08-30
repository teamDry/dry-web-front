import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'

const colorAnimation = keyframes`
    0% {
        border-bottom-color: #313866;
    }

    50% {
        border-bottom-color: #45FFCA;
    }

    100% {
        border-bottom-color: #313866;
    }
`

const SignUpInputBoxDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const SignUpInputInput = styled.input`
    font-family: 'M PLUS Rounded 1c', sans-serif;
    width: 80%;
    font-size: 36px;
    border-bottom: 2px solid black;
    margin-left: 16px;
    margin-bottom: 36px;
    border: none;
    border-bottom: 2px solid black;
    padding-bottom: 8px;

    &:focus {
        animation: ${colorAnimation} 5s infinite;
    }

    &::placeholder {
        color: #252B48;
        font-size: 24px;
        letter-spacing: 2px;
    }
`

const CheckSign = styled.span`
    margin-top: 20px;
    margin-left: 24px;
`
const SignUpInputImg = styled.img`
    width: 36px;
    height: 36px;
    margin-top: 8px;
    user-drag: none;
`

interface SignUpInputBoxProps {
    img: string,
    type: string,
    id: string,
    placeholder: string
}

const SignUpInputBox = (props: SignUpInputBoxProps) => {

    return (
        <SignUpInputBoxDiv>
            <SignUpInputImg className="no-copy" src={props.img} />
            <SignUpInputInput type={props.type} id={props.id} placeholder={props.placeholder} autoComplete='off' />
            <CheckSign>●</CheckSign>
        </SignUpInputBoxDiv>
    )

}

export default SignUpInputBox
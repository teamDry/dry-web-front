import React from 'react';
import styled, { keyframes } from 'styled-components'
import { Checkable } from '../../../actions/admins/SignUpActions';
import { RED_DOT } from './static/SignUpLogic';
import './static/sign-up.css'

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
    margin-bottom: 12px;
    border: none;
    border-bottom: 2px solid black;

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
    color: black;
    font-size: 24px;
`
const SignUpInputImg = styled.img`
    width: 36px;
    height: 36px;
    margin-top: 8px;
    user-drag: none;
`

const WarningMessage = styled.span`
    margin-bottom: 36px;
    font-size: 16px;
    color: red;
    font-family: 'Noto Sans KR', sans-serif;
    margin-left: 54px;
`

const SignUpInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 8vh;
`

interface SignUpInputBoxProps {
    img: string,
    type: string,
    id: string,
    name: string,
    placeholder: string,
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void,
    data: Checkable | null
}

const SignUpInputBox = (props: SignUpInputBoxProps) => {
    return (
        <SignUpInputContainer>
            <SignUpInputBoxDiv>
                <SignUpInputImg className="no-copy" src={props.img} />
                <SignUpInputInput type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} autoComplete='off' onBlur={props.onBlur} />
                <CheckSign className={"no-copy " + props.data?.signColor}>●</CheckSign>
            </SignUpInputBoxDiv>
            {(props.data?.signColor === RED_DOT) && <WarningMessage className="no-copy">{props.data?.text}</WarningMessage>}
        </SignUpInputContainer>
    )

}

export default SignUpInputBox
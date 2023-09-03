import React from 'react';
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
// LoginInput Component를 만들 때 필요한 데이터 정의
interface LoginInputProps {
    img: string,
    type: string,
    id: string,
    placeholder: string,
    name: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyDown: (e: React.KeyboardEvent) => void,
}

const LoginInput = (props: LoginInputProps) => {

    return (
        <LoginInputDiv>
            <LoginInputImg src={props.img} />
            <LoginInputInput type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} autoComplete='off' onChange={props.onChange} onKeyDown={props.onKeyDown} />
        </LoginInputDiv>
    )

}

export default LoginInput
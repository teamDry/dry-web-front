import React, { Component } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FormButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 60px;
    background-color: #322653;
    margin-top: 40px;
    color: #ffffff;
    font-size: 24px;
    border-radius: 12px;
    letter-spacing: 3px;
    font-family: 'Orbitron', sans-serif;
    
    &:hover {
        background-color: #FFF0F5;
        color: #000000;
        transition: 0.3s;
        cursor: pointer;
    }

`

interface FormButton {
    onClick: () => void,
    text: string

}

const FormButton = (props: FormButton) => {

    return (
        <FormButtonDiv className="no-copy" onClick={props.onClick}>
            {props.text}
        </FormButtonDiv>
    )

}

export default FormButton
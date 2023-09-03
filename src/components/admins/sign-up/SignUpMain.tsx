import React, { Component } from 'react';
import styled from 'styled-components'
import FormHeader from '../common/FormHeader';
import FormButton from '../common/FormButton';
import SignUpInputMain from './SignUpInputMain';
import { signUpRequest } from './static/SignUpLogic';

const SignUpContainer = styled.div`
    width: 40%;
    height: 100%;
    margin: 0 auto;
    background: linear-gradient(to right, #FAF0E6, #BEADFA);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
`

const SignUpMain = () => {
    return (
        <SignUpContainer>
            <FormHeader img="signup-signup.svg" text="ADMIN SIGN-UP" />
            <SignUpInputMain />
            <FormButton onClick={signUpRequest} text="SIGN UP" />
        </SignUpContainer>
    )
}

export default SignUpMain
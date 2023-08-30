import React, { Component } from 'react';
import styled from 'styled-components'
import SignUpMain from '../../components/admins/sign-up/SignUpMain';

const SignUpBody = styled.div`
    height: 100vh;
    margin: 0;
    background-color: black;
    overflow-y: hidden;
`

const SignUpPage = () => {
    return (
        <SignUpBody>
            <SignUpMain />
        </SignUpBody>
    )

}

export default SignUpPage
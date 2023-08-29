import React, { Component } from 'react';
import styled from 'styled-components'

const DashBoardNameDiv = styled.div`
    height: 20%;
    font-size: 18px;
    padding-right: 15px;
    font-weight: bold;
`

interface DashBoardNameProps {
    name: string
}

const DashBoardName = (props: DashBoardNameProps) => {

    return (
        <DashBoardNameDiv>
            {props.name}
        </DashBoardNameDiv>
    )

}

export default DashBoardName
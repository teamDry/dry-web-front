import React, { Component } from 'react';
import styled from 'styled-components'

const DashBoardSummaryDiv = styled.summary`
    border-bottom: 1px solid #BBBFCA;
    font-size: 48px;
    padding: 10px 35px;
    font-weight: bold;
`


interface DashBoardSummaryProps {
    summary: string;
}

const DashBoardSummary = (props: DashBoardSummaryProps) => {
    return (
        <DashBoardSummaryDiv>
            {props.summary}
        </DashBoardSummaryDiv>
    )

}

export default DashBoardSummary
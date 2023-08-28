import React, { Component } from 'react';
import styled from 'styled-components'

const DashBoardCountDiv = styled.div`
    text-align: right;
    font-size: 36px;
    font-weight: bold;
    height: 80%;
    padding-bottom: 5px;
    padding-right: 15px;
`

interface DashBoardCountProps {
    count: number;
}

const DashBoardCount = ({count} : DashBoardCountProps) => {

    return (
        <DashBoardCountDiv>
        {count}
      </DashBoardCountDiv>
    );

}

export default DashBoardCount
import React, { Component } from 'react';
import styled from 'styled-components'
import DashBoardSummary from './DashBoardSummary';
import DashBoardItem from './DashBoardItem';
import {prefixAdminImagePath} from '../../../utils/admins/AdminUtil'

const DashBoardDiv = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    margin: 20px 20px;
    background-color: #FFFFFF;
`

const DashBoardItemBox = styled.section`
    display: flex;
    flex-direction: row;
`

interface DashBoardProps {
    reportCount: number, // !TODO : 수정예정
    peopleCount: number,
    boardCount: number,
    issueCount: number
}

const DashBoard = (props: DashBoardProps) => {
    const boardItems = [{ // !TODO : 수정예정
        name: "New Report",
        count: props.reportCount,
        img: prefixAdminImagePath("dashboard-report.svg")
    }, {
        name: "New Report",
        count: props.reportCount,
        img: prefixAdminImagePath("dashboard-report.svg")
    }, {
        name: "New Report",
        count: props.reportCount,
        img: prefixAdminImagePath("dashboard-report.svg")
    }, {
        name: "New Report",
        count: props.reportCount,
        img: prefixAdminImagePath("dashboard-report.svg")
    }];

    return (
        <DashBoardDiv>
            <DashBoardSummary summary="DashBoard"/>
            <DashBoardItemBox>
                {boardItems.map((item, index) => ( // 위의 boardItems 데이터 가지고 컴포넌트 만들어줌
                    <DashBoardItem key={index} name={item.name} count={item.count} img={item.img} />
                ))}
            </DashBoardItemBox>
        </DashBoardDiv>
    )

}

export default DashBoard
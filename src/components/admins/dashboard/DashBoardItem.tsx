import React, { Component } from 'react';
import styled from 'styled-components'
import DashBoardCount from './DashBoardCount';
import DashBoardName from './DashBoardName';



const DashBoardItemTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const DashBoardTopIcon = styled.img`
    width: 25%;
    height: 100%;
    padding-left: 10px;
`

const DashBoardTopAside = styled.aside`
    margin-left: auto; /* 오른쪽으로 밀어줌 */
`

const DashBoardItemBottom = styled.div`
    height: 25%;
    display: flex;
    flex-direction: row;
    padding: 5px 0;
    align-items: center;
    background-color: #ffffff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    }
`

const DashBoardViewDetail = styled.p`
    font-size: 18px;
    padding-left: 15px;
    font-weight: bold;
`

const DashBoardBottomIcon = styled.img`
    width: 25%;
    height: 100%;
    margin-left: auto;
    svg {
        fill: white;
        stroke: white;
    }
`

const DashBoardItemDiv = styled.div`
    height: 150px;
    padding: 15px 1% 0 1%;
    box-sizing: content-box;

    &:nth-child(1) {
        ${DashBoardItemTop} {
            background-color: #A5DEE5;
        }

        ${DashBoardItemBottom} {
            background: linear-gradient(to right, transparent 0%, #352F44 0%);
            background-size: 0% 100%;
            background-repeat: no-repeat;
            transition: background-size 0.8s ease;
            cursor: pointer;
            border: 3px solid #A5DEE5;        
            
            &:hover {
                background-size: 100% 100%;
                color: white;
            }
        }
    }

    &:nth-child(2) {
        ${DashBoardItemTop} {
            background-color: #CDE990;
        }

        ${DashBoardItemBottom} {
            background: linear-gradient(to right, transparent 0%, #435334 0%);
            background-size: 0% 100%;
            background-repeat: no-repeat;
            transition: background-size 0.8s ease;
            cursor: pointer;
            border: 3px solid #CDE990;        

            &:hover {
                background-size: 100% 100%;
                color: white;
            }
        }
    }

    &:nth-child(3) {
        ${DashBoardItemTop} {
            background-color: #FFE17B;
        }

        ${DashBoardItemBottom} {
            background: linear-gradient(to right, transparent 0%, #765827 0%);
            background-size: 0% 100%;
            background-repeat: no-repeat;
            transition: background-size 0.8s ease;
            cursor: pointer;
            border: 3px solid #FFE17B;       
            
            &:hover {
                background-size: 100% 100%;
                color: white;
            }
        }
    }

    &:nth-child(4) {
        ${DashBoardItemTop} {
            background-color: #EE6983;
        }

        ${DashBoardItemBottom} {
            background: linear-gradient(to right, transparent 0%, #79155B 0%);
            background-size: 0% 100%;
            background-repeat: no-repeat;
            transition: background-size 0.8s ease;
            cursor: pointer;
            border: 3px solid #EE6983;        

            &:hover {
                background-size: 100% 100%;
                color: white;
            }
        }
    }

`

interface DashBoardItemProps {
    name: string,
    count: number,
    img: string
}

const DashBoardItem = (props: DashBoardItemProps) => {

    return (
        <DashBoardItemDiv>
            <DashBoardItemTop>
                <DashBoardTopIcon src={props.img} alt="DashBoard Image" />
                <DashBoardTopAside>
                    <DashBoardCount count={props.count} />
                    <DashBoardName name={props.name} />
                </DashBoardTopAside>
            </DashBoardItemTop>

            <DashBoardItemBottom>
                <DashBoardViewDetail>view detail</DashBoardViewDetail>
                <DashBoardBottomIcon src="/images/admins/dashboard-arrow.svg" alt="Dashboard Arrow" />
            </DashBoardItemBottom>
        </DashBoardItemDiv>
    )

}

export default DashBoardItem
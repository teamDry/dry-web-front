import React, { Component } from 'react';
import styled from 'styled-components';

const MainLeft = styled.aside`
    background-color: #F5F5F5;
    width: 15%;
    border-right: 1px solid #BBBFCA;
`

const MainLeftItem = styled.li`
    font-size: 24px;
    padding: 15px 10px;
    border-bottom: 1px solid #BBBFCA;

    &:hover {
        color: #ffffff;
        background-color: #333333;
        transition: background-color 0.3s ease;
        cursor: pointer;
        font-weight: bold
    }
`

const SideMenu = () => {
    const menuItems = ['Dashboard', 'Chart', 'Tables', "Forms"];

    return (
        <MainLeft>
                <ul>
                    {menuItems.map((item, index) => (
                        <MainLeftItem key={index}>{item}</MainLeftItem>
                    ))}
                </ul>
        </MainLeft>
    );
}


export default SideMenu;
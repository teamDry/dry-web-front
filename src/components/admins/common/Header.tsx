import React, { Component } from 'react';
import styled from 'styled-components'

const TopHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #BBBFCA;
    padding: 10px 0;
`

const HeaderLeft = styled.aside`
    font-size: 36px;
    margin-left: 20px;
    display: inline-block;
    margin-right: auto; /* 왼쪽으로 밀어줌 */
`

const HeaderRight = styled.nav`
    font-size:24px;
    margin-right: 20px;
    display: inline-block;
    margin-left: auto; /* 오른쪽으로 밀어줌 */
`

const HeaderUl = styled.ul`
    display: flex;
`

const HeaderLi = styled.li`
    padding: 10px;
`

const Header = () => {
    return (
        <TopHeader>
            <HeaderLeft>
                Dry Admin
            </HeaderLeft>
            <HeaderRight>
                <HeaderUl>
                    <HeaderLi>로그인</HeaderLi>
                    <HeaderLi>회원가입</HeaderLi>
                </HeaderUl>
            </HeaderRight>
        </TopHeader>
    )
}

export default Header;
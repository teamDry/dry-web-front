import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../../components/admins/common/Header';
import SideMenu from '../../components/admins/common/SideMenu';
import DashBoardMain from '../../components/admins/dashboard/DashBoardMain';


const MainBody = styled.div`
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    margin: 0 360px; /* 바디의 기본 마진 제거 */
    flex-direction: column;
    background-color: #F5F5F5;
    border: 1px solid #BBBFCA;
`

const MainContentDiv = styled.main`
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;
`


const MainPage = () => {
    // localhost:3000/admins/main/dashboard
    return (
        <MainBody>
            <Header />
            <MainContentDiv>
                <SideMenu />
                <Routes>
                    {/* 임의로 하드코딩함, 수정예정 */}
                    <Route path="dashboard" element={<DashBoardMain reportCount={26} boardCount={12} issueCount={13} peopleCount={11} />} /> 
                </Routes>
            </MainContentDiv>
        </MainBody>
    )

}

export default MainPage
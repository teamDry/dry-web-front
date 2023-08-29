import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes로 변경
import MainPage from './MainPage';


// Admin 페이지 쪽 App.tsx
const AdminApp = () => {

    return (
        <Routes>
          <Route path="main" element={<MainPage />} />
        </Routes>
    )

}

export default AdminApp
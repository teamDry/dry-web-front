import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes로 변경
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

// Admin 페이지 쪽 App.tsx
const AdminApp = () => {

  return (
    <Routes>
      <Route path="main/*" element={<MainPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/sign-up/" element={<SignUpPage />} />
    </Routes>
  )

}

export default AdminApp
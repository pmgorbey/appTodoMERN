import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/AuthPage/LoginPage';
import RegisterPage from '../pages/AuthPage/RegisterPage';
import AboutPage from '../pages/AboutPage/AboutPage';

const AppRouter = (isLogin) => {
  
  // console.log(isLogin);
    return (
      isLogin
      ?
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='about' element={<AboutPage />} />
            </Route>
        </Routes>
      :
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Navigate to='/login' />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='*' element={<Navigate to='/login' />} />
            </Route>
        </Routes>
    )
   
}

export default AppRouter;
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/AuthPage/LoginPage';
import RegisterPage from '../pages/AuthPage/RegisterPage';
import AboutPage from '../pages/AboutPage/AboutPage';

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path='about' element={<AboutPage />} />
            </Route>
        </Routes>
    </div>
  )
}

export default AppRouter;
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import JobPage from '../pages/Job/JobPage';
import JobDetail from '../pages/Job/JobDetail';

const MainContent = (props) => {
    const { loginStatus, loginCbHandler } = props;

    return (
        <>
            <Navbar loginStatus={loginStatus} loginCbHandler={loginCbHandler} />
            <Routes>
                <Route path='/home' element={<JobPage />} />
                <Route path='/home/:id' element={<JobDetail />} />
                <Route path='*' element= {<Navigate replace to='/home' />} />
            </Routes>
        </>
    )
}

export default MainContent
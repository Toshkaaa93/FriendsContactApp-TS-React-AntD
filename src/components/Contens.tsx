import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './About';
import Profile from './Profile';
import NotFound from './404';
import MyTable from '../components/Table';

const Content = () => {
    return (
        <div>
            <Routes>
        <Route path="/" element={<MyTable/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
};

export default Content;
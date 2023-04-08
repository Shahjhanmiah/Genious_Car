import React from 'react';
import Header from '../pages/Sherad/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Sherad/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sheared/footer/Footer';
import Header from '../pages/sheared/header/Header';

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
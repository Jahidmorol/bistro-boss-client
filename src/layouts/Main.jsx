import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/sheared/footer/Footer';
import Header from '../pages/sheared/header/Header';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('signin') || location.pathname.includes('signup')
    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;
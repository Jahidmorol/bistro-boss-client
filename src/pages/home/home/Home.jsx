import React from 'react';
import Banner from '../banner/Banner';
import Categorys from '../categorys/Categorys';
import PopulerMenu from '../populerMenu/PopulerMenu';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categorys></Categorys>
           <PopulerMenu></PopulerMenu>
        </div>
    );
};

export default Home;
import React from "react";
import Banner from "../banner/Banner";
import Categorys from "../categorys/Categorys";
import Featured from "../featured/Featured";
import PopulerMenu from "../populerMenu/PopulerMenu";
import Testimonials from "../testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categorys></Categorys>
      <PopulerMenu></PopulerMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../sheared/cover/Cover";
import image from "../../../assets/menu/banner3.jpg"

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={image} title="Menu" subTitle="Would You Like To Try A Dish"></Cover>
    </div>
  );
};

export default Menu;

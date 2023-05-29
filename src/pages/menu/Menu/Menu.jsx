import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../sheared/cover/Cover";
import image from "../../../assets/menu/banner3.jpg"
import SectionTitle from "../../../component/sectionTitle/SectionTitle";
import MenuCategory from "../../sheared/menuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";

import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'

const Menu = () => {

  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={image} title="Menu" subTitle="Would You Like To Try A Dish"></Cover>
      <SectionTitle title="Today's Offer" subTitle="Don't Miss"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts section  */}
      <MenuCategory items={desserts} img={dessertImg} title="desserts" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"></MenuCategory>
      {/* pizza section  */}
      <MenuCategory items={pizza} img={pizzaImg} title="pizza" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"></MenuCategory>
      {/* salad section  */}
      <MenuCategory items={salad} img={saladImg} title="salad" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"></MenuCategory>
      {/* soup section  */}
      <MenuCategory items={soup} img={soupImg} title="soup" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"></MenuCategory>
    </div>
  );
};

export default Menu;

import React from "react";
import { Link } from "react-router-dom";
import ButtonCmn from "../../../component/buttonC/ButtonCmn";
import Cover from "../cover/Cover";
import MenuItem from "../menuItem/MenuItem";

const MenuCategory = ({ items, img, title, subTitle }) => {
  return (
    <div className="my-16">
      {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <ButtonCmn text="ORDER YOUR FAVOURITE FOOD"></ButtonCmn>
      </Link>
    </div>
  );
};

export default MenuCategory;

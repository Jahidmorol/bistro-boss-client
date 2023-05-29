import React from "react";
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
      <ButtonCmn text="ORDER YOUR FAVOURITE FOOD"></ButtonCmn>
    </div>
  );
};

export default MenuCategory;

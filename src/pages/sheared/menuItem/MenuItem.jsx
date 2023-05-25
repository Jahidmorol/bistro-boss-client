import React from "react";

const MenuItem = ({menuItem}) => {
  const { name, image, price, recipe } = menuItem;
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="w-[100px] h-[100px] flex flex-col items-center justify-center">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[80px] h-[82px]"
          src={image}
          alt="populer-img"
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h4 className="uppercase">{name}</h4>
          <p className="text-yellow-500">${price}</p>
        </div>
        <p className="">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;

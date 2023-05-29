import React from "react";

const MenuItem = ({item}) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex items-center gap-3">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[80px] h-[80px]"
          src={image}
          alt="populer-img"
        />
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

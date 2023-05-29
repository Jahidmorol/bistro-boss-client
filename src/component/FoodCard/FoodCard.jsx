import React from "react";
import { Link } from "react-router-dom";
import ButtonCmn from "../buttonC/ButtonCmn";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div>
        <img src={image} alt="food image" />
      </div>
      <p className="absolute right-0 bg-black text-white mr-5 mt-5 px-3 rounded">{price}</p>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p className="text-left">{recipe}</p>
        <Link to="">
          <ButtonCmn text="Order Now"></ButtonCmn>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;

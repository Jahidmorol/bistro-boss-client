import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../provider/AuthProvider";

const FoodCard = ({ item }) => {
  const {_id, name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const [,refetch] = useCart()

  const navigate = useNavigate();
  const location = useLocation()

  const handleOrderButton = (item) => {
    if (user && user.email) {
      const cartItem = {menuItemId: _id, name, image, price, email: user.email}
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Food added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
    else{
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signIn', {state: {from: location}})
        }
      })
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div>
        <img src={image} alt="food image" />
      </div>
      <p className="absolute right-0 bg-black text-white mr-5 mt-5 px-3 rounded">
        {price}
      </p>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p className="text-left">{recipe}</p>
        <Link to="">
          <button
            onClick={() => handleOrderButton(item)}
            className="btn btn-outline border-0 border-b-4 text-yellow-600 border-yellow-600"
          >
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;

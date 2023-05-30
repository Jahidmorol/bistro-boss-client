import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Our Shop</Link>
      </li>
      <li>
        {user ? (
          <>
            <button onClick={handleLogout} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to="/signin">Login</Link>
          </>
        )}
      </li>

      {/* <li>
        <Link to="/menu">Contact Us</Link>
      </li> */}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">
          Bistro Boss
        </Link>
      </div>
      <div className=" navbar-center hidden lg:flex">
        <ul className=" menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <img className="h-12 w-12 rounded-full" src={user.photoURL} alt="" />
        )}
      </div>
    </div>
  );
};

export default Header;

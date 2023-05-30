import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from "react";
import { useState } from "react";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [disabled, setDisabled] = useState(true)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  useEffect(()=>{
    loadCaptchaEnginge(6);
  },[])

  const handleCapcha = e => {
   const user_capcha = e.target.value;
   console.log(user_capcha)
    if(validateCaptcha(user_capcha)){
        setDisabled(false)
    }
    else{
        setDisabled(true)
    }

}

  return (
    <>
      <Helmet>
        <title>Bistro | SignIn</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-[80%] mx-auto flex-col md:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <div className="card w-full max-w-md">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                    <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={(e)=>handleCapcha(e)}
                  type="text"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-500">Captha is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                  disabled={disabled}
                />
              </div>
              <p className="text-center mt-3">
                <small>
                  New Here?{" "}
                  <Link to="/signup" className="underline text-primary">
                    Create an account
                  </Link>{" "}
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SectionTitle from "../../../component/sectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2))

  return (
    <div className="w-full">
      <SectionTitle title="Payment" subTitle="please process"></SectionTitle>
      <h2 className="text-2xl text-center my-5">
        Payment here ................
      </h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;

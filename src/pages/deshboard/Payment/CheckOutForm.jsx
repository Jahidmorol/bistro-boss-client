import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSeecure from "../../../hooks/useAxiosSeecure";
import { useEffect } from "react";

const CheckOutForm = ({ price }) => {
console.log(price);

  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSeecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState('')

  useEffect(()=>{
    axiosSecure.post('/create-payment-intent', {price})
    .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
    })
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    })
    if (error) {
      console.log("error----------", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("paymentMethod---------", paymentMethod);
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
            },
        },
    );

    if (confirmError) {
        console.log(confirmError);
    }

    if(paymentIntent){
        console.log(paymentIntent);
    }

  };

  return (
    <>
      <form className="w-2/3 m-8 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="w-6 mx-auto mt-5">
          <button
            className="btn btn-primary btn-sm mt-4"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );

  //   const stripe = useStripe();
  //   const elements = useElements();

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //   };

  //   if (!stripe || !elements) {
  //     // Stripe.js has not loaded yet. Make sure to disable
  //     // form submission until Stripe.js has loaded.
  //     return;
  //   }

  //   const card = elements.getElement(CardElement);

  //   if (card == null) {
  //     return;
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <CardElement
  //         options={{
  //           style: {
  //             base: {
  //               fontSize: "16px",
  //               color: "#424770",
  //               "::placeholder": {
  //                 color: "#aab7c4",
  //               },
  //             },
  //             invalid: {
  //               color: "#9e2146",
  //             },
  //           },
  //         }}
  //       />
  //       <button type="submit" disabled={!stripe}>
  //         Pay
  //       </button>
  //     </form>
  //   );
};

export default CheckOutForm;

import React, { createContext, useContext, useMemo, useState } from "react";
import {  useStripe,  useElements,  CardNumberElement,  CardCvcElement,  CardExpiryElement} from "@stripe/react-stripe-js";
import '../PaymentProcess'
import useResponsiveFontSize from '../useResponsiveFontSize';
import { Button } from "@material-ui/core";
import '../paymentstyle.css'
import { GlobalContext } from "../../../../App";



const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "purple",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "blue"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const SplitCardForm = () => {
    const [loggedInUser , setLoggedInUser] = useContext(GlobalContext)
    const [paymentError , setPaymentError] = useState(null)
    const [paymentSuccess , setPaymentSuccess] = useState(null)
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const {paymentMethod, error} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    if(error){
        setPaymentError(error)
        setPaymentSuccess(null);
    }
    else{
        setPaymentSuccess(paymentMethod);
        setLoggedInUser(paymentMethod)
    setPaymentError(null)
    }
  };
console.log(paymentSuccess)
  return (
    <div>
        <form onSubmit={handleSubmit} className="label-container" >
      <label >
        Card number
        <CardNumberElement
        className="label-card"
        />
      </label>
      <br/>
      <label>
        Expiration date
        <CardExpiryElement className="label"
        />
      </label>   
      <label>
        CVC
        <CardCvcElement
        className="label"
        />
      </label>
      <br/>
      <Button variant="contained" color="primary" type="submit" disabled={!stripe}>
        Pay
      </Button>
    </form>
    {
        paymentError && <p style={{color : 'red'}}>{paymentError.message}</p>
    }
    {
        paymentSuccess && <p style={{color : 'green'}}>Your payment is successful and reference is {paymentSuccess.id}</p>
    }
    </div>
  );
};



export default SplitCardForm;
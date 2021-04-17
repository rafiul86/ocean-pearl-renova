import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {} from '@stripe/react-stripe-js';
import PaymentCard from './PaymentCard/PaymentCard';
import SplitCardForm from './SplitCardForm/SplitCardForm';



const stripePromise = loadStripe('pk_test_51Ie1oiF0gzIyf9pTzHAOPS0Ra3kQHhZ41rRpTKaivQizJJPzVyPLFpPgPPmV1s0F3RzkNdUjY9WyI0FpilzpKa7U009f3hId4T');
const PaymentProcess = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
            <SplitCardForm/>
    </Elements>
        </div>
    );
};

export default PaymentProcess;
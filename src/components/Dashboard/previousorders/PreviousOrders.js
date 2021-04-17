import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../../App';
import SingleOrder from './singleorders/SingleOrders';


const PreviousOrders = () => {
    const [loggedInUser ,setLoggedInUser] = useContext(GlobalContext)
    const [orders ,setOrders] = useState([])
    useEffect(()=>{
        fetch('https://vast-journey-70627.herokuapp.com/showOrderHistory',{
            method : 'POST',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify({email : loggedInUser.email})
        })
        .then(res =>res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <SingleOrder orders={orders}></SingleOrder>
        </div>
    );
};

export default PreviousOrders;
import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import ShowOrder from './ShowOrder/ShowOrder';

const AllOrders = () => {
    const [loggedInUser ,setLoggedInUser] = useContext(GlobalContext)
    const [orders ,setOrders] = useState([])
    useEffect(()=>{
        fetch('https://vast-journey-70627.herokuapp.com/showOrderHistory',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({email : loggedInUser.email})
        })
        .then(res =>res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div className="row offset-xs-1">
            <div className="col-md-2">
                <Sidebar/>
            </div>
               <div className="col-md-10 mt-5">
                    {
                        <ShowOrder orders={orders}></ShowOrder> 
                    }
               </div>
        </div>
    );
};

export default AllOrders;
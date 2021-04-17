import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { GlobalContext } from '../../../App';
import PaymentProcess from '../PaymentProcess/PaymentProcess';



const Orders = () => {
    const history = useHistory()
    const [loggedInUser , setLoggedInUser] = useContext(GlobalContext)
    const {id} = useParams()
    const [service ,setService] = useState({})
    
    useEffect(()=>{
        fetch(`http://localhost:5000/showOneService/`+id)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    const handleSubmitOrder = () =>{
        
        const orderData ={
            name : service.name,
            price : service.price,
            email : loggedInUser.email,
            OrderDate : new Date()
        }
        fetch('http://localhost:5000/orderData',{
            method : 'POST',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(res =>{
            console.log('order details saved to database')
        })
        history.push('/allorders') 
    }
    
    return (
      <div className="offset-md-2 row ">
          <div className="col-md-6">
          <div class="card" style={{width: "18rem;"}}>
  <PaymentProcess/>
  <div class="card-body">
    <h3>{service.name}</h3>
    <h3>{service.price}</h3>
    <Button variant="contained" color="primary" onClick={handleSubmitOrder}>Submit</Button>
  </div>
 </div>
          </div>
          <div className="col-md-6">

          </div>
      </div>
    );
};

export default Orders;
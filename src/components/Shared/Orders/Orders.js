import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { GlobalContext } from '../../../App';



const Orders = () => {
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

    }
    
    return (
        <section>
 <div class="card" style={{width: "18rem;"}}>
  <img style={{height : '400px' , width : '400px'}} src={`http://localhost:5000/${service.img}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>{service.name}</h3>
    <h3>{service.price}</h3>
    <Button variant="contained" color="primary" onClick={handleSubmitOrder}>Confirm Order</Button>
  </div>
 </div>
 </section>
    );
};

export default Orders;
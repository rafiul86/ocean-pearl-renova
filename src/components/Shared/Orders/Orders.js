import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';


const Orders = () => {
    const {id} = useParams()
    const [service ,setService] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/showOneService/`+id)
        .then(res => res.json())
        .then(data => setService(data))
    },[id])
    
    return (
        <section>
 <div class="card" style={{width: "18rem;"}}>
  <img style={{height : '400px' , width : '400px'}} src={`http://localhost:5000/${service.img}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>{service.name}</h3>
    <h3>{service.price}</h3>
  </div>
</div>
 </section>
    );
};

export default Orders;
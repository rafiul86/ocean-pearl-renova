import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
  const {name, _id , price, } = service;
    return (
        <section >
            <div class="card" style={{width: "18rem;"}}>
  <img style={{height : '400px'}} src={`https://vast-journey-70627.herokuapp.com/${service.img}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4>{name}</h4>
    <h5>Price: ${price}</h5>
    <Link to={`/orders/${_id}`}>Order Now</Link>
    
  </div>
</div>
        </section>
    );
};


export default Service;
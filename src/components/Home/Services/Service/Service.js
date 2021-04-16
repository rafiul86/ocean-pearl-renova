import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
  const {name, _id , price, } = service;
  console.log(_id)
    return (
        <section >
            <div class="card" style={{width: "18rem;"}}>
  <img style={{height : '400px'}} src={`http://localhost:5000/${service.img}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>{name}</h3>
    <h3>{price}</h3>
    <Link to={`/orders/${_id}`}>Order Now</Link>
    
  </div>
</div>
        </section>
    );
};


export default Service;
import { Button } from '@material-ui/core';
import React from 'react';
import Sidebar from '../../../Sidebar/Sidebar';

const ServiceData = (props) => {
    const {handleDelete , service} = props
    return (
            <div className="card" style={{width: "18rem;"}}>
  <img className="card-img-top" style={{height : '250px' , width : '300px'}} src={`https://vast-journey-70627.herokuapp.com/${service.img}`} alt=""/>
  <div className="card-body">
    <h5 className="card-title">Service : {service.name}</h5>
<p>Service Price: ${service.price}</p>
    <Button variant="contained" color="secondary" onClick={()=> handleDelete(service._id)} >DELETE</Button>
  </div>
</div>
    );
};

export default ServiceData;
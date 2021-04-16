import { Button } from '@material-ui/core';
import React from 'react';

const ServiceData = (props) => {
    const {handleDelete , service} = props
    return (
        <div>
            <h1>{service.name}</h1>
            <Button onClick={()=> handleDelete(service._id)} >DELETE</Button>
        </div>
    );
};

export default ServiceData;
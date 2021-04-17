import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Service from './Service/Service';


const Services = () => {
    const [services ,setServices] = useState([])
    useEffect(()=>{
        fetch('https://vast-journey-70627.herokuapp.com/showService')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className="ms-5">
            <h1>Our Services</h1>
               <Grid container spacing={4}>
                  {
                services.map(service => <Grid item xs={12} md={6} lg={3}><Service key={service._id} service={service}></Service></Grid>)
                       }
               </Grid>
       </section>
    );
};



export default Services;
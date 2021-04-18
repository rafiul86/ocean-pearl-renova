import { Button, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    const [services ,setServices] = useState([])
    useEffect(()=>{
        fetch('https://vast-journey-70627.herokuapp.com/showService')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section style={{backgroundColor : 'skyblue'}} className="text-center ms-5 mt-5 mb-5">
            <h1 className="text-center ms-5 mt-5 mb-5">What We offer</h1>
               <Grid container spacing={4}>
                  {
                services.map(service => <Grid item xs={12} md={6} lg={3}><Service key={service._id} service={service}></Service></Grid>)
                       }
               </Grid>
       </section>
    );
};



export default Services;
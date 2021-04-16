import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Specialist from './Specialist/Specialist';

const Specialists = () => {
    const [admins ,setAdmins] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/showAdmin')
        .then(res => res.json())
        .then(data => setAdmins(data))
    },[])
    return (
        <section className="ms-5">
               <Grid container spacing={4}>
                  {
                admins.map(admin => <Grid item xs={12} md={6} lg={3}><Specialist key={admin._id} admin={admin}></Specialist></Grid>)
                       }
               </Grid>
       </section>
    );
};

export default Specialists;
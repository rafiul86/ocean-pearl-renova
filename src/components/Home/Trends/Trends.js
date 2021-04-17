import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Trend from './Trend/Trend';

const Trends = () => {
    const [admins ,setAdmins] = useState([])
    useEffect(()=>{
        fetch('https://vast-journey-70627.herokuapp.com/showAdmin')
        .then(res => res.json())
        .then(data => setAdmins(data))
    },[])
    return (
        <section className="ms-5">
               <Grid container spacing={4}>
                  {
                admins.map(admin => <Grid item xs={12} md={6} lg={3}><Trend key={admin._id} admin={admin}></Trend></Grid>)
                       }
               </Grid>
       </section>
    );
};



export default Trends;
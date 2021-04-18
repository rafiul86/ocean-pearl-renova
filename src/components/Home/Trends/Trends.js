import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import trendy from '../../../images/ren.jpg'
import trend from '../../../images/reno.jpg'
import tren from '../../../images/renoi.jpg'
import tre from '../../../images/ronov.jpg'

const Trends = () => {
    return (
        <section style={{backgroundColor : 'skyblue'}} className="text-center mt-5 mb-5 ms-5">
          <div>
          <h1 className="mt-5 mb-5" style={{color : 'blue'}}>Whats going on as Current Trends....</h1>
          </div>
          <div className="mt-5 mb-5">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={3}>
     <div class="card" style={{width: "18rem;"}}>
  <img style={{height : '400px'}} src={trendy} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>Repairing Inner Rooms</h3>
  </div>
</div>
</Grid>
<Grid item xs={12} md={6} lg={3}>
     <div class="card" style={{width: "18rem;"}}>
  <img style={{height : '400px'}} src={trend} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>Outside Plastering</h3>
  </div>
</div>
</Grid>
<Grid item xs={12} md={6} lg={3}>
     <div class="card" style={{width: "18rem;"}}>
  <img style={{height : '400px'}} src={tren} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>Demolition and Renew</h3>
  </div>
</div>
</Grid>
<Grid item xs={12} md={6} lg={3}>
     <div class="card" style={{width: "18rem;"}}>
  <img style={{height : '400px'}} src={tre} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>Economy Design</h3>
  </div>
</div>
</Grid>
</Grid>
          </div>
          <div>
            <Link to='/home'>Back to Homepage</Link>
          </div>
       </section>
    );
};




export default Trends;
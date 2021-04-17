import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails/ReviewDetails';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
            fetch('https://vast-journey-70627.herokuapp.com/showReview')
            .then(res =>res.json())
            .then(data => setReviews(data))
    },[])
    return (
        <section className="mt-5 mb-5">
               <Grid container spacong={4}>
              {
                  reviews.map(review=> <Grid item xs={12} md={6} lg={4} >  <ReviewDetails review={review}></ReviewDetails>      </Grid>)
              }
               </Grid>
           
       </section>
    );
};

export default CustomerReviews;
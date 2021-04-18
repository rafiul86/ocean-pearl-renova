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
        <section style={{backgroundColor : 'skyblue'}} className="mt-5 mb-5">
            <div>
          <h1 className="text-center ms-5 justify-content-center" style={{color : 'blue'}}>What Our Customer says about us !!</h1>
         </div>
               <div className="text-center ms-5 mt-5 mb-5 justify-content-center">
               <Grid container spacing={4}>
              {
                  reviews.map(review=> <Grid item xs={12} md={6} lg={4} >  <ReviewDetails review={review}></ReviewDetails>      </Grid>)
              }
               </Grid>
               </div>
       </section>
    );
};

export default CustomerReviews;
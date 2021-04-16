import React from 'react';

const ReviewDetails = ({review}) => {
    return (
        <div>
 <div class="card" style={{width: "18rem;"}}>
  <div class="card-body">
    <h5>{review.description}</h5>
    <h4>{review.name}</h4>
    <h5>{review.location}</h5>
  </div>
</div>
        </div>
    );
};

export default ReviewDetails;
import React from 'react';

const Trend = ({admin}) => {
    return (
        <section >
            <div class="card" style={{width: "18rem;"}}>
  <img style={{height : '400px'}} src={`https://vast-journey-70627.herokuapp.com/${admin.img}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>{admin.name}</h3>
  </div>
</div>
        </section>
    );
};


export default Trend;
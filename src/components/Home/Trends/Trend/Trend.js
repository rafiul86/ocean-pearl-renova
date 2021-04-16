import React from 'react';

const Trend = ({admin}) => {
    return (
        <section >
            <div class="card" style={{width: "18rem;"}}>
  <img style={{height : '400px'}} src={`http://localhost:5000/${admin.img}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>{admin.name}</h3>
  </div>
</div>
        </section>
    );
};


export default Trend;
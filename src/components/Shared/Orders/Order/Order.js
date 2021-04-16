import React from 'react';

const Order = ({order}) => {
    const {OrderDate , price, name} = order
    return (
        <section >
            <div class="card" style={{width: "18rem;"}}>
            <h3>{name}</h3>
  <div class="card-body">
    <h3>{price}</h3>
    <h3>{OrderDate}</h3>
    </div>
    </div>
    </section>
    );
};

export default Order;
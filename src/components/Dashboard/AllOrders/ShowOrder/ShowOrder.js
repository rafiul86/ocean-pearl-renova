import React from 'react';

const ShowOrder = ({order}) => {
    return (
        <div>
           <p>Service : {order.name} , Order Date :  {order.OrderDate} Customer Email :   {order.email}, Payment ID : {order.OrderId} </p> 
        </div>
    );
};

export default ShowOrder;
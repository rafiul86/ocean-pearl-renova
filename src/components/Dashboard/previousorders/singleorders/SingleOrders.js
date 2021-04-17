import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const SingleOrder = ({order}) => {
    return (
        <div className="row">
        <div className="col-md-2">
        <Sidebar/>
        </div>
        <div className="col-md-9">
           <p>Service : {order.name} , Order Date :  {order.OrderDate} Customer Email :   {order.email}, Payment ID : {order.OrderId}  <button style={{color : 'yellowgreen'}}>{order.status ? order.status : "Pending" }</button>
            </p> 
        </div>
        </div>
    );
};

export default SingleOrder;
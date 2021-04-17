import { Button } from 'bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar'
const SingleOrders = ({orders}) => {
    return (
        <div className="row col-xs-1">
            <div className="col-md-2">
            <Sidebar/>
            </div>
            <div className="col-md-9">
    <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Order Date</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  orders.map((order, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                        <td>{order.OrderDate}</td>
                        <td>{order.email}</td>
                        {
                         order.status === 'pending'  ? <td style={{backgroundColor : 'red' , height : '7px' , width  : '40px'}}>{order.status}</td> : <td style={{backgroundColor : 'lawngreen' , margin : '2px' , height : '7px' , width  : '100px'}}>{order.status}</td>
                        }
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
        </div>
    );
};

export default SingleOrders;
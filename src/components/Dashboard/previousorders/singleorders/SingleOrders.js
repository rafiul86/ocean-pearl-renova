import React from 'react';
import { Table } from 'react-bootstrap';

const SingleOrders = ({orders}) => {
    console.log(orders)
    return (
        <div>
    <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Gender</th>
                <th className="text-secondary" scope="col">Age</th>
                <th className="text-secondary" scope="col">Weight</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  orders.map((order, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                        <td>{order.status}</td>
                        <td>{order.OrderDate}KG</td>
                        <td>{order.OrderId}</td>
                        <td>{order.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default SingleOrders;
import React, { useEffect, useState } from 'react';
import ShowOrder from './ShowOrder/ShowOrder';

const AllOrders = () => {
    const [orders ,setOrders] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/showOrderHistory')
        .then(res =>res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            {
                orders.map(order => <ShowOrder order={order}></ShowOrder>)
            }
        </div>
    );
};

export default AllOrders;
import React from 'react';

const ShowOrder = ({order}) => {
    return (
        <div>
            {order.name} {order.OrderDate} {order.email}
        </div>
    );
};

export default ShowOrder;
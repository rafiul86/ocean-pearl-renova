import React from 'react';
import Order from '../../../Shared/Orders/Order/Order';

const ShowOrder = ({order}) => {
    return (
        <div>
            {order.name} {order.OrderDate}
        </div>
    );
};

export default ShowOrder;
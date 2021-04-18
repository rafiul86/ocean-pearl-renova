import React,{useEffect, useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Sidebar from '../../Sidebar/Sidebar';
import { Grid } from '@material-ui/core';


const tableStyle = {
    backgroundColor : 'pink',
    borderRadius : '5px',
    // margin : '60px',
}
const ShowOrder = ({orders}) => {
    const [value,setValue]=useState('');
        const handleSelect=(e,id)=>{
           setValue(e)
           console.log(value,id)
           fetch(`https://vast-journey-70627.herokuapp.com/update/${id}`,{
                    method : 'PATCH',
                    headers : {'Content-Type' : 'application/json' },
                    body : JSON.stringify({status : value})
                })
                .then(res => res.json())
                .then(data =>{
                    alert('data status changed')
                })
            }
    return (
        <div>

<table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Date</th>
                <th className="text-secondary" scope="col">Payment Method</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Current Status</th>
                <th className="text-secondary" scope="col">Manage Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  orders.map((order, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.name}</td>
                        <td>{order.service}</td>
                        <td>{order.price}</td>
                        <td>{new Date(order.OrderDate).toDateString('dd/MM/yyyy')}</td>
                        <td>Card</td>
                        <td>{order.email}</td>
                        <td>{
                         order.status === 'pending'  ? <td style={{backgroundColor : 'red' ,borderRadius : '5px', height : '20px' , width  : '40px'}}>{order.status}</td> : <td style={{backgroundColor : 'lawngreen' , borderRadius : '5px' , height : '20px' , width  : '40px'}}>{order.status}</td>
                        }</td>
                        <td><DropdownButton alignRight title="Manage Status" id="dropdown-menu-align-right"
                         onSelect={(e)=>handleSelect(e,order._id)}>
                        <Dropdown.Item eventKey="pending">Pending</Dropdown.Item>
                        <br/>
                        <Dropdown.Item eventKey="ongoing">Ongoing</Dropdown.Item>
                        <br/>
                        <Dropdown.Item eventKey="done">Done</Dropdown.Item>
                        <br/>
                        <Dropdown.Divider />
                        </DropdownButton></td>
                    </tr>
                    )
                }
            </tbody>
        </table>              
        </div>
      
    );
};

export default ShowOrder;
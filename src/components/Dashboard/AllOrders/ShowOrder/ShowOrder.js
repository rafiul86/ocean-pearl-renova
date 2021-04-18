import React,{useEffect, useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Sidebar from '../../Sidebar/Sidebar';


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
        <div className="row offset-xs-1"> 
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div  className="col-md-10 mt-5" style={tableStyle}>
            <table className="table table-responsive">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Status</th>
                <th className="text-secondary" scope="col">Order Date</th>
                <th className="text-secondary" scope="col">Payment Id</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Change Status</th>
                
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
                        <td>{new Date(order.OrderDate).toDateString("dd/MM/yyyy")}</td>
                        <td>{order.OrderId}</td>
                        <td>{order.email}</td>
                        {/* <td><button onClick={()=>handleStatus(order._id)}>Update Status</button></td> */}
                        <td><DropdownButton
                        alignRight
                        title="Manage Status"
                        id="dropdown-menu-align-right"
                        onSelect={(e)=>handleSelect(e,order._id)}
        >
              <Dropdown.Item eventKey="pending">Pending</Dropdown.Item>
              <br/>
              <Dropdown.Item eventKey="ongoing">Ongoing</Dropdown.Item>
              <br/>
              <Dropdown.Item eventKey="done">Done</Dropdown.Item>
              <Dropdown.Divider />
      </DropdownButton></td>
                    </tr>
                    )
                }
            </tbody>
            </table>
            </div>
        </div>
      
    );
};

export default ShowOrder;
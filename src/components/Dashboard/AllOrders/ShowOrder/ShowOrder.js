import React,{useState} from 'react';
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

  const handleSelect=(e)=>{
           setValue(e)
            }
            const handleStatus = (id) =>{
                fetch(`https://vast-journey-70627.herokuapp.com/update/${id}`,{
                    method : 'PATCH',
                    headers : {'content-type' : 'application/json'},
                    body : JSON.stringify({status : value})
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
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
                <th className="text-secondary" scope="col">Date</th>
                <th className="text-secondary" scope="col">Payment ID</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Change Status</th>
                <th className="text-secondary" scope="col">Action</th>
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
                        <td><button onClick={()=>handleStatus(order._id)}>Update Status</button></td>
                        <td><DropdownButton
                        alignRight
                        title="Manage Status"
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="pending">Pending</Dropdown.Item>
              <br/>
              <Dropdown.Item eventKey="On the Way">On the Way</Dropdown.Item>
              <br/>
              <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
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
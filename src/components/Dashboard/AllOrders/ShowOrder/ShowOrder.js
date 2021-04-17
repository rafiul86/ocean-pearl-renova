import React,{useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'



const ShowOrder = ({order}) => {
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
        <div>
           <p>Service : {order.name} , Order Date :  {order.OrderDate} Customer Email :   {order.email}, Payment ID : {order.OrderId}  <button onClick={()=>handleStatus(order._id)}>Update Status</button> 
            </p> 
            <DropdownButton
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
      </DropdownButton>
        </div>
      
    );
};

export default ShowOrder;
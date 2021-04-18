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
const ShowOrder = ({order}) => {
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
            <p>{order.name}</p>
            <p>{order._id}</p>
            <DropdownButton
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
<br/>
<Dropdown.Divider />
</DropdownButton>
</div>
      
    );
};

export default ShowOrder;
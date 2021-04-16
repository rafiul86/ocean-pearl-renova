import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
  const [loggedInUser , setLoggedInUser] = useContext(GlobalContext)
  const [isAdmin , setAdmin] = useState(false)

  useEffect(()=>{
    fetch('http://localhost:5000/showAdmin',{
      method :'POST',
      headers : {'content-type' : 'application/json'},
      body : JSON.stringify({email : loggedInUser.email})
    })
    .then(res=>res.json())
    .then(data => setAdmin(data))
  },[])
    return (
        <div class="sidebar">
<Link to='/dashboard'>Dashboard</Link>
  <Link to='/allorders'>Booking List</Link>
  <Link to='/reviews'>Add Review</Link>
  { isAdmin && <div>
  <Link to='/setadmin'>Manage Admin</Link>
  <Link to='/addservice'>Add Services</Link>
  <Link to='/removeservice'>Remove Services</Link>
  </div>}
  </div>
    );
};

export default Sidebar;
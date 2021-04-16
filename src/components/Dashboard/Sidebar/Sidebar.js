import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div class="sidebar">
<Link to='/dashboard'>Dashboard</Link>
  <Link to='/allorders'>Booking List</Link>
  <Link to='/reviews'>Add Review</Link>
  <Link to='/setadmin'>Manage Admin</Link>
  <Link to='/addservice'>Add Services</Link>
  <Link to='/removeservice'>Remove Services</Link>
  </div>
    );
};

export default Sidebar;
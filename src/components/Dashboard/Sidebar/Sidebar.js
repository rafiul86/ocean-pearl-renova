import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div class="sidebar">
<Link to='/dashboard'>Dashboard</Link>
  <Link to='/allorders'>Orders</Link>
  <Link to='/admin'>Admin Panel</Link>
  </div>
    );
};

export default Sidebar;
import React from 'react';
import Admin from './Admin/Admin';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="row">
            <div className="col-md-3">
            <Sidebar/>
            </div>
            <div className="col-md-8">
            
            </div>
        </section>
    );
};

export default Dashboard;
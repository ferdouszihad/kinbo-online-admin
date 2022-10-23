import React from 'react';
import List from './List';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center">Welcome to Dashboard</h2>
            <div className="row mt-5">
                <div className="col-md-4">
                    <List></List>
                </div>
                <div className="col-md-8">
                     <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
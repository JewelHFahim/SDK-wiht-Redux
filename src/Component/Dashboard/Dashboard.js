import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../Router/Router';
import "./Dashboard.css";

const Dashboard = () => {

    return (
        <div className='dashboard'>

            <RouterProvider router={router} />
            
        </div>
    );
};

export default Dashboard;
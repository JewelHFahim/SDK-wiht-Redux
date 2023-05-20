import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { isLoading } = useSelector((state) => state.auth);
    const token = localStorage.getItem('token')

    if (isLoading) {
        return <div className='flex justify-center items-center w-full  h-screen bg-slate-200'><PropagateLoader color="#7C81EC" /></div>
    }

    if (token) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivateRouter;
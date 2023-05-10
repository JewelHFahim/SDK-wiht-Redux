import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { isLoading, error, token } = useSelector((state) => state.auth)

    if(isLoading ){
        return <p>Loading.............................</p>
    }

    if (token) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivateRouter;
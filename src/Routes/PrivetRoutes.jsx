import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Pages/Loading/Loading';

const PrivetRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    
    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivetRoutes;
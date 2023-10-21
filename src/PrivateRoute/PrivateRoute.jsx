import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return (
            <div className='flex justify-center h-screen'>
                 <span className="loading loading-infinity text-success loading-lg"></span>
            </div>
        )
    }
    if(user){
        return children;
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoute;